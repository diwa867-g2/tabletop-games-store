import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const PlayerForm = ({ onSubmit, selectedPlayer }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [gameSession, setGameSession] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (selectedPlayer) {
            setFirstName(selectedPlayer.firstName);
            setLastName(selectedPlayer.lastName);
            setContactNumber(selectedPlayer.contactNumber);
            setGameSession(selectedPlayer.gameSession);
            setIsEditMode(true);
        } else {
            resetForm();
        }
    }, [selectedPlayer]);

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setContactNumber('');
        setGameSession('');
        setIsEditMode(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            onSubmit({ id: selectedPlayer.id, firstName, lastName, contactNumber, gameSession });
        } else {
            onSubmit({ firstName, lastName, contactNumber, gameSession });
            resetForm();
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
                <Typography variant="h6" style={{ marginBottom: '10px', textAlign: 'center' }}>{isEditMode ? 'Edit Player' : 'Add New Player'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <TextField label="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <TextField label="Game Session" value={gameSession} onChange={(e) => setGameSession(e.target.value)} fullWidth style={{ marginBottom: '10px' }} />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        {isEditMode ? 'Save Changes' : 'Add Player'}
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default PlayerForm;
