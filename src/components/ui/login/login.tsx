import { Header } from "../../shared/header/header";
import { Container } from "@mui/material";
import { Form } from "./components/form/form";

export const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Form />
            </Container>
        </>
    )
}