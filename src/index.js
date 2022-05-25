import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Navbar, Hero, Service, About, Subscription, Footer, } from "./components/home";

function Home (){
        return(
            <>
            <Navbar />
            <Hero />
            <Service />
            <About />
            <Subscription />
            <Footer />
            </>

        );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);