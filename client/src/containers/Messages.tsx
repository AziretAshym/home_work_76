import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { useEffect } from 'react';
import { fetchMessages } from '../store/thunks/messagesThunks.ts';
import MessagesList from '../components/MessagesList.tsx';
import MessageForm from '../components/MessageForm.tsx';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';

const Messages = () => {
  const dispatch = useAppDispatch();

  const {messages} = useAppSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MessagesList messages={messages} />} />
        <Route path="/add-message" element={<MessageForm />} />
        <Route path="*" element={<Typography variant={"h1"} textAlign={"center"} fontWeight={600}>Not Found 404</Typography>} />
      </Routes>
    </>
  );
};

export default Messages;