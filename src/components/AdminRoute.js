import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { AuthContext } from './AuthProvider'


const AdminRoute = ( {component: RouteComponent,...rest} ) => {
const {admin} = useContext(AuthContext)
return (
    <Route 
    {...rest}
    render={routeProps => 
    !!admin? (
        <RouteComponent {...routeProps}/>
    ) : (
        <Redirect to={"/AdminLogin"}/>
    ) 
    }
    />
)
}

export default AdminRoute
