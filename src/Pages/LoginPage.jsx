import {Container, Box, Paper, TextField, Button, Typography, IconButton, InputAdornment} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function LoginPage() {
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const validate = () => {
        setIsError(true);
    }

    return (
        <>
                <Box
                    sx={{
                        alignContent: "center",
                        height: "100vh"
                    }}
                >
                <Container maxWidth="xs" component={Paper} sx={{p: 3}} >
                    <Typography variant="h5" sx={{p: 1}}>Login</Typography>
                    <Box sx={{p: 1}}>
                        <TextField 
                            error={isError} 
                            helperText={isError ? "Invalid Email" : ""} 
                            fullWidth 
                            label="Email" 
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{p: 1}}>
                        <TextField 
                            error={isError} 
                            helperText={isError ? "Invalid Password" : ""} 
                            fullWidth 
                            label="Password" 
                            variant="outlined" 
                            type={showPassword ? "text" : "password"} 
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Box sx={{p: 1}}>
                        <Button size="large" fullWidth onClick={validate} variant="contained" endIcon={<LoginIcon/>}>
                            Login
                        </Button>
                    </Box>
                    <Typography align="center">or</Typography>
                    <Box sx={{p: 1}}>
                        <Button size="large" fullWidth onClick={validate} variant="contained">
                            Sign Up
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
