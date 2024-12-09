import { Container, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks.ts';
import { addMessage, fetchMessages } from '../store/thunks/messagesThunks.ts';
import { useNavigate } from 'react-router-dom';

const MessageForm = () => {

  const initialState = {
    author: '',
    message: ''
  };

  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.author.trim() === '' || form.message.trim() === '') return;

    await dispatch(addMessage({author: form.author, message: form.message}));

    setForm(initialState);
    navigate('/');

    await dispatch(fetchMessages());

  };

  return (
    <>
      <Typography variant={"h3"} sx={{textAlign: "center", fontWeight: "500", mb: "50px"}}>Add new message</Typography>
      <Container>
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', width:'60%', gap: "30px"}}>
          <FormControl>
            <InputLabel htmlFor="author">Enter your name</InputLabel>
            <OutlinedInput
              id="author"
              name={"author"}
              value={form.author}
              onChange={changeInput}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="message">Your message</InputLabel>
            <OutlinedInput
              id="message"
              name={"message"}
              value={form.message}
              onChange={changeInput}
            />
          </FormControl>

          <Button variant="contained" type={"submit"}>Contained</Button>
        </form>
      </Container>
    </>
  );
};

export default MessageForm;