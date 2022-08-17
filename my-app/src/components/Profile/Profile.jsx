import stl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
  return (
    <section className={stl.profile}>
      <div className={stl.background} > </div>
      <div className={stl.user} >
        <div className={stl.avatar}></div>
        <h1>Имя пользователя</h1>
        <div>Описание пользователя</div>
      </div>
      <MyPosts/>
    </section>
  )
};
  
  export default Profile;