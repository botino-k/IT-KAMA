const UPDATE_NEW_CHANGE_INPUT="UPDATE-NEW-CHANGE-INPUT";
const ADD_POST="ADD-POST";

export const addPostActionCreator = (postMsg) => ({
  type: ADD_POST,
  postMsg,
});

export const updateNewChangeInputActionCreator = (postInput) => ({
  type: UPDATE_NEW_CHANGE_INPUT,
  postInput,
});

const profileReducer = (state, action) => {
  //в state приходит только та часть, которая нужна конкретному reducer. в нашем случае (_state.profilePage)
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        massage: action.postMsg,
        likeCount: "0",
        id: "4",
      };
      state.posts.push(newPost);
      state.newChangeInput = "";
      return state;
    case UPDATE_NEW_CHANGE_INPUT:
      state.newChangeInput = action.postInput;
      return state;
    default:
      return state;
  }
};

export default profileReducer;