import React, {Component} from 'react';

import { Link, Route} from 'react-router-dom';

import Users from './containers/Users';
import Pizza from './containers/Pizza';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');

});


class App extends Component {
    render(){
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                    <Router path="/" exact component={Users} />
                    <Router path="/pizza"  component={AsyncPizza} />

            </div>
        );
    }
}

export default App;