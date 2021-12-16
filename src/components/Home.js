import React, { useEffect, useRef, useState } from 'react';
import nextId from 'react-id-generator';
import { Input, FormGroup, Label, Form } from 'reactstrap';
import ProductList from './ProductList';

const Home = ({input, items, words, changeInput, getItems, readSearchWord}) => {
  const [ active, setActive ] = useState(false)
  const autoSearchWordsBox = useRef(null)
  const body = document.querySelector('body')

  //특정영역 밖을 선택하면
  const handleBodyClick = (e) => {
    const target = e.target
    if(target == e.currentTarget.querySelector('.search-input')) {return}
    else{
      setActive(false)
    }
  }

  body.addEventListener('click', handleBodyClick)
  useEffect(()=>{
    readSearchWord(input)
    console.log(active,"acitivexs");
    if(autoSearchWordsBox.current) {
      active ?
      autoSearchWordsBox.current.classList.remove("disappear") :
      autoSearchWordsBox.current.classList.add("disappear")
      }
  },[input,active])
  
// console.log(autoSearchWordsBox,"box");
  // words && console.log(Boolean(words.data.items[0].length,"data"))
  // autoSearchWordsBox.current.className && console.log(autoSearchWordsBox.current.className);
  const onSubmit = (e) =>{
    e.preventDefault()
    getItems(input)
    changeInput('')
  }
  const handleChange =(e)=>{
    setActive(true)
    changeInput(e.target.value)
  }
  const handleClick =()=>{
    autoSearchWordsBox.current ?
    setActive(!active) :
    setActive(false)
  }
  // console.log(input,"input");
  return (
    <>
    <Form onSubmit={onSubmit}>
      <FormGroup>
      <Label>검색어를 입력하세요</Label>
      <div className="search-bar">
      <Input className="search-input" autoFocus onChange={handleChange} onClick={handleClick} value={input} style={{width:"500px", margin:"0 auto" }} />
      { words && words.data.items[0].length ?
        <ul className="auto-searchwords-box" ref={autoSearchWordsBox} >
          {input && words && words.data.items[0].map(sw=><li key={nextId()}><a href="https://www.naver.com">{sw[0]}</a></li>)}
        </ul>
        :
        null
      }
      </div>
      </FormGroup>
    </Form>
    <ProductList items={items} getItems={getItems}/>
    </>
  );
};

export default Home;