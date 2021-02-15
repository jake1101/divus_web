import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage';
import Products from './pages/others/Products';
import Technology from './pages/others/Technology';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/technology" component={Technology}></Route>
                    <Route path="/">Not found</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
