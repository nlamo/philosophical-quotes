import MoodOption from './MoodOption';
import LeftPanel from './shared/LeftPanel';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { RadioGroup } from '@mui/material';

function Moods() {
  return (
    <LeftPanel>
      <FormControl>
        <RadioGroup>
          <MoodOption mood='Hopeful' />
          <MoodOption mood='Pessimistic' />
          <MoodOption mood='Analytical' />
          <MoodOption mood='Esoteric' />
          <MoodOption mood='Undefined' />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Button variant='outlined' color='secondary'>Select Mood</Button>
    </LeftPanel>
  );
}

export default Moods;
