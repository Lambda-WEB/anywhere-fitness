import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import * as act from '../store/actions';

const defaultUser = {
  email: '',
  password: '',
  instructor: "0"
}

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "#000000",
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"#FFAB00",
    backgroundColor: "#000000",
    '&:hover': {
      color: "#000000",
      backgroundColor: '#FFA500',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#000000',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#FFA500',
    },
  },
  checkedIcon: {
    backgroundColor: '#000000',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#FFA500',
    },
  }
}));


export default function Signup(props) {
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

  function submitHandler(e) {
    e.preventDefault();
    console.log({user});
    api.post('/auth/register', user)  // fixedUser
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
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
          />
          <select className="select-css" name="instructor" value={user.instructor} onChange={changeHandler}>
            <option value="0">Student</option>
            <option value="1">Instructor</option>
          </select>
          {/* <FormControl component="fieldset">
           <FormLabel component="legend" style={{color: "#000000"}}>Role</FormLabel>
           <RadioGroup defaultValue="Student" aria-label="role"  name="customized-radios" value={user.instructor} onChange={changeHandler}>
             <FormControlLabel 
               value="0"
               control={<Signup />}
              label="Student" />
            <FormControlLabel 
              value="1" 
              control={<Signup />}
              label="Instructor" />
           </RadioGroup>
         </FormControl> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}



