const GlobalState = {
  user: {},
  userFB: {},
  isLogin: false,
  isLoginFB: false,
  lang: 'vi',
  noti: {
    // message: {
    //  type: filter, order ????
    // status: ---"success  error warning",---
    // autoHide: ---default is true, auto close noti -------
    // icon: path to icon
    // prefix: fix characted want to show
    // }
  },
  inprogress: false,
  ICEditPopUp: {
    isShow: false,
    data: {},
  },
  shopInfo: {},
  avatar: {},
  isShowBackDrops: false,
}
export default GlobalState
