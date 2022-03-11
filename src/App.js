import { BrowserRouter as Router, Routes  , Route } from 'react-router-dom'
import  Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})
const useStyles = makeStyles({
  field:{
      marginTop:60,
      marginBottom:40,
      display:'block'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Notes/>} />
          <Route path="/create" element={<Create
                                               classes={classes}
                                          />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
