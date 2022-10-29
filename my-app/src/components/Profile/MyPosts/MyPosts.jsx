import React from 'react';
import stl from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updateNewChangeInputActionCreator} from '../../redux/profileReducer.js'
const MyPosts = (props) => {

  const posts = props.posts.map((el)=> <Post massage= {el.massage} likeCount= {el.likeCount}/> )
  let inputData = React.createRef() // реакт говорит, что ref нужно минимизировать. Причину не изучала

  function handleSubmit(e) {
    e.preventDefault();
  }

  function massageAllart() {
    if(inputData.current.value){
      props.dispatch(addPostActionCreator(inputData.current.value))// благодаря ref имеем доступ к inputData
}
  }

  function onChangeInput(){
    props.dispatch(updateNewChangeInputActionCreator(inputData.current.value))
  }

   function onFocusInput(){
     props.dispatch(updateNewChangeInputActionCreator(''))
    }

  return (
    <section className={stl.wrapper}>
      <h1>Что нового?</h1>
      <form onSubmit={handleSubmit} className={stl.form} >
        <input
          onFocus={onFocusInput}
          onChange={onChangeInput}
          ref={inputData}
          type="text"
          name="name"
          value={props.newChangeInput} />
        <input onClick={massageAllart} type="submit" value="Отправить" />
      </form>
      {posts}
    </section>
  )
};

export default MyPosts;