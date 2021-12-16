import { createAction, handleActions } from "redux-actions"
import { autoSearchWordApi, productApi } from "../lib/api"

const CHANGE_INPUT ='product/CHANGE_INPUT'
const GET_ITEMS = 'product/GET_ITEMS'
const GET_WORDS ='product/GET_WORDS'

export const changeInput = createAction(CHANGE_INPUT, input => input)

export const getItems = (query) => dispatch => {
  productApi.getProduct(query)
  .then(({data}) => {
    dispatch({
      type:GET_ITEMS,
      payload:{
        data, 
      }
    })
  })
}

export const readSearchWord = (relatedWord) => dispatch => {
  autoSearchWordApi.getSearchWord(relatedWord)
  .then(({data})=>{
    dispatch({
      type:GET_WORDS,
      payload:{
        data,
      }
    })
  })
}

const initialState = {
  input:"",
  items: null,
  words: null,
}

const product = handleActions({
  [CHANGE_INPUT]:(state, {payload:input})=>({
    ...state,
    input:input
  }),
  [GET_ITEMS]: (state, {payload: {data, query}}) =>({
    ...state,
    items:data
  }),
  [GET_WORDS] : (state, {payload: data, relatedWord}) =>({
    ...state, 
    words:data
  })
}, initialState)

export default product