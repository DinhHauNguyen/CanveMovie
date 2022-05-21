import React from "react";
import { createBrowserHistory } from 'history'
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { Route, Router } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail"
import { CheckOutTemplate } from "./templates/CheckOutTemplate/CheckOutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from 'react'
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Profile from "./pages/Profile/Profile";


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/" exact Component={Home}></HomeTemplate>
      <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
      <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
      <HomeTemplate path="/news" exact Component={News}></HomeTemplate>
      <HomeTemplate path="/detail/:id" exact Component={Detail}></HomeTemplate>
      <HomeTemplate path="/profile" exact Component={Profile}></HomeTemplate>
      <CheckOutTemplate path="/checkout/:id" exact Component={Checkout}></CheckOutTemplate>
      <UserTemplate path="/login" exact Component={Login}></UserTemplate>
      <UserTemplate path="/register" exact Component={Register}></UserTemplate>

    </Router>
  );
}

export default App;
