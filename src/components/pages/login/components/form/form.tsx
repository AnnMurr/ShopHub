import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '@/components/shared/button/button';
import {
  passwordRegex,
  emailRegex,
  userData,
} from '@/components/shared/constants/consts';
import { Spinner } from '@/components/shared/spinner/spinner';
import { setCredentials } from '@/redux/authSlice';
import { AppDispatch } from '@/redux/store';
import { useLoginMutation } from '@/services/authApi';
import { UserType } from '@/types/user';

interface ErrorsType {
  email: string;
  password: string;
}

export const Form = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<ErrorsType>({ email: '', password: '' });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateForm = () => {
    let valid: boolean = true;
    const newErrors: ErrorsType = { email: '', password: '' };

    if (!emailRegex.test(email)) {
      newErrors.email = 'invalid email';
      valid = false;
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        'The password must be at least 8 characters long, with at least 1 lowercase letter, 1 uppercase letter, and 1 symbol';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const data: UserType = await login(userData).unwrap();
        dispatch(setCredentials({ user: data, token: data.accessToken }));
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 20,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        LOGIN
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          label="Email"
          type="text"
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          sx={{ mb: 2 }}
          error={!!errors.password}
          helperText={errors.password}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <ButtonComponent type="submit" text="Log in" />
      </Box>
    </Paper>
  );
};
