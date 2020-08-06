import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="App">
        <Layout>
            <Header title="Arjun Luthra" scroll>
                <Navigation>
                    <a href="/">Resume</a>
                    <a href="/">Projects</a>
                    <a href="/">About Me</a>
                    <a href="/">Contact Me</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Resume</a>
                    <a href="/">Projects</a>
                    <a href="/">About Me</a>
                    <a href="/">Contact Me</a>
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
