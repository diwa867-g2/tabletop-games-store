import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

const PlayerForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [gameSession, setGameSession] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ firstName, lastName, contactNumber, gameSession });
        setFirstName('');
        setLastName('');
        setContactNumber('');
        setGameSession('');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <TextField label="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <TextField label="Game Session" value={gameSession} onChange={(e) => setGameSession(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <Button type="submit" variant="contained" color="primary">Add Player</Button>
                </form>
            </Paper>
        </div>
    );
};

export default PlayerForm;