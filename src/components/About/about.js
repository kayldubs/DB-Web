import * as React from 'react';

import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import './about.css';

const tiers = [
    {
        title: 'Patient',
        subheader: 'Value Statement',
        description: [

        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Physician',
        subheader: 'Value Statement',
        description: [

        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Payer',
        subheader: 'Value Statement',
        description: [

        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];



const theme = createTheme();

export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                {/* Hero unit */}
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
                            color="text.primary"
                            gutterBottom
                        >
                            What We Do
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Mission Statement
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Our Blog</Button>
                        </Stack>
                    </Container>


                    <React.Fragment>
                        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                        <CssBaseline />
                        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Who We Help
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" component="p">
                                Value statement
                            </Typography>
                        </Container>
                        {/* End hero unit */}
                        <Container maxWidth="md" component="main">
                            <Grid container spacing={5} alignItems="flex-end">
                                {tiers.map((tier) => (
                                    // Enterprise card is full width at sm breakpoint
                                    <Grid
                                        item
                                        key={tier.title}
                                        xs={12}
                                        sm={tier.title === 'Enterprise' ? 12 : 6}
                                        md={4}
                                    >
                                        <Card>
                                            <CardHeader
                                                title={tier.title}
                                                subheader={tier.subheader}
                                                titleTypographyProps={{ align: 'center' }}
                                                subheaderTypographyProps={{
                                                    align: 'center',
                                                }}
                                                sx={{
                                                    backgroundColor: (theme) =>
                                                        theme.palette.mode === 'light'
                                                            ? theme.palette.grey[200]
                                                            : theme.palette.grey[700],
                                                }}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'baseline',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <CardMedia component="h2" variant="h3" color="text.primary">
                                                        {tier.image}
                                                    </CardMedia>
                                                </Box>
                                                <ul>
                                                    {tier.description.map((line) => (
                                                        <Typography
                                                            component="li"
                                                            variant="subtitle1"
                                                            align="center"
                                                            key={line}
                                                        >
                                                            {line}
                                                        </Typography>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </React.Fragment>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    {/* Start the team page */}
                    <Typography variant="h2" align="center">Meet The Team</Typography>
                    <Grid container spacing={3}>
                            <Grid class='row'>
                                <Card  class='col-lg-4'>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                           Winston T. Richards, MD
                                        </Typography>
                                        <Typography>CMO</Typography>
                                        <Typography>
                                        Trauma Surgeon located in the North Central Florida area with a background in medicine and applied mathematics. As the founder and CEO, Winston has seen through the development of the Digibeat Electronic Stethoscope from its original prototype developed in Winston’s garage.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card class='col-lg-4'>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                          Clifford Steele
                                        </Typography>
                                        <Typography>CEO</Typography>
                                        <Typography>
                                        Cliff has a background in Aeronautical, Aerospace and Astronautical Engineering from Embry-Riddle Aeronautical University. He focuses on project organization while being the brains behind the engineering that goes into developing the Digibeat Electronic Stethoscope.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card class='col-lg-4'>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                          Karl Dockendorf
                                        </Typography>
                                        <Typography>CTO</Typography>
                                        <Typography>
                                        Karl earned his BS and ME in electrical and computer engineering followed by a Ph.D. in biomedical engineering (neural engineering focus) from the University of Florida.  Karl is well versed in the design of computer hardware, intelligent information processing, machine learning, and adaptation of neuronal networks.  
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}