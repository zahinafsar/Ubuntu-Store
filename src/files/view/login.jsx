import React from 'react';
import '../../style/main.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {auth} from '../../firebase'
import { useDispatch } from 'react-redux'
import { navigation } from 'create-react-nav'

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: '40px auto',
    padding: 10
  },
  form:{
  	display: 'flex',
  	flexDirection: 'column',
  	justifyContent: 'space-between'
  }
});

function Login() {
  const navigate = navigation.useHistory()
  const [user, setUser] = React.useState({
  	email:'',
  	password:''
  })
  const dispatch = useDispatch()
  const classes = useStyles();
	const login=()=>{
		auth.signInWithEmailAndPassword(user.email, user.password)
		  .then(() => {
		  	dispatch({
                type: "set_admin",
                data: true
            })
        navigate.push("/admin");
		})
	}
  
  return (
    <div>
    	<Card className={classes.root} variant="outlined">
	    	<form className={classes.form} noValidate autoComplete="off">
		      <TextField onChange={(e) => setUser({ ...user, email: e.target.value })} id="outlined-basic" label="Email" variant="outlined" />
		      <TextField onChange={(e) => setUser({ ...user, password: e.target.value })} style={{margin:'10px 0'}} id="outlined-basic" type="password" label="Password" variant="outlined" />
		      <Button onClick={login} variant="contained" color="primary">
			    login
			  </Button>
		    </form>
	    </Card>
    </div>
  );
}

export default Login;
