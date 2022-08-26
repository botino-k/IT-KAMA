import stl from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <section  className={stl.wrapper}>
      <h1>Что нового?</h1>
      <form onSubmit={handleSubmit} className={stl.form} >
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
      {props.posts.map((el)=> <Post massage= {el.massage} likeCount= {el.likeCount}/> )}
    </section>
  )
};

export default MyPosts;