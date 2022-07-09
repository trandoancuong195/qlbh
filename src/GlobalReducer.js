const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_USER_FB':
      return {
        ...state,
        userFB: {
          ...state.userFB,
          ...action.payload,
        },
      }
    case 'SET_LOGIN':
      return {
        ...state,
        isLogin: true,
      }
    case 'SET_LOGOUT':
      return {
        ...state,
        isLogin: false,
      }

    case 'SET_LOGIN_FB':
      return {
        ...state,
        isLoginFB: true,
      }
    case 'SET_LOGOUT_FB':
      return {
        ...state,
        isLoginFB: false,
      }
    case 'CHANGE_LANG':
      return {
        ...state,
        lang: action.payload,
      }
    case 'UPDATE_MESSAGE':
      return {
        ...state,
        noti: {
          ...state.noti,
          ...action.payload,
        },
      }
    case 'GET_STORE_INFO':
      return {
        ...state,
        shopInfo: action.payload,
      }
    case 'DELETE_MESSAGE': {
      const noti = {...state.noti}
      delete noti[action.payload]
      return {
        ...state,
        noti,
      }
    }
    case 'IC_EDIT_MODAL': {
      return {
        ...state,
        ICEditPopUp: {
          ...state.ICEditPopUp,
          ...action.payload,
        },
      }
    }
    case 'CHANGE_INPROGRESS':
      return {
        ...state,
        inprogress: action.payload,
      }
    case 'UPDATE_AVATAR_FACEBOOK':
      return {
        ...state,
        avatar: action.payload,
      }
    case 'UPDATE_BACK_DROP_STATUS':
      return {
        ...state,
        isShowBackDrops: action.payload,
      }
    default:
      return state
  }
}

export default Reducer
