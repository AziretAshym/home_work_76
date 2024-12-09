import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage } from '../../types';
import axiosApi from '../../AxiosApi.ts';

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await axiosApi.get<IMessage[]>('/messages');
    return response.data;
  }
);


export const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (message: Omit<IMessage, 'id' | 'datetime'>) => {
    try {
      const response = await axiosApi.post<IMessage>('/messages', message);
      return response.data;
    } catch (e) {
      console.error(e)
    }
  }
);