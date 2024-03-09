import React from 'react';
import { List, ListItem, ListItemText,Divider } from '@mui/material';

const PlayerList = ({ players, onPlayerSelect }) => {
    const handlePlayerClick = (player) => {
        onPlayerSelect(player);
    };

    return (
        <List>
            {players && players.map(player => (
                <div key={player.id} onClick={() => handlePlayerClick(player)}>
                    <ListItem button>
                        <ListItemText primary={`${player.firstName} ${player.lastName}`} secondary={`Game Session: ${player.gameSession}`} />
                    </ListItem>
                    <Divider />
                </div>
            ))}
        </List>
    );
};

export default PlayerList;