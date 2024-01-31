import React from 'react';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import { Container, Typography, Paper } from '@mui/material';
import cover1 from '../assets/images/cover1.jpg';
import cover2 from '../assets/images/cover2.jpg';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/Home.css';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className="carousel-container">
        <Slider {...sliderSettings}>
          <div>
            <img src={cover1} alt="Slide 1" />
          </div>
          <div>
            <img src={cover2} alt="Slide 2" />
          </div>
        </Slider>
      </Container>
      <Container maxWidth="md" className="content">
        <Typography variant="h2" gutterBottom>
          WELCOME
        </Typography>
        <p>Our Story Under the aegis of Vishy Chess Academy,a self taught but enthusiastic chess instructor, we are building a community of chess enthusiasts of all ages and expertises across 3 continents. What started in the by lanes of Mumbai as an occasional hobby is now a family of 100+ learners from 3 year old toddlers to 50 year old, all improving as players and individual day.</p>
      <p>
      CHESS GURUKUL founded in the year 2008, to provide systematic and effective chess training to the players of all levels  from complete beginners to World championship contenders. We believe that learning should be fun and instructive at the same time.</p>

<p>Chess Academy is the first chess academy which catered to all levels of players – from complete beginners to World championship contenders.</p>

<p>Chess Academy provides training to chess players of all levels. The platform offers various courses and training programs for beginners, intermediate, and advanced level chess players.</p>

<p>Chess Academy has a team of experienced coaches who provide personalized training and guidance to students. The platform also hosts regular tournaments and events to help students improve their game and compete with other players.</p>

<p>Chess Academy aims to promote the game of chess and help students achieve their full potential in the game.</p>

<p>Chess Academy plays a huge part in the world and Indian chess in all categories with students like GM Praggnanandhaa, GM Karthikeyan Murali, GM Aravind Chidambaram, WGM Vaishali, GM Pranesh, GM Arjun Kalyan, WGM Savithashri, WGM Rakshittha Ravi, IM V.S.Rahul and many others.</p>

<p>Our medal tally is an exclusive sample of the products we nurture. Chess Gurukul students medal tally:</p>

<p>2 Bronze Medal in Chess Olympiad
40 Medals in World Youth Championships
45 Medals in Asian Youth Championships
5 Titles in Indian National Senior Championships
7 Medals in Asian Senior Championships
The team of Chess Gurukul consists of the following: GM Ramesh, WGM Aarthie Ramaswamy, GM Ankit, (IM) Kunal, WFM Harshini, WFM Ruthumbara and others learned tutors.
      </p>
        <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="body1" paragraph>
            {/* Your content paragraphs go here */}
          </Typography>
          {/* Add more Typography components as needed */}
        </Paper>
        </Container>
        <Footer />
    </>
  );
}

export default Home;
