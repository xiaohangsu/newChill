import React from 'react';
import ReactDOM from 'react-dom';
require('./../style/scss/style.scss');


class Index extends React.Component {
    render() {
        return <h1>Hello from React!</h1>;
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('app')
);