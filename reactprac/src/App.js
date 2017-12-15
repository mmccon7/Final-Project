import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

 const HelloReact = () => (
      <p>Hello World!</p>
    );

    ReactDOM.render(<HelloReact />, document.getElementById("root"));

  function HelloReact() {
      return (
      <p>Hello World!</p>
      );
    }


    var App = function App() {
      return React.createElement(HelloReact, null);
    };