import AdminStyles from './admin.module.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from "../App";
import { LogintoDashboard } from '../services';
// MUI Components
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from '@mui/material';

function Login() {
    const [token, setToken, userName, setUsername] = useContext(store);
    const [Input, setInput] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { email, password } = Input;
            let res = await LogintoDashboard({ email, password })
            if (res.data.token) {
                setToken(res.data.token);
                alert(res.data.name)
                setUsername(res.data.name);
                setInput({ email: "", password: "" });
                         navigate("/adminDashboard");
            }
            else if (res.data === "No User Found") {
                alert("Incorrect Admin Credentials");
            }
            else {
                alert("Please Enter Correct Password");
            }
        }
        catch (err) {
            console.error(err);
            alert(err)
        }
    }
    
    return (
        <div className={AdminStyles.body}>
            <section>
                <Box className="container" sx={{ py: 5 }}>
                    <Box className="row d-flex justify-content-center">
                        <Box className="col-11 col-md-6 col-lg-4 my-5">
                            <Paper elevation={4} className={AdminStyles.formBorder}>
                                <Typography variant="h5" align="center" className={`mb-3 ${AdminStyles.formHeading}`}>
                                    Login
                                </Typography>

                                <Box className={`${AdminStyles.formPadding}`} sx={{ px: 3, pb: 3 }}>
                                    <TextField
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        fullWidth
                                        margin="dense"
                                        autoComplete="off"
                                        size="small"
                                        value={Input.email}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        autoComplete="off"
                                        fullWidth
                                        margin="dense"
                                        size="small"
                                        value={Input.password}
                                        onChange={handleChange}
                                    />


                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 2, py: 1 }}
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </Button>
                                    <p className='text-center'>Don't have an account then
                                      &nbsp;   <span className="text-primary " onClick={()=>navigate("/register")} >Signup</span>
                                         </p>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </section>
        </div>
    );
}

export default Login;
