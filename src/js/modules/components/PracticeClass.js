import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        this.state() = {
            loading: true,
            data: props
        };
    };
    render() {
        return <h1>Hello world</h1>;
    };
};

export default ClassComponent;