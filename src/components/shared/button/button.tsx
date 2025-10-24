import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface ButtonComponentProps {
  type: 'submit' | 'button';
  text: string;
  handleClick?: () => void;
  link?: string;
}

export const ButtonComponent = ({
  type,
  text,
  handleClick,
  link,
}: ButtonComponentProps) => {
  return (
    <Button
      color="primary"
      {...(link ? { component: Link, to: link } : {})}
      onClick={handleClick}
      type={type}
      variant="contained"
      fullWidth
      disableElevation
    >
      {text}
    </Button>
  );
};
