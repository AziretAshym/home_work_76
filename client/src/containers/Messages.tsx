import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { useEffect } from 'react';
import { fetchMessages } from '../store/thunks/messagesThunks.ts';
import MessagesList from '../components/MessagesList.tsx';
import MessageForm from '../components/MessageForm.tsx';

const Messages = () => {
  const dispatch = useAppDispatch();

  const {messages} = useAppSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <MessageForm />
      <MessagesList messages={messages} />
    </>
  );
};

export default Messages;