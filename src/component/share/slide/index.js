import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from 'react';
import Slider from 'react-slick';
import classes from './index.module.css';

class MySlider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={[classes.containerSlider, this.props.cusContainerSlider].join(' ')}>
                <Slider {...this.props.settings} className={this.props.cusClassSlider}>
                    {this.props.links.map((link, i) => {
                        return (
                            <img
                                key={i}
                                src={link}
                                alt='not found'
                                height={this.props.heightImg}
                                width={this.props.width}
                                className={classes.sliderImg}
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default MySlider;