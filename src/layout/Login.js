import React, { Component } from 'react'
import NavigateContext from './NavigateContext'

class Login extends Component {

  static contextType = NavigateContext

    constructor(props) {
      super(props)
    

    this.state = {
        username: '',
        password: ''
      }
    }

    changleHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.validateCredentials()
    }

    validateCredentials() {
      let isAuthenticated = false;
      for(let i=0; i<creds.length; i++) {
        if(JSON.stringify(creds[i]) === JSON.stringify(this.state)) {
          isAuthenticated = true;
          break;
        }
      }
      if(isAuthenticated) {
          localStorage.setItem('user', this.state.username)
          this.context('/home')
      } else {
          console.log('Invalid Credentials')
      }
    }

    render() {
    return (
      <div style={styles.body}>
        <form style={styles.form} onSubmit={this.submitHandler}>
            <input type='text' placeholder='Username' name='username' onChange={this.changleHandler} style={styles.input} />
            <br />
            <input type='password' placeholder='Password' name='password' onChange={this.changleHandler} style={styles.input} />
            <br />
            <button type='submit' style={styles.button}>Login</button>
        </form>
      </div>
    )
  }
}

const creds = [
  {
    username: 'user1',
    password: 'password1'
  },
  {
    username: 'user2',
    password: 'password2'
  },
  {
    username: 'user3',
    password: 'password3'
  },
]

const styles = {
  body: {
    height: '500px',
  },
  form: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '50px',
    margin: 'auto',
    height: '200px',    
    width: '15%',
    position: 'relative',
    top: '300px'
  },
  input: {
    width: '292px',
    height: '30px',
    margin: '15px 0px',
  },
  button: {
    margin: '15px 0px',
    height: '30px',
    width: '300px'
  }
}

export default Login