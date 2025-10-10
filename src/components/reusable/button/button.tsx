import Button from "@mui/material/Button";

interface ButtonComponentProps {
    type: "submit" | "button",
    text: string,
    handleClick?: () => void,
}

export const ButtonComponent = ({ type, text, handleClick }: ButtonComponentProps) => {
    return (
        <Button
            sx={{
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#333',
                },
            }}
            onClick={handleClick}
            type={type}
            variant="contained"
            fullWidth
            disableElevation>
            {text}
        </Button>
    )
}