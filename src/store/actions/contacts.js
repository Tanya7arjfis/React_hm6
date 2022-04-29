import { get, post, deleteReq } from "../../api"

const API_URL = 'https://626984e3aa65b5d23e86309c.mockapi.io/contacts/';

export const ACTION_ADD_CONTACT = 'ACTION_ADD_CONTACT';
export function addContact(payload) {
  return function (dispatch) {
    post(API_URL, {
      name: payload.name,
      surname: payload.surname,
      tel: payload.tel
    }).then(date => {
      dispatch({
        type: ACTION_ADD_CONTACT, payload: date
      })
    })
  }
}

export const ACTION_DELETE_CONTACT = 'ACTION_DELETE_CONTACT';
export function onDeleteItem(payload) {
  return function (dispatch) {
    deleteReq(API_URL + payload)
      .then(date => {
        console.log(date)
        dispatch({
          type: ACTION_DELETE_CONTACT,
          payload: date.id
        })
      })
  }
}

export const ACTION_FETCH_CONTACT = 'ACTION_FETCH_CONTACT';
export function fetchContact() {
  return function (dispatch) {
    get(API_URL).then(date => {
      dispatch({
        type: ACTION_FETCH_CONTACT,
        payload: date
      })
    })
  }
}