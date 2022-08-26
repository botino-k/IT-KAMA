import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {massage : 'hi!', likeCount : '4'},
    {massage : 'how!', likeCount : '1'},
    {massage : 'hhhh!', likeCount : '2'}
  ]
  
const userData=[
  {name:'Mary', id:'1' },
  {name:'Sasha', id:'2' },
  {name:'Pert', id:'3' },
  {name:'ff', id:'4' },
  {name:'Tolik', id:'5' },
  ]

const userMassage=[
  {massage:'SashaMarySasha', id:'1' },
  {massage:'SashaSashaSasha', id:'2' },
  {massage:'SashaPertSasha', id:'3' },
  {massage:'SashaffSasha', id:'4' },
  {massage:'SashaTolikSasha', id:'5' },
  ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App 
     posts = {posts}
     userData = {userData} 
     userMassage =  {userMassage}/>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
