import React, { useEffect } from 'react';

import Header from './pages/main/Header';
import Section from './pages/main/Section';
import Footer from './pages/public/Footer';

import $ from 'jquery';

export default function MainPage() {

    useEffect(() => {
        $(function() {
            const scrollControl = function() {
                var fst = 0;
                var mt = -137;
                var opa = 0;
                $(window).scroll(function () {
                    var st = $(this).scrollTop(),
                        stHeader = $("#header")[0].scrollHeight,
                        stMenu = $("#menuBar")[0].scrollHeight,
                        stM = stHeader - stMenu;

                        console.log(document.getElementById("header").scrollHeight)

                        if(st > stM){
                            if(fst >= st) {
                                if(fst > stM){
                                    $("#menuBar").css({
                                        position: "fixed",
                                        top: mt
                                    });
                                    $("#menuLogo").css({
                                        opacity: opa
                                    });

                                    mt += 30;
                                    opa += 0.2;

                                    if(mt >= 0) mt = 0;
                                    if(opa >= 1) opa = 1;
                                }
                            }else{
                                if(fst > stHeader){
                                    $("#menuBar").css({
                                        position: "fixed",
                                        top: mt
                                    });
                                    $("#menuLogo").css({
                                        opacity: opa
                                    });

                                    mt -= 30;
                                    opa -= 0.2;

                                    if(mt <= -137) mt = -137;
                                    if(opa <= 0) opa = 0;
                                }
                            } 
                        }else{
                            $("#menuBar").css({
                                position: "relative"
                            });
                            $("#menuLogo").css({
                                opacity: 0
                            });

                            mt = -137;
                            opa = 0;
                        }

                    fst = st;
                });
            }
            scrollControl();
        })
    })

    return (
        <div id="content">
            <Header />
            <Section />
            <Footer />
        </div>
    )
}

/*
                    
*/