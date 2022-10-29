const UPDATE_NEW_CHANGE_MASSAGE="UPDATE-NEW-CHANGE-MASSAGE";
const ADD_MASSAGE="ADD-MASSAGE";

export const addMassageActionCreator = (postMassage) => ({
  type: ADD_MASSAGE,
  postMassage,
});

export const updateNewTextareaActionCreator = (postTextarea) => ({
  type: UPDATE_NEW_CHANGE_MASSAGE,
  postTextarea,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MASSAGE:
      let newMsg = {
        massage: action.postMassage,
        id: "4",
      };
      state.userMassage.push(newMsg);
      state.newChangeTextarea = "";
      return state;
    case UPDATE_NEW_CHANGE_MASSAGE:
      state.newChangeTextarea = action.postTextarea;
      return state;
    default:
      return state;
  }
};


export default dialogsReducer;