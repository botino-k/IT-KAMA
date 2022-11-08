import stl from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <section className='content'>
      <div className={stl.background} > </div>
      <div className={stl.user} >
        <div className={stl.avatar}></div>
        <h1>Имя пользователя</h1>
        <div>Описание пользователя</div>
      </div>
      <MyPostsContainer />
    </section>
  )
};

export default Profile;