import React from 'react';
import stl from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import {addMassageActionCreator, updateNewTextareaActionCreator} from '../redux/state'

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

  function handleSubmit(e) {
    e.preventDefault();
  }

  let textareaData = React.createRef()

  const a = props.state.userData.map((el) => <DialogUserItem name={el.name} id={el.id} />)
  const b = props.state.userMassage.map((el) => <DialogUserMassage massage={el.massage} />)
 
 
  function massagePost() {
    if(textareaData.current.value){
      props.dispatch(addMassageActionCreator(textareaData.current.value))
      textareaData.current.value = ""
    }
  }

  function onChangeTextarea(){
    props.dispatch(updateNewTextareaActionCreator(textareaData.current.value))
  }

   function onFocusTextarea(){
     props.dispatch(updateNewTextareaActionCreator(''))
    }


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
          <form onSubmit={handleSubmit}>
            <textarea
              onFocus={onFocusTextarea}
              onChange={onChangeTextarea}
              ref={textareaData}
              value={props.newChangeTextarea}
            >
            </textarea>
            <button
              onClick={massagePost} type='submit'>Отправить</button>
          </form>
        </div>
      </div>
    </section>

  )
};

export default Dialogs;