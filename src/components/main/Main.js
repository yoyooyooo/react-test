import React, { Component } from "react";
import { TransitionMotion, presets, spring } from "react-motion";
import { ChildUl, Ul } from "./css";

class Main extends Component {
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
  getDefaultStyles(lists) {
    return lists.map((list, i) => ({
      key: `${i}`,
      data: list,
      style: { height: 0 }
    }));
  }
  getStyles(lists) {
    return lists.map((list, i) => ({
      key: `${i}`,
      data: list,
      style: {
        height: spring(45, presets.gentle)
      }
    }));
  }
  willEnter() {
    return { height: spring(0) };
  }

  willLeave() {
    return { height: spring(0) };
  }
  render() {
    const { /* isLogged,  */ lists } = this.props; //state
    const { toggleShowChild } = this.props; //方法
    console.log("has render");
    // console.log(this.getDefaultStyles());
    /*   if (!isLogged) {
      // return <Redirect to="/login" />;
      // history.push("/login");
      setTimeout(() => {
        this.props.history.push("/login");
      }, 0);
    } */
    // console.log(this.getDefaultStyles());
    return (
      <div>
        {lists.length > 0 ? (
          <TransitionMotion
            defaultStyles={this.getDefaultStyles(this.getParentlist(lists))}
            styles={this.getStyles(this.getParentlist(lists))}
            willEnter={this.willEnter}
          >
            {inStyles => {
              return (
                <Ul>
                  {inStyles.map(({ key, data, style }, i) => {
                    return (
                      <li key={i} style={{ height: `${style.height}px` }}>
                        {data.CATEGORY === "W" ? (
                          <div
                            onClick={() => {
                              toggleShowChild(data.ID);
                            }}
                          >
                            {data.NAME}
                          </div>
                        ) : (
                          <a>{data.NAME}</a>
                        )}
                        {data.CATEGORY === "W" && data.isActive ? (
                          <TransitionMotion
                            defaultStyles={this.getDefaultStyles(this.getChildlist(lists, data.ID))}
                            styles={this.getStyles(this.getChildlist(lists, data.ID))}
                            willEnter={this.willEnter}
                            willLeave={this.willLeave}
                          >
                            {inChildStyles => {
                              return (
                                <ChildUl
                                // style={{ height: `${inChildStyles[0].style.height * 5}px` }}
                                >
                                  {inChildStyles.map(({ key, data, style: { height } }, i) => {
                                    return (
                                      <li
                                        key={key}
                                        style={{
                                          height: `${height}px`
                                        }}
                                      >
                                        <a>{data.NAME}</a>
                                      </li>
                                    );
                                  })}
                                </ChildUl>
                              );
                            }}
                          </TransitionMotion>
                        ) : null}
                      </li>
                    );
                  })}
                </Ul>
              );
            }}
          </TransitionMotion>
        ) : null}
      </div>
    );
  }
}

export default Main;
