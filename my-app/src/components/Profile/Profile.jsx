import stl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = (props) => {

  return (
    <section className='content'>
      <div className={stl.background} > </div>
      <div className={stl.user} >
        <div className={stl.avatar}></div>
        <h1>Имя пользователя</h1>
        <div>Описание пользователя</div>
      </div>
      <MyPosts
        posts = {props.profilePage.posts}
        addPost={props.addPost}
        newChangeInput = {props.profilePage.newChangeInput}
        updateNewChangeInput={props.updateNewChangeInput} />
    </section>
  )
};

export default Profile;