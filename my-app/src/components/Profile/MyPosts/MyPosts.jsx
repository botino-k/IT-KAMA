import React from 'react';
import stl from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  const a = props.posts.map((el)=> <Post massage= {el.massage} likeCount= {el.likeCount}/> )
  let inputData = React.createRef()

  function handleSubmit(e) {
    e.preventDefault();
   // console.log('Отправлена форма.');
  }

  function massageAllart() {

    console.log(`data fro form:${inputData.current.value}`);
  }

  return (
    <section  className={stl.wrapper}>
      <h1>Что нового?</h1>
      <form onSubmit={handleSubmit} className={stl.form} >
        <input ref={inputData}  type="text" name="name" />
        <input onClick={massageAllart} type="submit" value="Отправить" />
      </form>
      {a}
    </section>
  )
};

export default MyPosts;