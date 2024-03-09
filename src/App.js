import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import PlayerForm from './components/PlayerForm';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    content: {
        marginLeft: drawerWidth,
    },
}));

const initialPlayers = [
    { id: 1, firstName: 'Joe', lastName: 'Caputo', contactNumber: '07658312387', gameSession: 'Black Rain' },
    { id: 2, firstName: 'Piper', lastName: 'Chapman', contactNumber: '07142548798', gameSession: 'Black Rain' },
    { id: 3, firstName: 'Tasha', lastName: 'Jefferson', contactNumber: '07998987220', gameSession: 'Black Rain' },
    { id: 4, firstName: 'Gloria', lastName: 'Mendoza', contactNumber: '07512645873', gameSession: 'Black Rain' },
    { id: 5, firstName: 'Theodore', lastName: 'Bagwell', contactNumber: '07561384896', gameSession: 'One Last Riddle' },
];

const App = () => {
    const classes = useStyles();
    const [selectedPage, setSelectedPage] = useState('PlayerList');
    const [players, setPlayers] = useState(initialPlayers);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePageChange = (page) => {
        setSelectedPage(page);
        setSelectedPlayer(null); // Reset selected player when changing pages
    };

    const handlePlayerSelection = (player) => {
        setSelectedPlayer(player);
        setSelectedPage('PlayerDetails'); // Set the page to PlayerDetails
    };

    const addPlayer = (newPlayer) => {
        setPlayers([...players, { id: players.length + 1, ...newPlayer }]);
    };

    return (
        <div>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                classes={{ paper: classes.drawer }}
            >
                <List>
                    <ListItem button onClick={() => handlePageChange('PlayerList')}>
                        <ListItemText primary="Player List" />
                    </ListItem>
                    <ListItem button onClick={() => handlePageChange('PlayerDetails')}>
                        <ListItemText primary="Player Details" />
                    </ListItem>
                    <ListItem button onClick={() => handlePageChange('PlayerForm')}>
                        <ListItemText primary="Add Player" />
                    </ListItem>
                </List>
            </Drawer>

            <div className={classes.content}>
                {selectedPage === 'PlayerList' && <PlayerList players={players} onPlayerSelect={handlePlayerSelection} />}
                {selectedPage === 'PlayerDetails' && (selectedPlayer ? <PlayerDetails player={selectedPlayer} /> : <div>No player profile selected</div>)}
                {selectedPage === 'PlayerForm' && <PlayerForm onSubmit={addPlayer} />}
            </div>
        </div>
    );
};

export default App;