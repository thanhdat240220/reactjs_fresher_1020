import React, { Component } from 'react';
import Header from '../../component/share/header';
import Footer from '../../component/share/footer';
import SideBar from '../../component/share/sidebar';
import Content from '../../component/home/index';

import './index.css';

class HomePage extends Component {
    constructor(prop) {
        super(prop);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Content />
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomePage;