import { Button, Container, Fade, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Make sure the path to your context is correct
import backgroundImage from './background.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    container: {
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
    },
    title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: theme.spacing(6),
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    button: {
        padding: theme.spacing(1.5, 5),
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginTop: theme.spacing(4),
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    featureIcon: {
        fontSize: '4rem',
        marginBottom: theme.spacing(2),
        color: theme.palette.secondary.main,
    },
    featureTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    featureDescription: {
        fontSize: '1rem',
    },
}));
    const Homepage = () => {
        const classes = useStyles();
        const { isAuthenticated } = useAuth();  // Use useAuth to determine if user is logged in
    
        const getStartedLink = isAuthenticated ? '/writingPortfolio' : '/authorLogin';  // Conditionally set the link
    

    return (
        <div className={classes.root}>
        <Container className={classes.container}>
            <Fade in={true} timeout={1500}>
            <div>
                <Typography variant="h1" className={classes.title}>
                Welcome to Pencraft
                </Typography>
                <Typography variant="h4" className={classes.subtitle}>
                Explore the world of creativity and inspiration.
                </Typography>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                component={RouterLink}
                to={getStartedLink} 
                >
                Get Started
                </Button>
            </div>
            </Fade>

            <Grid container spacing={4} justify="center">
            <Grid item xs={12} md={4}>
                <Fade in={true} timeout={2500}>
                <div>
                    <Typography variant="h2" align="center" className={classes.featureIcon}>
                    🎨
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.featureTitle}>
                    Creative Content
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.featureDescription}>
                    Discover and share captivating stories, poems, and more.
                    </Typography>
                </div>
                </Fade>
            </Grid>
            <Grid item xs={12} md={4}>
                <Fade in={true} timeout={2500}>
                <div>
                    <Typography variant="h2" align="center" className={classes.featureIcon}>
                    🚀
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.featureTitle}>
                    Launch Your Career
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.featureDescription}>
                    Start your journey as an author and reach a global audience.
                    </Typography>
                </div>
                </Fade>
            </Grid>
            <Grid item xs={12} md={4}>
                <Fade in={true} timeout={2500}>
                <div>
                    <Typography variant="h2" align="center" className={classes.featureIcon}>
                    💡
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.featureTitle}>
                    Inspiration Galore
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.featureDescription}>
                    Find inspiration from fellow authors and connect with like-minded individuals.
                    </Typography>
                </div>
                </Fade>
            </Grid>
            </Grid>
        </Container>
        </div>
    );
    };

    export default Homepage;
