import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const name ="ddvkfv";
const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        //Check Authenticated ? True
        // console.log("fvjgbjgb"+this.props.emp.name);
        if (name=="fghth") {
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


class testProtected extends Component {

    
    
    constructor(props) {
        super(props)
        
      console.log(this.props.username);
      }

      
     
    render() {
     
        
        return (
            
            <div>

              fvhfvfj
            </div>
        )
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
  export default  connect(mapStatetoProps)(testProtected);
  



