import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import auth from '../../../firebase'
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
// import imgBg from '../../../assets/big-data-sme.jpg'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // email: '',
      // password: '',
      currentUser: '',
      // message: '',
      // name: 'ARM',
      //alert
      visible: false,
    }



    //alert
    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss() {
    this.setState({ visible: false });
  }



  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state

    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
        console.log(this.state.currentUser.email)
        //อัพเดท store
        this.props.setName(this.state.currentUser.email)
      })
      .catch(error => {
        this.setState({
          message: error.message,
          visible: true
        })
      })

  }


  render() {
    const { currentUser } = this.state

    if (currentUser) {
      return <Redirect to={{
        pathname: '/testmenu2'
        // state: { name: this.state.currentUser.email }
      }} />
    

    }


    return (
      <div className="app flex-row align-items-center img-bg">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10">
              
            <Animated animationIn="fadeInUp" animationOut="fadeOutRight">
              <div className="margin-alert">
                <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                    Login failed: Invalid <b>email</b> or <b>password.</b>
                </Alert>
              </div>
              </Animated>

              <Row className="bg-white login-border-radius">
                <Col md="6" className="color-bg-login-gray">
                  <div className="font-24 login-padding">
                    <div><i className="icon-people icons font-2xl d-block mt-4 text-center icon-login-size color-bg-login"></i></div>
                    <div className="login-padding-20 text-center color-bg-login">SIGN IN TO YOUR ACCOUNT</div>
                    <Form onSubmit={this.onSubmit}>

                      <InputGroup className="mb-3 login-padding-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className=" btn-login">
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="EMAIL" autoComplete="username" name="email" onChange={this.onChange} />
                      </InputGroup>

                      <InputGroup className="mb-4 login-padding-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className=" btn-login">
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="PASSWORD" autoComplete="current-password" name="password" onChange={this.onChange} />
                      </InputGroup>

                      <Row className="center-content" >
                        <Col xs="4" sm="4" md="4">
                          <Button className="px-4 btn-login" style={{ width: '100%' }}>LOGIN</Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>

                <Col md="6" className="div-position">
                  <div className="div-center">
                    <img src={require('../../../assets/img/img-login01.png')} className="responsive"></img>
                  </div>
                </Col>

              </Row>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <div className="text-center login-padding-top-20">© COPYRIGHT 2019 G-ABLE CO., LTD. </div>
            </Col>
          </Row>

        </Container>
      </div>

    );
  }
}

// export default Login;

//map state to props
//เปลี่ยน state เป็น props
const mapStatetoProps = (state) => {
  return {
    //state.user คือ ชื่อย่อของ state ที่อยู่ใน UserReducer
    // emp:state.user
    emp: state.emp
  };
}

//ต้องการเปลี่ยนชื่อ

const mapDispatchtoProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name
      });
    }
  };
}


//Connect 
export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
