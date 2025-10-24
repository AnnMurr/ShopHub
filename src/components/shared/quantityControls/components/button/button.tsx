import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface ButtonProps {
  handleClick: () => void;
  Icon: React.ElementType<SvgIconProps>;
}

export const Button = ({ handleClick, Icon }: ButtonProps) => {
  return (
    <IconButton
      sx={{
        border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 0,
      }}
      onClick={handleClick}
      size="small"
    >
      <Icon color="primary" />
    </IconButton>
  );
};
