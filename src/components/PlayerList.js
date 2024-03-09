import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, IconButton, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PlayerList = ({ players, onPlayerSelect, onDeletePlayer }) => {
    const [selectedSession, setSelectedSession] = useState('All');

    const handlePlayerClick = (player) => {
        onPlayerSelect(player);
    };

    const handleDeleteClick = (player) => {
        onDeletePlayer(player);
        if (selectedSession === player.gameSession) {
            setSelectedSession('All'); // Reset selected session if deleted player was in the selected session
        }
    };

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };

    return (
        <div>
            <Select value={selectedSession} onChange={handleSessionChange}>
                <MenuItem value="All">All Sessions</MenuItem>
                {players && [...new Set(players.map(player => player.gameSession))].map(session => (
                    <MenuItem key={session} value={session}>{session}</MenuItem>
                ))}
            </Select>
            <List>
                {players && players.filter(player => selectedSession === 'All' || player.gameSession === selectedSession).map(player => (
                    <div key={player.id}>
                        <ListItem button onClick={() => handlePlayerClick(player)}>
                            <ListItemText primary={`${player.firstName} ${player.lastName}`} secondary={`Game Session: ${player.gameSession}`} />
                        </ListItem>
                        <IconButton aria-label="delete" onClick={() => handleDeleteClick(player)}>
                            <DeleteIcon />
                        </IconButton>
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
};


export default PlayerList;