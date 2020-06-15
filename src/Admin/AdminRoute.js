import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { auth } from '../index'
import { withRouter } from 'react-router-dom'
import { MDBInput } from 'mdbreact'
import UploadEvent from './UploadEvent'
import SideNavPage from './SideNavPage'
// const AdminRoute = ( {component: RouteComponent,...rest} ) => {
// const {admin} = useContext(AuthContext)
// return (
//     <Route 
//     {...rest}
//     render={routeProps => 
//     !!admin? (
//         <RouteComponent {...routeProps}/>
//     ) : (
//         <Redirect to={"/AdminLogin"}/>
//     ) 
//     }
//     />
// )
// }

const AdminRoute = ( { history } ) => {
//if(!auth.currentUser) {
    //alert('please log in first')
    //history.replace('/Admin')
  //  return null
//}

return (
    console.log(auth.currentUser),
    <SideNavPage/>
)
}

export default withRouter(AdminRoute)
