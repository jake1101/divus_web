import React from 'react';

import Header from './Header';
import Section from './Section';
import Footer from '../public/Footer';

export default function MainPage() {
    return (
        <div id="content">
            <Header />
            <Section />
            <Footer />
        </div>
    )
}

/*
useEffect(() => {
    var stHeader = document.getElementById("header").scrollHeight,
        stMenu = document.getElementById("menuBar").scrollHeight,
        stM = stHeader - stMenu,
        mt = -stMenu,
        fst = 0,
        opa = 0;
    const onScroll = function() {
        var st = this.scrollY;

        const menuBar = document.getElementById("menuBar");
        const menuLogo = document.getElementById("menuLogo");

        console.log(mt);
        if(st > stM) {
            if(st > stHeader){
                if(fst > st){
                    menuBar.style.position = "fixed";
                    menuBar.style.top = mt;    
                    
                    menuLogo.style.opacity = opa;

                    mt += 10;
                    opa += 0.05;
                    if(mt >= 0) mt = 0;
                    if(opa >= 1) opa = 1;
                }else{
                    menuBar.style.position = "fixed";
                    menuBar.style.top = 0;    
                    
                    menuLogo.style.opacity = opa;

                    mt -= 10;
                    opa -= 0.2;
                    if(mt <= -stMenu) mt = -stMenu;
                    if(opa <= 0) opa = 0;
                }
            }
        }else{
            menuBar.style.position = "relative";
            menuBar.style.top = 0;    
            
            menuLogo.style.opacity = opa;

            mt = -stMenu;
            opa -= 0.1;
            if(opa <= 0) opa = 0; 
        }
        
        fst = st;
    }

    window.addEventListener("scroll", onScroll);

    

    // $(function() {
    //     $("#menuBar").css({
    //         position: "absolute",
    //         top: ($("#header")[0].scrollHeight)-($("#menuBar")[0].scrollHeight)
    //     });

    //     $("#menuLogo").css({
    //         opacity: 0
    //     });

    //     const scrollControl = function() {
    //         var stHeader = $("#header")[0].scrollHeight,
    //             stMenu = $("#menuBar")[0].scrollHeight,
    //             stM = stHeader - stMenu,
    //             mt = -stMenu,
    //             fst = 0,
    //             opa = 0;

    //         $(window).scroll(function () {
    //             var st = $(this).scrollTop();

    //             if(st > stM) {
    //                 if(st > stHeader){
    //                     if(fst > st){
    //                         $("#menuBar").css({
    //                             position: "fixed",
    //                             top: mt
    //                         });
    //                         $("#menuLogo").css({
    //                             opacity: opa
    //                         });

    //                         mt += 10;
    //                         opa += 0.05;
    //                         if(mt >= 0) mt = 0;
    //                         if(opa >= 1) opa = 1;
    //                     }else{
    //                         $("#menuBar").css({
    //                             position: "fixed",
    //                             top: mt
    //                         });
    //                         $("#menuLogo").css({
    //                             opacity: opa
    //                         });

    //                         mt -= 10;
    //                         opa -= 0.2;
    //                         if(mt <= -stMenu) mt = -stMenu;
    //                         if(opa <= 0) opa = 0;
    //                     }
    //                 }
    //             }else{
    //                 $("#menuBar").css({
    //                     position: "relative",
    //                     top: 0
    //                 });
    //                 $("#menuLogo").css({
    //                     opacity: opa
    //                 });

    //                 mt = -stMenu;
    //                 opa -= 0.1;
    //                 if(opa <= 0) opa = 0; 
    //             }
                
    //             fst = st;
    //         });
    //     }
    //     scrollControl();
    // })
})
*/