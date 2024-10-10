// src/components/CardsPersonagem.tsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface CardsPersonagemProps {
    name: string;
    isWizard: boolean;
    house: string;
    image: string;
}

export const CardsPersonagem: React.FC<CardsPersonagemProps> = ({ name, isWizard, house, image }) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img" height={"400"} image={image} alt={name} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Bruxo: {isWizard ? "Sim" : "Não"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Casa: {house || "Não Possui"}
                </Typography>
            </CardContent>
        </Card>
    );
};
