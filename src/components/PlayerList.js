import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, IconButton, Select, MenuItem, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PlayerList = ({ players, onPlayerSelect, onDeletePlayer }) => {
    const [selectedSession, setSelectedSession] = useState('All');

    const handlePlayerClick = (player) => {
        onPlayerSelect(player);
    };

    const handleDeleteClick = (player) => {
        onDeletePlayer(player);
        if (selectedSession === player.gameSession) {
            setSelectedSession('All');
        }
    };

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };

    return (
        <div>
            <Select value={selectedSession} onChange={handleSessionChange} style={{ marginBottom: '10px' }}>
                <MenuItem value="All">All Sessions</MenuItem>
                {players && [...new Set(players.map(player => player.gameSession))].map(session => (
                    <MenuItem key={session} value={session}>{session}</MenuItem>
                ))}
            </Select>
            <List>
                {players && players.filter(player => selectedSession === 'All' || player.gameSession === selectedSession).map(player => (
                    <div key={player.id}>
                        <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f9f9f9', marginBottom: '5px', borderRadius: '8px' }}>
                            <Grid container alignItems="center">
                                <Grid item xs={9} onClick={() => handlePlayerClick(player)}>
                                    <ListItemText primary={`${player.firstName} ${player.lastName}`} secondary={`Game Session: ${player.gameSession}`} />
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton aria-label="delete" onClick={() => handleDeleteClick(player)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
};

export default PlayerList;