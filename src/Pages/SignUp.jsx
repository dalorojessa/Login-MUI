import {Container, Box, TextField, Typography, Button, CssBaseline, Grid, FormControlLabel, Checkbox, Avatar } from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Link } from "react-router-dom";

export default function SignUpPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}> 
                <Avatar sx={{bgcolor: 'secondary.main' }}>
                    <PersonAddAltRoundedIcon />
                </Avatar> 
                </Box>
                    <Typography variant='h5' sx={{p: 1, textAlign: 'center'}}>Sign up</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="given-name" 
                            name="firstName" 
                            required 
                            fullWidth 
                            id="firstName"
                            label="First Name"
                            autoFocus
                            />
                        </Grid> 
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="family-name"
                            required 
                            fullWidth 
                            id="lastName" 
                            label="Last Name"
                            name="lastName" 
                            />
                        </Grid>   
                        <Grid item xs={12}>
                            <TextField required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I agree to the Terms & Privacy Policy."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit"
                                fullWidth
                                variant="contained">
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/" variant="body2">
                                Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}
