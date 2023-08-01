import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchParsedMatches = createAsyncThunk(
  'matches/fetchParsedMatches',
  async () => {
    const response = await axios.get(
      'https://api.opendota.com/api/publicMatches'
    );
    return response.data;
  }
);

export const fetchMatchData = createAsyncThunk(
  'matches/fetchMatchData',
  async (matchId) => {
    const response = await axios.get(
      `https://api.opendota.com/api/matches/${matchId}`
    );
    return response.data;
  }
);

export const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    parsedMatches: [],
    selectedMatch: null,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchParsedMatches.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchParsedMatches.fulfilled]: (state, action) => {
      state.parsedMatches = action.payload;
      state.isLoading = false;
    },
    [fetchParsedMatches.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [fetchMatchData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchMatchData.fulfilled]: (state, action) => {
      state.selectedMatch = action.payload;
      state.isLoading = false;
    },
    [fetchMatchData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const selectMatches = (state) => state.matches.parsedMatches;
export const selectSelectedMatch = (state) => state.matches.selectedMatch;
export const selectIsLoading = (state) => state.matches.isLoading;
export const selectIsError = (state) => state.matches.isError;

export default matchesSlice.reducer;
