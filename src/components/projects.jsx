

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';


import ProjectList from "../components/cards"
const cards = ProjectList();


const defaultTheme = createTheme();

//const cards = [1, 2, 3];

export default function Projects() {
  
  const ColorButton = styled(Button)(() => ({
    color: "#6F0202",
    border: "1px solid #6F0202",
    '&:hover': {
        backgroundColor: "#6F0202",
        color: "#e4e4e4"
    },
    pointerEvents: "auto",
}));
  
  return (
      <>
            <CssBaseline />
        <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
        >
      <Container maxWidth="sm">
            <Typography
              component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          My Projects
        </Typography>
        <Typography align="center" paragraph>
        Behold, a glimpse of these selected web wonders I&rsquo;ve conjured at Erhvervsakademi Aarhus!
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
      </Stack>
    </Container>
  </Box>
  {/* End hero unit */}

        <Container sx={{ py: 2 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((cards, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: "flex", flexDirection: 'column' }}>
          
          <CardMedia
                              component="div"
                              sx={{
                                // 16:9
                                pt: '56.25%',
                              }}
          
                              image={cards.photo}

                  />

            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {cards.title}
            </Typography>

            <Typography>
              {cards.description}
            </Typography>
          </CardContent>

          <CardActions style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginBottom:"2em" }}>
          <Link href={cards.webUrl}><ColorButton variant="outline">View</ColorButton></Link>
          </CardActions>

        </Card>
              </Grid>
            ))}
  </Grid>
        </Container >
      </main >
                              </>
   )}

