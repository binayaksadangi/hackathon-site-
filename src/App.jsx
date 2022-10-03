import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import About from './Components/About';
import Search from './Components/Searchfield';
import Createchallenge from './Components/Createchallenge';
import {Route, Routes} from 'react-router-dom'
const theme = createTheme({
  palette: {
    primary:{
      main: '#ffffff'
    }
  },
});
function App() {
  return (
    <>
    
      <ThemeProvider theme={theme}>
           <Navbar/>
          
           <Routes>
             
           <Route path={"/"} element={<>
            <Home/>
           <About/>
           <Search/>
           </>}/>
           <Route path={"/createchallenge"} element={<Createchallenge/>}/>
           </Routes>
      </ThemeProvider>
    
      </>
  );
}

export default App;
