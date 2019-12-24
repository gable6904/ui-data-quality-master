import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Route, Redirect } from 'react-router';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import auth from '../../firebase'
import { connect } from "react-redux";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      currentUser: '',
      message: ''
    }
  
  }

 

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null,
      })
    })
    console.log(this.state.currentUser);
  }

  onLogout = (e) => {
    // this.setState({
    //   currentUser : 'logout-success'
    // })
    // console.log(this.state.currentUser)
    this.logout(e)

    if (!this.state.currentUser) {
      console.log('เข้านะ')
      window.location.href = '/';
      // this.props.history.push('/login');
      // return (<Redirect to="/login" /> );
    }
  }



  render() {


    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    // const { message, currentUser } = this.state

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-user"></i>&nbsp;&nbsp;{this.props.emp.name}&nbsp;&nbsp;</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="/" className="nav-link"><div onClick={this.onLogout}><i className="icon-logout"></i>&nbsp;&nbsp;Logout</div></NavLink>
            {/* <Link to="/" >
           
            <div onClick={this.onLogout}><i className="icon-logout"></i>&nbsp;&nbsp;Logout</div>
             
            </Link> */}

          </NavItem>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;


const mapStatetoProps = (state) => {
  return {
    //state.user คือ ชื่อย่อของ state ที่อยู่ใน UserReducer
    // emp:state.user
    emp: state.emp
  };
}


// export default DefaultHeader;
export default connect(mapStatetoProps)(DefaultHeader);

