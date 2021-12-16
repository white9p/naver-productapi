import React from 'react';
import { connect } from 'react-redux';
import MyRoutes from '../routes/MyRoutes';
import { changeInput, getItems, readSearchWord } from '../modules/product'

const ProductContainer = ({input, items, words, changeInput, getItems, readSearchWord}) => {
  return (
    <MyRoutes 
      input={input}
      items={items} 
      words={words}
      getItems={getItems}
      changeInput={changeInput}
      readSearchWord={readSearchWord}/>
  );
};

export default connect(
  state =>({
    input: state.product.input,
    items: state.product.items,
    words: state.product.words,
  }),
  {
    changeInput,
    getItems,
    readSearchWord
  }
)(ProductContainer)