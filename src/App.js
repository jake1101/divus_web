import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './components/mainComp/MainPage';
import Products from './components/contentComp/productsComp/Products';
import Technology from './components/contentComp/technologyComp/Technology';
import Contact from './components/contentComp/contactComp/Contact';
import Service from './components/contentComp/serviceComp/Service';
import Intro from './components/contentComp/introComp/Intro';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/technology" component={Technology}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/service" component={Service}></Route>
                    <Route path="/intro" component={Intro}></Route>
                    <Route path="/">Not found</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
