import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function QuotePanel() {
  return (
    <Card variant='outlined' sx={{ margin: 10, padding: 2, width: 800, height: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <br />
        <Typography sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          perspiciatis mollitia, error obcaecati laborum eligendi animi
          laboriosam vitae facere sed dolore quod sapiente distinctio. Sapiente
          earum nam enim fugiat, quia sed voluptatem, iusto possimus deleniti
          totam libero dolor accusamus dignissimos at atque delectus aut id
          placeat eveniet molestias esse eius error? Quos facere cumque dolor
          nulla minima non quisquam aliquid consequuntur cupiditate nemo ad
          exercitationem temporibus aliquam id, alias error nihil reprehenderit
          ab laudantium, asperiores accusamus perferendis! Amet, dolore quae.
        </Typography>
        <br />
        <Typography sx={{ fontSize: 18, fontWeight: 1000 }}>
          - Lorem, ipsum.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default QuotePanel;
