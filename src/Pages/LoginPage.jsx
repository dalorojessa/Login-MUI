import {Container, Box, Paper, TextField, Button, Typography, IconButton, InputAdornment} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import supabase from "../Services/Supabase";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Something went wrong.");
    const navigate = useNavigate();
    
    const login = async() => {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if(error !== null){
            setIsError(true);
            setErrorMessage(error.message);
            return
        }

        if(data !== null){
            navigate("/dashboard");
        }

    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Container maxWidth="xs" component={Paper} sx={{p: 3}}>
                    <Typography variant="h5" sx={{p: 1}}>Login</Typography>
                    {
                        isError &&
                        <Box>
                            <Typography color="red" align="center"> {errorMessage} </Typography>
                        </Box>
                    }
                    
                    <Box sx={{p: 1}}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box sx={{p: 1}}>
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Box sx={{p: 1}}>
                        <Button size="large" fullWidth onClick={login} variant="contained" endIcon={<LoginIcon />}>
                            Login
                        </Button>
                    </Box>
                    <Typography align="center">or</Typography>
                    <Box sx={{p: 1}}>
                        <Link to="/signup">
                            <Button size="large" fullWidth variant="contained">
                                Sign Up
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
