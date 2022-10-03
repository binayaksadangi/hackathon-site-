import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import About from './Components/About';
import Search from './Components/Searchfield';

const theme = createTheme({
  palette: {
    primary:{
      main: '#ffffff'
    }
  },
});
function App() {
  return (
    
      <ThemeProvider theme={theme}>
           <Navbar/>
           <Home/>
           <About/>
           <Search/>
      </ThemeProvider>
     

  );
}

export default App;
