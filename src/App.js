import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link, HashRouter} from 'react-router-dom'
import pdf from './documents/Arjun Luthra Resume.pdf'

function App() {
  return (
    <HashRouter>
    <div className="App">
        <Layout>
          <Header className="header-color" title="Arjun Luthra" scroll>
            <Navigation className="navigation-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a>
            </Navigation>
          </Header>
          <Drawer title="Arjun Luthra">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main></Main>
          </Content>
        </Layout>
    </div>
    </HashRouter>
  );
}

export default App;
