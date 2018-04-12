import { LOGIN, FETCH_LIST, CLICK_PARENT, LOAD_DATA, QUERYSYSTEM } from "./actionTypes";
import { getAllList, querySystem } from "../api/list";
import { testMock } from "../api/mock/list";

/**
 * 登录状态
 */
export const login = () => {
  return {
    type: LOGIN
  };
};

/**
 * 导航页主页获取list
 */
export const listAction = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_LIST.FETCH_LIST_START });
  const data = await getAllList();
  dispatch({ type: FETCH_LIST.RECEIVE_LIST, payload: data });
};

/**
 * 导航页主页
 * 点击事件，获取到点击的链接的ID
 * reducer那把点击的ID的那一条数据的isActive改成true
 * 从而实现展开和隐藏
 * @param {点击的链接的ID} id
 */
export const clickParent = id => {
  return { type: CLICK_PARENT, id };
};

/**
 * manage页面
 * 加载列表
 */
export const loadData = () => async (dispatch, getState) => {
  const data = await getAllList();
  dispatch({ type: LOAD_DATA, payload: data });
};

/**
 * manage页面
 * 筛选搜索系统名称
 * @param {搜索框输入值} value
 */
export const filterSystem = value => async (dispatch, getState) => {
  const data = await querySystem(value);
  dispatch({ type: QUERYSYSTEM, payload: data });
};
