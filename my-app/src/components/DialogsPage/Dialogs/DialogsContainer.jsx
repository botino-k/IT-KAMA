import React from 'react';
import { addMassageActionCreator, updateNewTextareaActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

// это контейнерная компонента, она может быть грязной, она снабжает презентационную чистую компоненту

const DialogsContainer = (props) => {
  props.store.dispatch.bind(props.store.getState().dialogsReducer)
  //debugger

  const massagePost = (text) => {
    if (text) {
      props.store.dispatch(addMassageActionCreator(text))
    }
  }

  const onChangeTextarea = (text) => {
    props.store.dispatch(updateNewTextareaActionCreator(text))
  }

  const onFocusTextarea = () => {
    props.store.dispatch(updateNewTextareaActionCreator(''))
  }

  return (
    <Dialogs
      massagePost={massagePost}
      onChangeTextarea={onChangeTextarea}
      onFocusTextarea={onFocusTextarea}
      userData={props.store.getState().dialogsReducer.userData}
      userMassage={props.store.getState().dialogsReducer.userMassage}
      newChangeTextarea={props.store.getState().dialogsReducer.newChangeTextarea}
    />
  )
};

export default DialogsContainer;