import React from 'react';
import { addMassageActionCreator, updateNewTextareaActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import ContextStore from '../../redux/ContextStore'
// это контейнерная компонента, она может быть грязной, она снабжает презентационную чистую компоненту

const DialogsContainer = (props) => {

  return (
    <ContextStore.Consumer>
      {(value) => {
        value.dispatch.bind(value.getState().dialogsReducer)
        //debugger

        const massagePost = (text) => {
          if (text) {
            value.dispatch(addMassageActionCreator(text))
          }
        }

        const onChangeTextarea = (text) => {
          value.dispatch(updateNewTextareaActionCreator(text))
        }

        const onFocusTextarea = () => {
          value.dispatch(updateNewTextareaActionCreator(''))
        }

        return (
          <Dialogs
            massagePost={massagePost}
            onChangeTextarea={onChangeTextarea}
            onFocusTextarea={onFocusTextarea}
            userData={value.getState().dialogsReducer.userData}
            userMassage={value.getState().dialogsReducer.userMassage}
            newChangeTextarea={value.getState().dialogsReducer.newChangeTextarea}
          />
        )
      }}
    </ContextStore.Consumer>
  )
};

export default DialogsContainer;