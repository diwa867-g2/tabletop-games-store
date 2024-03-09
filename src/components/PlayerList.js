import React from 'react';
import { List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PlayerList = ({ players, onPlayerSelect, onDeletePlayer }) => {
    const handlePlayerClick = (player) => {
        onPlayerSelect(player);
    };

    const handleDeleteClick = (player) => {
        onDeletePlayer(player);
    };

    return (
        <List>
            {players && players.map(player => (
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
    );
};


export default PlayerList;