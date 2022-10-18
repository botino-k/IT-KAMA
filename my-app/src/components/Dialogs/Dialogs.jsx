import stl from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogUserItem = (props) => {
  return (
    <div>
      <NavLink className={(el) => el.isActive ? stl.active : ''} to={props.id}>{props.name}</NavLink>
    </div>
  )
}

const DialogUserMassage = (props) => {
  return (
    <div>
      {props.massage}
    </div>
  )
}

const Dialogs = (props) => {
  const a = props.state.userData.map((el) => <DialogUserItem name={el.name} id={el.id} />)
  const b = props.state.userMassage.map((el) => <DialogUserMassage massage={el.massage} />)
  return (

    <section className='content'>
      <div className={stl.dialogsWrapper}>
        <div className={stl.usersWrapper}>
          <h1>Users:</h1>

          {a}
        </div>
        <div>
          <h1>Massages:</h1>
          {b}
          <form>
            <textarea>

            </textarea>
            <button type='submit'>Отправить</button>
          </form>
        </div>
      </div>
    </section>

  )
};

export default Dialogs;