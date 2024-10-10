import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Personagem {
    id: string;
    name: string;
    isWizard: boolean;
    house: string;
    image: string;
}

interface PersonagensState {
    personagens: Personagem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PersonagensState = {
    personagens: [],
    status: 'idle',
    error: null,
};

export const fetchPersonagens = createAsyncThunk('personagens/fetchPersonagens', async () => {
    const response = await axios.get('https://hp-api.onrender.com/api/characters');
    return response.data;
});

const personagensSlice = createSlice({
    name: 'personagens',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonagens.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPersonagens.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.personagens = action.payload;
            })
            .addCase(fetchPersonagens.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Erro ao carregar personagens';
            });
    },
});

export default personagensSlice.reducer;
