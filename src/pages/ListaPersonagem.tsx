// src/pages/PersonagensListagem.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/models/Hooks';
import { fetchPersonagens } from '../store/slices/PersonagensSlice';
import { Box, Grid } from '@mui/material';
import { CardsPersonagem } from '../components/CardsPersonagem/CardsPersonagens';

export const PersonagensListagem: React.FC = () => {
    const dispatch = useAppDispatch();
    const personagens = useAppSelector((state) => state.personagens.personagens);
    const status = useAppSelector((state) => state.personagens.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPersonagens());
        }
    }, [status, dispatch]);

    return (
        <Box>
            <Grid container spacing={2} justifyContent="center">
                {personagens.map((personagem) => (
                    <Grid item key={personagem.id}>
                        <CardsPersonagem
                            name={personagem.name}
                            isWizard={personagem.isWizard}
                            house={personagem.house}
                            image={personagem.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
