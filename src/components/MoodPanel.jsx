import MoodOption from './MoodOption';
import LeftPanel from './shared/LeftPanel';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { RadioGroup } from '@mui/material';

function Moods() {
  return (
    <LeftPanel>
      <FormControl>
        <RadioGroup sx={{ mb: 2 }}>
          <MoodOption mood='Optimistic' />
          <MoodOption mood='Pessimistic' />
          <MoodOption mood='Analytic' />
          <MoodOption mood='Esoteric' />
          <MoodOption mood='Undefined' />
        </RadioGroup>
      </FormControl>
      <Button variant='outlined' color='secondary'>Select Mood</Button>
    </LeftPanel>
  );
}

export default Moods;
