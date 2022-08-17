import stl from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <section className={stl.wrapper}>
      <h1>Что нового?</h1>
      <form className={stl.form} >
      <input type="text"  name="name"/>
      <input type="submit" value="Submit"/>
       </form>
        <Post/>
        <Post/>
    </section>
  )
};
  
  export default MyPosts;