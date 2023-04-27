import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
import Center from './Center'
import { useSelector, useDispatch } from 'react-redux';
import { convertTitleToNumber, convertNumberToTitle } from '../actions';

function Converter() {
    const [columnTitle, setColumnTitle] = useState('');
    const [columnNumber, setColumnNumber] = useState('');
    const dispatch = useDispatch();
    const upperCaseRegex = /^[A-Z]+$/;
    let { columnTitle: title, columnNumber: number } = useSelector((state) => state);

    const handleTitleChange = (event) => {
        setColumnTitle(event.target.value.toUpperCase());
    };

    const handleNumberChange = (event) => {
        setColumnNumber(event.target.value);
    };

    const handleTitleSubmit = (event) => {
        event.preventDefault();
        dispatch(convertTitleToNumber(columnTitle));
    };

    const handleNumberSubmit = (event) => {
        event.preventDefault();
        dispatch(convertNumberToTitle(columnNumber));
    };

    return (
        <Center>
            <Card sx={{ width: 600 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Excel Column Converter
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form onSubmit={handleTitleSubmit}>
                            <TextField
                                label='Enter column name'
                                value={columnTitle}
                                onChange={handleTitleChange}
                                error={!upperCaseRegex.test(columnTitle) && columnTitle.length !== 0}
                                helperText={!upperCaseRegex.test(columnTitle) && columnTitle.length !== 0 ? 'Input accepts only uppercase letters' : ''}
                            />
                            <TextField
                                label='Result'
                                value={number}
                                onChange={handleTitleChange}
                                disabled
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                disabled={!upperCaseRegex.test(columnTitle)}
                            >
                                Convert to Number
                            </Button>
                        </form>
                        <form onSubmit={handleNumberSubmit}>
                            <TextField
                                label='Enter column number'
                                value={columnNumber}
                                onChange={handleNumberChange}
                                error={isNaN(columnNumber)}
                                helperText={isNaN(columnNumber) ? 'Input accepts only digits' : ''}
                            />
                            <TextField
                                label='Result'
                                value={title}
                                onChange={handleTitleChange}
                                disabled
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                disabled={isNaN(columnNumber) || columnNumber.length === 0 ? true : false}
                            >
                                Convert to Title
                            </Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );
}

export default Converter;
