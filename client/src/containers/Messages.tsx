import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { useEffect } from 'react';
import { fetchMessages } from '../store/thunks/messagesThunks.ts';
import MessagesList from '../components/MessagesList.tsx';

const Messages = () => {
  const dispatch = useAppDispatch();

  const {messages, loadings} = useAppSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  if (loadings.fetching) return <div>Loading...</div>;

  return (
    <>
      <MessagesList messages={messages} />
    </>
  );
};

export default Messages;