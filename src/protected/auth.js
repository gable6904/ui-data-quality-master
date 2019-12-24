import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import ProtectedRoute from "./protected/Protected.route";

const ProtectedRoute = ({
  
  component: Component,
  userName:name,
  ...rest
}) => {
  return (

  // <div>{names.userName}</div>
    
    <Route
      {...rest}
      
      render={props => {
      
        //Check Authenticated ? True
     
     
        if (name ==="dvkfvk") {

          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

class Auth extends Component {


  constructor(props) {
    super(props)
    // console.log(this.props.emp.name);
  
  }

  render() {


    return (
      <div>
         <ProtectedRoute userName={this.props.emp.name}/>
       </div>

    );

}

}
// export default new Auth();

const mapStatetoProps = (state) => {
  return {
    //state.user คือ ชื่อย่อของ state ที่อยู่ใน UserReducer
    // emp:state.user
    emp: state.emp
  };
}


// export default DefaultHeader;
export default connect(mapStatetoProps)(Auth);
