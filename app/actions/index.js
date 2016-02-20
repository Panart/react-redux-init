import * as types from 'ActionTypes'

export function changeLogin(login) {
  return {
    type: types.CHANGE_LOGIN,
    login: login
  }
}