import React from 'react';
import { IMessage } from '../types';
import dayjs from 'dayjs';
import { Card, CardContent, Typography } from '@mui/material';

interface IOneMessage {
  message: IMessage;
}

const MessageItem: React.FC<IOneMessage> = ({ message }) => {
  return (
    <Card key={message.id} sx={{marginBottom: "30px"}}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2196f3',
        padding: '10px 15px',
        color: 'white',
      }}>
        <Typography variant="h4">{message.author}</Typography>
        <Typography>{dayjs(message.datetime).format('YYYY-MM-DD HH:mm:ss')}</Typography>
      </div>

      <CardContent>
        <Typography variant="h5">{message.message}</Typography>
      </CardContent>
    </Card>
  );
};

export default MessageItem;
