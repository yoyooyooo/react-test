// import createHistory from "history/createBrowserHistory";
import React, { Component } from "react";
import { StaggeredMotion, presets, spring } from "react-motion";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import * as Actions from "../actions/actionCreacter";

// const history = createHistory();
injectGlobal`
  *{
    box-sizing:border-box;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  li {
    display: flex;
    background-color: #ccc;
    flex-basis: calc(16.6667% - 10px);
    height: 50px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
`;

class Main extends Component {
  componentWillMount() {
    /* if (!this.props.isLogged) {
      // return <Redirect to="/login" />;
      // history.push("/login");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 0);
    } */
    this._isMounted = true;
  }
  componentDidMount() {
    if (this._isMounted) {
      this.props.getLists();
    }
    /*  .then(res => res.data)
      .then(data => {
        const lists = [];
        data.forEach((a, i) => {
          const { NAME } = a;
          lists.push({ name: NAME });
          return a.NAME;
        });
        console.log(lists);
        if (this._isMounted) {
          this.setState({ list: lists });
        }
      })
      .catch(err => console.log(err)); */
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getParentlist(lists) {
    return lists.filter((a, i) => (a.CATEGORY === "W" || a.CATEGORY === "N") && a.FLAG === "Y");
  }
  getChildlist(lists) {
    return lists.filter((a, i) => a.CATEGORY === "Y" && a.FLAG === "Y");
  }
  getDefaultStyles() {
    return this.getParentlist(this.props.lists).map(n => ({ height: 0 }));
    // opacity: 0
  }
  getStyles() {
    return this.getParentlist(this.props.lists).map(n => ({
      height: spring(45, presets.gentle)
      // opacity: spring(1)
    }));
  }
  willEnter() {
    return {
      height: 0
      // opacity: 0
    };
  }
  render() {
    const { isLogged, lists } = this.props;
    console.log("has render");
    /*   if (!isLogged) {
      // return <Redirect to="/login" />;
      // history.push("/login");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 0);
    } */
    return (
      <div>
        <div>main</div>
        {/* {list.map((a, i) => <div key={i}>{a}</div>)} */}
        {lists.length > 0 ? (
          <StaggeredMotion
            defaultStyles={this.getDefaultStyles()}
            styles={prevStyles =>
              prevStyles.map((item, i) => {
                return i === 0 ? { height: spring(45, presets.wobbly) } : prevStyles[i - 1];
              })
            }
          >
            {inStyles => {
              return (
                <Ul>
                  {inStyles.map((a, i) => {
                    return (
                      <li
                        key={i}
                        style={{
                          height: `${a.height}px`
                        }}
                      >
                        <a>{this.getParentlist(this.props.lists)[i].NAME}</a>
                      </li>
                    );
                  })}
                </Ul>
              );
            }}
          </StaggeredMotion>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.login.isLogged,
    lists: state.homepage.lists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLists: () => {
      dispatch(Actions.listAction());
    }
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default withRouter(App);
