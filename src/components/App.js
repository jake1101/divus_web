import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import Products from './pages/others/productsComp/Products';
import Technology from './pages/others/technologyComp/Technology';
import contact from './pages/others/contactComp/Contact';
import service from './pages/others/serviceComp/Service';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/technology" component={Technology}></Route>
                    <Route path="/contact" component={contact}></Route>
                    <Route path="/service" component={service}></Route>
                    <Route path="/">Not found</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
