import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const PlayerForm = ({ onSubmit, selectedPlayer }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [gameSession, setGameSession] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [errors, setErrors] = useState({});

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
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            if (isEditMode) {
                onSubmit({ id: selectedPlayer.id, firstName, lastName, contactNumber, gameSession });
            } else {
                onSubmit({ firstName, lastName, contactNumber, gameSession });
                resetForm();
            }
        }
    };

    const validateForm = () => {
        let errors = {};

        if (!firstName.trim()) {
            errors.firstName = 'First Name is required';
        }
        
        if (!lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }

        if (!contactNumber.trim()) {
            errors.contactNumber = 'Contact Number is required';
        }

        if (!gameSession.trim()) {
            errors.gameSession = 'Game Session is required';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={3} style={{ padding: '20px', width: '300px' }}>
                <Typography variant="h6" style={{ marginBottom: '10px', textAlign: 'center' }}>{isEditMode ? 'Edit Player' : 'Add New Player'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="First Name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        fullWidth 
                        style={{ marginBottom: '10px' }}
                        error={errors.firstName}
                        helperText={errors.firstName}
                    />
                    <TextField 
                        label="Last Name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        fullWidth 
                        style={{ marginBottom: '10px' }}
                        error={errors.lastName}
                        helperText={errors.lastName}
                    />
                    <TextField 
                        label="Contact Number" 
                        value={contactNumber} 
                        onChange={(e) => setContactNumber(e.target.value)} 
                        fullWidth 
                        style={{ marginBottom: '10px' }}
                        error={errors.contactNumber}
                        helperText={errors.contactNumber}
                    />
                    <TextField 
                        label="Game Session" 
                        value={gameSession} 
                        onChange={(e) => setGameSession(e.target.value)} 
                        fullWidth 
                        style={{ marginBottom: '10px' }}
                        error={errors.gameSession}
                        helperText={errors.gameSession}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        {isEditMode ? 'Save Changes' : 'Add Player'}
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default PlayerForm;