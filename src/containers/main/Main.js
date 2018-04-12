// import createHistory from "history/createBrowserHistory";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Actions from "../.././actions/actionCreacter";
import MainComponent from "../../components/main/Main";
// const history = createHistory();

class MainContainer extends Component {
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
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getCanOpenIDs(lists) {
    return lists.filter((a, i) => a.CATEGORY === "W" && a.FLAG === "Y").map((a, i) => a.ID);
  }
  getParentlist(lists) {
    return lists.filter((a, i) => (a.CATEGORY === "W" || a.CATEGORY === "N") && a.FLAG === "Y");
  }
  getChildlist(lists, id) {
    return lists.filter((a, i) => a.ROOT === `${id}` && a.FLAG === "Y");
  }
  // listParamsToStyle() {
  //   return this.getParentlist(this.props.lists).map(({ NAME, CATEGORY, ROOT }, i) => ({
  //     name: NAME,
  //     category: CATEGORY,
  //     root: ROOT
  //   }));
  // }
  render() {
    return (
      <div>
        <MainComponent {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.homepage.lists,
    activeID: state.homepage.activeID
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLists: () => {
      dispatch(Actions.listAction());
    },
    toggleShowChild: id => {
      dispatch(Actions.clickParent(id));
    }
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default withRouter(App);
