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