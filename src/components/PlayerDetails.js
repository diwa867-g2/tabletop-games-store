import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PlayerDetails = ({ player }) => {
    if (!player) {
        return <div>No player profile selected</div>;
    }

    return (
        <Card variant="outlined" style={{ backgroundColor: '#f9f9f9', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
                <Typography variant="h5" style={{ color: '#333', marginBottom: '8px' }}>{`${player.firstName} ${player.lastName}`}</Typography>
                <Typography variant="body1" style={{ color: '#555', marginBottom: '4px' }}>{`Contact Number: ${player.contactNumber}`}</Typography>
                <Typography variant="body2" style={{ color: '#777' }}>{`Game Session: ${player.gameSession}`}</Typography>
            </CardContent>
        </Card>
    );
};

export default PlayerDetails;