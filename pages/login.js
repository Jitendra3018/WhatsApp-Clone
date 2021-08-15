import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider, provider1, provider2 } from "../firebase";

function Login() {
    const signInWithGoogle = () => {
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message);
        });
    };
    const signInWithFacebook = () => {
        auth.signInWithPopup(provider1).catch((error) => {
            alert(error.message);
        });
    };

    const signInWithTwitter = () => {
        auth.signInWithPopup(provider2).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
                <Button
                    style={{
                        marginBottom: "10px",
                        backgroundColor: "green",
                        color: "white",
                    }}
                    onClick={signInWithGoogle}
                    variant="outline"
                >
                    Sign in with Google
                </Button>
                <Button
                    onClick={signInWithFacebook}
                    style={{
                        marginBottom: "10px",
                        backgroundColor: "darkblue",
                        color: "white",
                    }}
                    variant="outline"
                >
                    Sign in with Facebook
                </Button>
                <Button
                    style={{ backgroundColor: "skyblue", color: "black" }}
                    onClick={signInWithTwitter}
                    variant="outline"
                >
                    Sign in with Twitter
                </Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 100px rgba(150, 180, 257, 0.12),
        0 1px 50px rgba(150, 180, 257, 0.8);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;
