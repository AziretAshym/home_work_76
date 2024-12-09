import { IMessage } from '../types';
import * as React from 'react';
import OneMessage from './OneMessage.tsx';
import { Container } from '@mui/material';
import { useAppSelector } from '../app/hooks.ts';
import Loader from './UI/Loader.tsx';

interface IMessagesList {
  messages: IMessage[];
}

const MessagesList: React.FC<IMessagesList> = ({messages}) => {

  const fetchLoader = useAppSelector((state) => state.messages.loadings.fetching);

  return (
    <Container>
      {fetchLoader ? (<Loader />) : (
        <>
          {messages.slice(-30).map((message) => (
            <OneMessage key={message.id} message={message} />
          ))}
        </>
      )}
    </Container>
  );
};

export default MessagesList;