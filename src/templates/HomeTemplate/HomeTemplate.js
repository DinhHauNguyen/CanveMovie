
import { useEffect } from "react"
import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layouts/Footer/Footer"
import Header from "./Layouts/Header/Header"



export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </>
    }}></Route>
}