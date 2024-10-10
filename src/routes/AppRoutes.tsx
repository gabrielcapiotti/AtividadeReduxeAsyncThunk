import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersonagensListagem } from '../pages/ListaPersonagem';

export const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PersonagensListagem />} />
            </Routes>
        </Router>
    );
};

