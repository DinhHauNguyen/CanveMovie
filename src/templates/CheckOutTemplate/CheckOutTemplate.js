
import { useEffect } from "react"
import { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import { USER_LOGIN } from "../../util/settings/config"



export const CheckOutTemplate = (props) => {
    const { Component, ...restProps } = props
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login'></Redirect>
    }
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>

            <Component {...propsRoute} />

        </Fragment>
    }}></Route>
} 
