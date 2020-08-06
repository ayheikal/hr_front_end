import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
      return(
          <form className={'container-fluid w-25'} style={{marginTop:'10px'}}>
            <div className="form-group  ">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                  else.</small>
            </div>
            <div className="form-group ">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <Link  className="btn btn-primary">singIn</Link>{'|'}

              <Link to={'signup'} className="btn btn-primary">signUp</Link>
          </form>
      )
    }


}
