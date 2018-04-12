import styled, { injectGlobal } from "styled-components";

injectGlobal`
  *{
    box-sizing:border-box;
    padding:0;
    margin:0;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 75%;
  margin: auto;
  > li {
    display: flex;
    background-color: #ccc;
    width: calc(16.6667% - 10px);
    height: calc(16.6667% - 10px);
    flex-basis: calc(16.6667% - 10px);
    margin: 5px;
    border-radius: 10px;
    position: relative;

    a,
    div {
      cursor: pointer;
    }
    > a,
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      color: #888;
      font-weight: 600;
      overflow: hidden;
      user-select: none;
      box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
      background: rgb(255, 255, 255);
      background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(237, 237, 237, 1) 100%
      );
      background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(237, 237, 237, 1) 100%
      );
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(237, 237, 237, 1) 100%
      );
    }
  }
`;
export const ChildUl = styled.ul`
  position: absolute;
  border-radius: 5px;
  width: 250%;
  left: -75%;
  top: 100%;
  z-index: 99999;
  cursor: auto;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: row wrap;
  li {
    display: flex;
    background-color: #ccc;
    -webkit-flex-basis: calc(16.6667% - 10px);
    -ms-flex-preferred-size: calc(16.6667% - 10px);
    flex-basis: calc(33.3333% - 10px);
    width: calc(33.3333% - 10px);
    height: 50px;
    margin: 5px;
    border-radius: 5px;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      color: #888;
      font-weight: 600;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
      background: rgb(255, 255, 255);
      background: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(237, 237, 237, 1) 100%
      );
      background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(237, 237, 237, 1) 100%
      );
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(237, 237, 237, 1) 100%
      );
    }
  }
`;
