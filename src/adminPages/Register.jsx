import AdminStyles from './admin.module.css';
import { RegisterUser } from '../services';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 🧱 MUI Components
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function Register() {
  const [Input, setInput] = useState({ name: "", email: "", password: "", phone: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevVals) => ({ ...prevVals, [name]: value }));
  };

  const handleSubmit = async(e) => {
   try{ 
    e.preventDefault();
    const { name, email, password, phone, address } = Input;
  let result= await RegisterUser({ name, email, password, phone, address });
    if(result){
        setInput({ name: "", email: "", password: "", phone: "", address: "" });
        navigate("/login");
    }
}
  catch(err){
    console.error(err)
  }
}
  

  return (
    <div className={AdminStyles.body}>
      <section>
        <Box className="container">
          <Box className="row d-flex justify-content-center">
            <Box className="col-11 col-md-6 col-lg-4 my-5">
              <Paper elevation={4} className={AdminStyles.formBorder}>
                <Typography variant="h5" align="center" className={`mb-3 ${AdminStyles.formHeading}`}>
                  Register
                </Typography>

                <Box className={`${AdminStyles.formPadding}`} sx={{ px: 3, pb: 3 }}>
                  <TextField
                    label="Enter Name"
                    name="name"
                    fullWidth
                    margin="dense"
                    size="small"
                    value={Input.name}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    fullWidth
                    margin="dense"
                    size="small"
                    value={Input.email}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="dense"
                    size="small"
                    value={Input.password}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Phone Number"
                    name="phone"
                    fullWidth
                    margin="dense"
                    size="small"
                    value={Input.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Address"
                    name="address"
                    fullWidth
                    margin="dense"
                    size="small"
                    value={Input.address}
                    onChange={handleChange}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, py: 1 }}
                    onClick={handleSubmit}
                  >
                    Register Here
                  </Button>
                                                      <p className='text-center'>Already have an account then
                                      &nbsp;   <span className="text-primary " onClick={()=>navigate("/login")} >Login</span>
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

export default Register;
