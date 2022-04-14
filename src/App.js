import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import Header from './components/Header';
import MoodPanel from './components/MoodPanel';
import QuotePanel from './components/QuotePanel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header  />
      <Box className='flex-center-column' sx={{ mb: 8 }}>
        <p className='text-primary'>
          If you are in a certain state, and you feel the need to encourage cognitive flexibility, then you must vary
          your reading material accordingly.
        </p>
      </Box>
      <Box sx={{ flexGrow: 1, mb: 8 }}>
        <Grid className='flex-center-column' gap={6}>
          <Grid >
            <MoodPanel />
          </Grid>
          <Grid>
            <QuotePanel />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default App;
