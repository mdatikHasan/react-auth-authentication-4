import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
const {user} = useAuth()

    return (
        <div>
            <h1>This is home page</h1>
            User Name: {user.email}
        </div>
    );
};

export default Home;