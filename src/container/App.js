import { Container } from '@mui/material';
import { Fragment } from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/Header/NavBar';
import Main from '../components/Main';

const App = () => {
    return (
        <Fragment>
            <NavBar />
            <Container maxWidth="lg">
                <Header />
                <Content />
                <Main />
                <Footer />
            </Container>
        </Fragment>
    );
};

export default App;
