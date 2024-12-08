import { IMessage } from '../types';
import * as React from 'react';
import OneMessage from './OneMessage.tsx';
import { Container } from '@mui/material';

interface IMessagesList {
  messages: IMessage[];
}

const MessagesList: React.FC<IMessagesList> = ({messages}) => {

  return (
    <Container>
      {messages.map((message) => (
       <OneMessage key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default MessagesList;