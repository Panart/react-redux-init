import expect from 'expect'
import reducer from '../../../reducers/user/user'
import * as types from 'ActionTypes'

describe('user reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        login: ''
      }
    )
  })

  it('should handle CHANGE_LOGIN', () => {
    expect(
      reducer({
        login: 'change'
      }, {
        type: types.CHANGE_LOGIN,
        login: 'change login'
      })
    ).toEqual(
      {
        login: 'change login'
      }
    )
  })

})