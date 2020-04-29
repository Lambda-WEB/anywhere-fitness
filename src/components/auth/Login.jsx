import React, { Component } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


export class Login extends Component {
    state ={
        credentials:{
            email: '',
            password: '',
            Isinstructor: '0'
           
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
            
        });
        console.log(e.target.value)
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/auth/login', this.state.credentials)
        .then(res => {
            console.log(res.data)
          localStorage.setItem('token', JSON.stringify(res.data.payload))
          this.props.history.push('/protected');  
        } )
        .catch(err => console.log({ err }))
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                <form onSubmit={this.login}>
                  <h1>Login</h1>
                  <div className="email">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={this.state.credentials.email}
                    onChange={this.changeHandler}
                    
                    />
                    </div>
                    <div className="password">
                      <label>password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange= {this.changeHandler}
                    
                    />
                    </div>
                   
                    <select className="select-css" value={this.state.credentials.Isinstructor} onChange={this.changeHandler}>
                      <option value="0">Student</option>
                      <option value="1">Instructor</option>

                    </select>

                    
                    <button>Login</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Login