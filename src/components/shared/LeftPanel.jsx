import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function LeftPanel({ children }) {
  return (
    <Card className='left-panel'>
      <CardContent className='flex-center-column'>
        {children}
      </CardContent>
    </Card>  
  )
}

export default LeftPanel