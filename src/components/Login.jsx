import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export class Login extends Component {
    state ={
        credentials:{
            email: '',
            password: '',
            role: ""
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    // login = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post('/api/login', this.state.credentials)
    //     .then(res => {
    //         console.log(res.data)
    //       localStorage.setItem('token', JSON.stringify(res.data.payload))
    //       this.props.history.push('/protected');  
    //     } )
    //     .catch(err => console.log({ err }))
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                  <h5>Login</h5>
                  <div>
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={this.state.credentials.email}
                    onChange={this.changeHandler}
                    
                    />
                    </div>
                    <div>
                      <label>password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange= {this.changeHandler}
                    
                    />
                    </div>
                    <div>
                    <select value={this.state.credentials.role}>
                      <option value="Student">Student</option>
                      <option value="Instructor">Instructor</option>

                    </select>
                    </div>
                    <button>Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login