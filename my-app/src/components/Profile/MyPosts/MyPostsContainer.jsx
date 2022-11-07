import React from 'react';
import { addPostActionCreator, updateNewChangeInputActionCreator } from '../../redux/profileReducer.js'
import MyPosts from './MyPosts'

// это контейнерная компонента, она может быть грязной, она снабжает презентационную чистую компоненту

const MyPostsContainer = (props) => {
  props.store.dispatch.bind(props.store.getState().profileReducer)
  //debugger

  const massagePublish = (text) => {
    if (text) {
      props.store.dispatch(addPostActionCreator(text))
    }
  }

  const onChangeInput = (text) => {
    props.store.dispatch(updateNewChangeInputActionCreator(text))
  }

  const onFocusInput = () => {
    props.store.dispatch(updateNewChangeInputActionCreator(''))
  }

  return (
    <MyPosts
      addNewPostText={massagePublish}
      onChangeInput={onChangeInput}
      onFocusInput={onFocusInput}
      posts={props.store.getState().profileReducer.posts}
      newChangeInput={props.store.getState().profileReducer.newChangeInput}
    />
  )
};

export default MyPostsContainer;