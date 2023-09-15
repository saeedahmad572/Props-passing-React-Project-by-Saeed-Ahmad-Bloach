import React, { useState } from 'react'
import Card from './components/card';
import './App.css' 
import Form from './components/form';

function App() {
  const [name1 , setName] = useState("ahmad");
  function avc(){
    
    setName("ali")
  }
  // function handlechange (e){
  //  setText(e.target.value);
  
  return ( 
    <div>
      {/* <input value={Text} onChange={handlechange}></input>
      <h1> You typed: {text}</h1>
      <button onClick={() => setText('hello')}>
        Reset
      </button> */}
      <button onClick={avc} className='click'>{name1}</button>
      <div className='main'>
  <div className='flex'>
    <Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    <Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    <Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    </div>
    <div className='flex'>
    <Card
    Title = 'Ahmad'
    imageSrc = './images/2.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    <Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    /><Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    </div>
    <div className='flex'>
    <Card
    Title = 'Shoaib'
    imageSrc = './images/3.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    <Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    <Card
    Title = 'Ali'
    imageSrc = './images/1.png'
    Discription = 'alo lay lo tinday lay lo . ali is a bad boy and he always do many mistakes during code and we are all happy her because her gender is shemale.'
    link = 'https://www.linkedin.com/feed/'
    />
    </div>
    
    </div>
    <Form/>
      </div>
      
  )
    }

export default App