import React from 'react';
import {Navigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({children}) => {


    const {user} = useAuth();
    // let location = useLocation();
    if (!user?.displayName) {
        
        return <Navigate to="/login" replace />;
      }
    
      return children;

};

export default RequireAuth;


/* 
import React from 'react';
import {Spinner} from 'react-bootstrap'
import {Navigate, Outlet} from 'react-router-dom'
import useAuth from '../../context/useAuth';


const PrivateRoute = () => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="primary" />
    }
    return (
        user.email? <Outlet/> :
       <Navigate
        to={{
            pathname: './login',
        }}></Navigate>
    );
};

export default PrivateRoute; */