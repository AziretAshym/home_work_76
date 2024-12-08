import Messages from './containers/Messages.tsx';
import Navbar from './components/Navbar.tsx';
import { CssBaseline } from '@mui/material';

const App = () => {
  return <>
    <CssBaseline/>
    <header>
      <Navbar />
    </header>
    <main>
      <Messages />
    </main>
  </>;
};

export default App;
