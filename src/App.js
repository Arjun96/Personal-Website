import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Layout>
            <Header title="Arjun Luthra" scroll>
                <Navigation>
                    <Link to="/">Resume</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/">About Me</Link>
                    <Link to="/">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/">Resume</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/">About Me</Link>
                    <Link to="/">Contact Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main></Main>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
