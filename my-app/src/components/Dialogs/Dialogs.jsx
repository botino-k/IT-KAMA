import stl from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const DialogUserItem = (props) => {
  return (
    <div>
      <NavLink className={(el) => el.isActive ? stl.active : ''} to={props.id}>{props.name}</NavLink>
    </div>
  )
}

const DialogUserMassage= (props) => {
  return (
    <div>
     {props.massage}
    </div>
  )
}

const Dialogs = (props) => {
  return (
 
    <section className='content'>
      <div className={stl.dialogsWrapper}>
        <div className={stl.usersWrapper}>
          <h1>Users:</h1>

        {props.userData.map((el)=> <DialogUserItem name= {el.name} id= {el.id}/> )}
        </div>
        <div>
          <h1>Massages:</h1>
          {props.userMassage.map((el)=> <DialogUserMassage massage= {el.massage} /> )}
        </div>
      </div>
    </section>

  )
};

export default Dialogs;