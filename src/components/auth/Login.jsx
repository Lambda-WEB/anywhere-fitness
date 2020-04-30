import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const defaultUser = {
    email: '',
    password: '',
}

export default function Login() {
    const api = useSelector(state => state.app.axios);
    const [user, setUser] = useState(defaultUser);
    const history = useHistory();
    const dispatch = useDispatch();

    function changeHandler(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const loginHandler = e => {
        e.preventDefault();
        console.log({ user });
        dispatch({ type: 'APP_FETCHING', payload: true })
        api.post('/auth/login', user)
            .then(res => {
                console.log(res.data.id, res.data.instructor, res.data.email, "res.data.")
                localStorage.setItem('authToken', JSON.stringify(res.data.token))
                dispatch({ type: 'APP_FETCHING', payload: true })
                dispatch({ type: 'APP_LOGIN', payload: res.data.token })
                
                dispatch({ type: 'ACCOUNT_UPDATE', payload: { user: res.data } })
                // history.push('/dashboard');
            })
            .catch(err => console.log({ err }))
            .finally(() => {
                dispatch({ type: 'APP_FETCHING', payload: false })
            })
    }

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form onSubmit={loginHandler}>
                    <h1>Login</h1>
                    <div className="email">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={changeHandler}

                        />
                    </div>
                    <div className="password">
                        <label>password</label>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={changeHandler}

                        />
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
