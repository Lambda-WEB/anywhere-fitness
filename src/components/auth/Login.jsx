import React, { Component } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


export default function Login () {
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

    const login = e=> {
        e.preventDefault();
        console.log({user});
        api.post('/auth/login', user)  
          .then(res => {
            console.log(res.data)
            localStorage.setItem('authToken', JSON.stringify(res.data.token))
            dispatch({type: 'APP_LOGIN', payload: res.data.token})
            dispatch({type: 'ACCOUNT_UPDATE', payload: { user: res.data.saved } })
            history.push('/');
          })
          .catch(err => console.log({ err }))
      }

    
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                <form onSubmit={login}>
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
                        onChange= {changeHandler}
                    
                    />
                    </div>
                   
                    <select className="select-css" value={user.instructor} onChange={this.changeHandler}>
                      <option value="0">Student</option>
                      <option value="1">Instructor</option>

                    </select>

                    
                    <button>Login</button>
                </form>
                </div>
            </div>
        )
    }


export default Login