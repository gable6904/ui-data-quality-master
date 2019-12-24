import React, { Component, Suspense } from 'react';
import { Redirect, Switch , Route} from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
// import auth from '../../firebase'
import { connect } from "react-redux";


import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import ProtectedRoute from "../../protected/Protected.route";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


// const Login = React.lazy(() => import('../../views/Pages/Login/Login'));
const Table = React.lazy(() => import('../../views/TestMenu/TestMenu'));
const Table2 = React.lazy(() => import('../../views/TestMenu2/TestMenu2'));

class DefaultLayout extends Component {


  // constructor(props) {
  //   super(props)
  //   // console.log(this.props.emp.name);
  // }



  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }


  render() {


    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}


                   {/* <ProtectedRoute path="/table" component={Table} userName={this.props.emp.name}/> */}

                   {/* <ProtectedRoute path="/testmenu2" component={Table2} userName={this.props.emp.name}/>
                   <ProtectedRoute path="/table" component={Table} userName={this.props.emp.name}/> */}


                  <Redirect exact from="/" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

// export default DefaultLayout;


// export default App;

const mapStatetoProps = (state) => {
  return {
    //state.user คือ ชื่อย่อของ state ที่อยู่ใน UserReducer
    // emp:state.user
    emp: state.emp
  };
}


// export default DefaultHeader;
export default connect(mapStatetoProps)(DefaultLayout);
