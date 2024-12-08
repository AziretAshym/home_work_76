import { createSlice } from '@reduxjs/toolkit';
import { fetchMessages } from '../thunks/messagesThunks';
import { IMessage } from '../../types';

interface MessagesState {
  messages: IMessage[];
  loadings: {
    add: boolean;
    fetching: boolean;
  };
}

const initialState: MessagesState = {
  messages: [],
  loadings: {
    add: false,
    fetching: false,
  },
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loadings.fetching = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loadings.fetching = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.loadings.fetching = false;
      });
  },
});

export const messagesReducer = messagesSlice.reducer;
