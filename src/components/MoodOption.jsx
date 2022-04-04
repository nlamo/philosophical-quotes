import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';

function MoodOption({ mood }) {
  return (
    <div className='pad-bottom'>
      <FormControlLabel value={`${mood}`} control={<Radio />} label={`${mood}`} />
      <br />
    </div>
  );
}

export default MoodOption;
