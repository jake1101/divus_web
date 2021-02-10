import Header from './Header';
import Section from './Section';
import Footer from './Footer';

import '../css/App.css';

import React, { useEffect } from 'react';
import $ from 'jquery';

function App() {

    useEffect(() => {
        $(function() {
            const scrollControll = function() {
                var lastScrollTop = 0,
                lst = -130,
                opa = 1.0;
        
                $(window).scroll(function () {
                    var st = $(this).scrollTop(),
                        stHeader = $("#headerCont")[0].scrollHeight,
                        stMenu = $("#menu")[0].scrollHeight,
                        mt = stHeader - stMenu;
        
                    if ((st >= lastScrollTop)) {
                        $("#menu").css({
                            "position": "unset"
                        });
                    }else{
                        if(lastScrollTop <= mt + stMenu){
                            opa -= 0.2;
                            if(opa === 0.5) opa = 0;
                            $("#menu").css({
                                "position": "unset"
                            });
        
                            $("#hLogo").css({
                                "opacity": opa
                            })
        
                            lst = -130;
                        }else{
                            opa = 1.0;
                            $("#menu").css({
                                "position": "fixed",
                                "top": lst,
                                "z-index": 9,
                                "width": "100%"
                            });
        
                            $("#hLogo").css({
                                "opacity": opa
                            })
        
                            if(lst < 0) lst -= st - lastScrollTop
                            if(lst >= 0) lst = 0;
                        }
                    }
                    lastScrollTop = st;
                });
            }
        
            scrollControll();
        })
    })

    return (
        <div className="App">
            <div id="wrap">
                <div id="contant">
                    <Header/>
                    <Section />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
