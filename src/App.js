import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import Header from './components/Header';
import MoodPanel from './components/MoodPanel';
import QuotePanel from './components/QuotePanel';

function App() {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid className='flex-center' container spacing={2}>
          <Grid>
            <MoodPanel />
          </Grid>
          <Grid>
            <QuotePanel />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
