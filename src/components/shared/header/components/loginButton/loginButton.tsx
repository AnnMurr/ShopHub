import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../../../redux/store';
import { ButtonComponent } from '../../../../reusable/button/button';
import IconButton from '@mui/material/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { logout } from '../../../../../redux/authSlice';

export const LoginButton = () => {
  const userData = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => dispatch(logout());

  return (
    <>
      {userData ? (
        <ButtonComponent
          type="button"
          text="Log out"
          handleClick={handleLogout}
        />
      ) : (
        <IconButton
          sx={{
            padding: '0',
            color: 'black',
          }}
          aria-label="login"
          component={Link}
          to="/login"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
      )}
    </>
  );
};
