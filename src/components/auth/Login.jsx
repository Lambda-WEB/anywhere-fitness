import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const defaultUser = {
    email: '',
    password: '',
}

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: "#000000"
    },
    image: {
      backgroundImage: 'url(http://www.tiptoptens.com/wp-content/uploads/2015/04/home-workout-routines.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: "#ffffff",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#ffffff"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      color: "#000000",
    },
    submit: {
      color:"#FFAB00",
      backgroundColor: "#000000",
      margin: theme.spacing(3, 0, 2),
      '&:hover': {
        color: "#000000",
        backgroundColor: '#FFA500',
      },
    },
  }));

export default function Login() {
    const classes = useStyles();
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
        api.post('/auth/login', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('authToken', JSON.stringify(res.data.token))
                dispatch({ type: 'APP_LOGIN', payload: res.data.token })
                dispatch({ type: 'ACCOUNT_UPDATE', payload: { user: { ...res.data } } })
                history.push('/dashboard');
            })
            .catch(err => console.log({ err }))
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
        
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form
             onSubmit={loginHandler}
             className={classes.form} noValidate >
              <TextField
                label="Email Address"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                value={user.email}
                onChange={changeHandler}
                autoFocus
              />
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                value={user.password}
                onChange={changeHandler}
                autoFocus
              />
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup"  style={{color: '#000000'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        </Grid>
    )
}

 