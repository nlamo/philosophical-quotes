import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function LeftPanel({ children }) {
  return (
    <Card className='flex-center' sx={{ margin: 10, width: 250, height: 375 }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>  
  )
}

export default LeftPanel