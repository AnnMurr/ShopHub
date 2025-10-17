import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface ButtonComponentProps {
    type: "submit" | "button",
    text: string,
    handleClick?: () => void,
    link?: string
}

export const ButtonComponent = ({ type, text, handleClick, link }: ButtonComponentProps) => {
    return (
        <Button
            sx={{
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#333',
                },
            }}
            {...(link ? { component: Link, to: link } : {})}
            onClick={handleClick}
            type={type}
            variant="contained"
            fullWidth
            disableElevation>
            {text}
        </Button>
    )
}