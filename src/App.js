import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import './index.css';
import './assets/style.css';
// import ProtectedRoute from "./protected/Protected.route";
// import Auth from "./protected/auth";
// import TestProtected from "./protected/testProtected.ProtectedRoute"
// import ProtectedRoute from './protected/testProtected';
// import Test from './protected/test'
// import { connect } from "react-redux";


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages




const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));
// const Table = React.lazy(() => import('./views/Pages/Table/Table'));

class App extends Component {

  // constructor(props) {
  //   super(props)
    
  //   console.log(this.props.emp.name);
  // }

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>

            <Route exact path="/" name="Login Page" render={props => <Login {...props} />} />
            {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} /> */}
             <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} /> 
             {/* <Route path="/table" name="Home" render={props => <DefaultLayout {...props} />}/> */}

        
            {/* <Route exact path="/" component={Login} />  */}
            {/* <Auth path="/table" component={Table}/> */}
            {/* <ProtectedRoute path="/table" component={Table} userName={this.props.emp.name}/> */}
            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route path="/table" name="Home" /> */}

           

            {/* <Route path="*" component={Page404} /> */}

            {/* <Test/> */}


          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

// export default App;

// const mapStatetoProps = (state) => {
//   return {
//     //state.user คือ ชื่อย่อของ state ที่อยู่ใน UserReducer
//     // emp:state.user
//     emp: state.emp
//   };
// }


export default App;
// export default connect(mapStatetoProps)(App);
