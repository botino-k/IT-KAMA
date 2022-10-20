import React from 'react';
import stl from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  const posts = props.posts.map((el)=> <Post massage= {el.massage} likeCount= {el.likeCount}/> )
  let inputData = React.createRef() // реакт говорит, что ref нужно минимизировать. Причину не изучала

  function handleSubmit(e) {
    e.preventDefault();
  }

  function massageAllart() {
    if(inputData.current.value){
      props.dispatch({type:"ADD-POST", postMsg:inputData.current.value})// благодаря ref имеем доступ к inputData
}
  }

  function onChangeInput(){
    props.dispatch({type:"UPDATE-NEW-CHANGE-INPUT", postInput:inputData.current.value})
  }

   function onFocusInput(){
     props.dispatch({type:"UPDATE-NEW-CHANGE-INPUT", postInput:''})
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