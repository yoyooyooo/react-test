import React, { Component } from "react";
import Loadable from "react-loadable";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};
const AsyncMain = Loadable({
  loader: () => import("../../containers/main/Main"),
  loading: MyLoadingComponent
});
const AsyncManage = Loadable({
  loader: () => import("../../containers/manage/Manager"),
  loading: MyLoadingComponent
});

class LoginIndex extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*<ul>
            <li>
              <Link to="/login" component={Login}>login</Link>
            </li>
            <li>
              <Link to="/register" component={register}>register</Link>
            </li>
            <li>
              <Link to="/main" component={Main}>main</Link>
            </li>
          </ul>*/}
        <Switch>
          {/* <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={register} /> */}
          <Route path="/main" component={AsyncMain} />
          <Route path="/manage" component={AsyncManage} />
          {/*<Redirect to="/" />*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default LoginIndex;

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(callback) {
//     this.isAuthenticated = true;
//     setTimeout(callback, 100);
//   },
//   signout(callback) {
//     this.isAuthenticated = false;
//     setTimeout(callback, 100);
//   }
// };

// class Login extends React.Component {
//   state = {
//     isLogged: false
//   }
//   render() {
//     if (this.state.isLogged) {
//       return <Redirect to='/main' />;
//     }
//     return (
//       <div>
//         <div>Login</div>
//         <button onClick={() => {
//           fakeAuth.authenticate(() => {
//             this.setState({ isLogged: true });
//           });
//           console.log(fakeAuth.isAuthenticated, this.state.isLogged)
//         }}>login</button>
//       </div>
//     )
//   }
// }

// const register = () => {
//   return (
//     <div>register</div>
//   )
// };

// <Switch>
//   <Route exact path="/" render={() => {
//     return !fakeAuth.isAuthenticated ? (
//       <Redirect to="/login" />
//     ) : (
//         <Main />
//       )
//   }} />
//   <Route path="/login" component={Login} />
//   <Route path="/register" component={register} />
//   <Redirect to="/" />
// </Switch>
