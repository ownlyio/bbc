import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";
import {
  About,
  FAQ,
  Hero,
  Partners,
  Schedule,
  Speakers,
  Subscription,
} from "./Sections";
import PageLoader from "./components/Loader";

function App() {

  return (
    <div className="main">
    <PageLoader />
      <BrowserRouter>
        <Switch>
          <Route
          exact
            path="/"
            component={() => (
              <div className="app-wrapper">
                <Navigation />
                <Hero />
                <About />
                <Speakers />
                <Schedule />
                <Partners />
                <FAQ />
                <Subscription />
                <Footer />
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
