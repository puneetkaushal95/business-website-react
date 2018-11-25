import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import image from './LogoMakr.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header>
        <Link to="/"><img src={image} alt="logo" style={{height:"100px", width:"250px", paddingTop:"15px"}} to="/"/></Link>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/products">Browse Products</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/aboutus">About</Link>
            </Navigation>
        </Header>
        
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
