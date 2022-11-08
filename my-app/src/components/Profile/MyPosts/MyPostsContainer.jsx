import React from 'react';
import { addPostActionCreator, updateNewChangeInputActionCreator } from '../../redux/profileReducer.js'
import MyPosts from './MyPosts'
import ContextStore from '../../redux/ContextStore'
// это контейнерная компонента, она может быть грязной, она снабжает презентационную чистую компоненту

const MyPostsContainer = (props) => {

  return (
    <ContextStore.Consumer>
      {(value) => {
        value.dispatch.bind(value.getState().profileReducer)
        //debugger

        const massagePublish = (text) => {
          if (text) {
            value.dispatch(addPostActionCreator(text))
          }
        }

        const onChangeInput = (text) => {
          value.dispatch(updateNewChangeInputActionCreator(text))
        }

        const onFocusInput = () => {
          value.dispatch(updateNewChangeInputActionCreator(''))
        }
        return (
          <MyPosts
            addNewPostText={massagePublish}
            onChangeInput={onChangeInput}
            onFocusInput={onFocusInput}
            posts={value.getState().profileReducer.posts}
            newChangeInput={value.getState().profileReducer.newChangeInput}
          />)
      }}
    </ContextStore.Consumer>
  )
};

export default MyPostsContainer;