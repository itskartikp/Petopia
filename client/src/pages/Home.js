import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import HeroImg from '../components/Hero/Hero';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Guide from '../images/guide.png';
import Community from '../images/community.png';
import Support from '../images/support.png';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PetsIcon from '@mui/icons-material/Pets';
import Divider from '@mui/material/Divider';
import HealthPet from '../images/health.png';

export default function Home() {
  return (
    <Container maxWidth='100'>
      <HeroImg />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-1.8em',
        paddingBottom: '1em'
      }}>
        <Typography
          variant='h3'
          sx={{
            backgroundColor: '#ffffff9f',
            width: '14em', textAlign: 'center',
            color: '#36393F',
            fontSize: { xs: '38px', md: '48px', lg: '58px' },
            paddingTop: '5px',
            paddingBottom: '5px'
          }}
        >
          Welcome to Petopia!
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '1em'
      }}
      >
        <Typography
          variant='h5'
          sx={{
            width: {xs: '100%', md: '70%'},
            textAlign: 'center',
            color: '#36393F',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: { xs: '20px', md: '23px', lg: '26px' },
          }}
        >
          Petopia is your go-to destination for all things pet-related. Join our vibrant community of pet lovers to chat, connect with fellow pet owners, and show off your adorable fur babies.
          Embrace the joy of pet ownership with Petopia!





        </Typography>
      </Box>

      <Box sx={{
        flexGrow: 1,
        marginTop: '2.6em',
        maxWidth: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <Grid container spacing={1}
          justifyContent='space-evenly'
          alignItems='flex-start'>
          <Card sx={{ 
            maxWidth: { xs: '98%', md: '60%', lg: 360 } 
            }}
            >
            <CardMedia
              component="img"
              height="auto"
              image={Guide}
              alt="guidance"
              sx={{
                paddingLeft: '2em',
                paddingRight: '2em',
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: '#36393F',
                  fontSize: '24px',
                  textAlign: 'center'
                }}
              >
                Tailored Pet Shop
              </Typography>
              <Typography variant="body1" color="text.secondary">
              Spoil your fur babies with our thoughtfully curated pet shop. Explore a wide range of high-quality products, from gourmet treats and stylish accessories to innovative toys and health essentials. Give your pets the best with Petopia's handpicked selection.
                <br></br>
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Gourmet Pet Treats
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Stylish Accessories
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Innovative Pet Toys
                <br></br>
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ 
            maxWidth: { xs: '98%', md: '60%', lg: 360 } 
            }}
            >
            <CardMedia
              component="img"
              height="auto"
              image={Support}
              alt="support"
              sx={{
                paddingLeft: '2em',
                paddingRight: '2em',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center' }}>
              Chat with Pet Lovers
              </Typography>
              <Typography variant="body1" color="text.secondary">
              Connect with a community of passionate pet owners from around the world. Share your pet stories, seek advice, and bond over your love for animals. Petopia's real-time chat feature ensures instant communication and meaningful connections.
                <br></br>
                <br></br>
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Instant Connections
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Share Pet Stories

                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Seek Advice

                <br></br>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ 
            maxWidth: { xs: '98%', md: '60%', lg: 360 } 
            }}
            >
            <CardMedia
              component="img"
              height="auto"
              image={Community}
              alt="community"
              sx={{
                paddingLeft: '2em',
                paddingRight: '2em',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#36393F', fontSize: '24px', textAlign: 'center' }}>
              Pet Meetups and Events
              </Typography>
              <Typography variant="body1" color="text.secondary">
              Discover exciting pet meetups and events in your area or host your own. Whether it's playdates, training sessions, or charity events, Petopia brings pet enthusiasts together to create unforgettable memories for both pets and their owners.
                <br></br>
                <br></br>
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Share your stories
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Seek advice from other pet owners
                <br></br>
                <PetsIcon sx={{ marginBottom: '-5px', marginRight: '7px', marginLeft: '5px' }} /> Learn about local events & resources
                <br></br>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>

      
    </Container>

  )
}
