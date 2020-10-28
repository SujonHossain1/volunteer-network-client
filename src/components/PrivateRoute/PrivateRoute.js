import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const token =  sessionStorage.getItem('token');
        fetch(`https://vol-network2.herokuapp.com/check-is-signUp`, {
            method: 'GET',
            headers: {
                'Context-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const { name, email, picture } = data;
                setLoggedInUser({
                    name,
                    email,
                    photo: picture,
                    isSignIn: true
                })
                
            })
            .catch(err => console.log(err));
    }, [setLoggedInUser])

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedInUser.email || sessionStorage.getItem('token') ) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;