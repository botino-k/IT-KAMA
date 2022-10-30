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

let initialState = {
  userData: [
    { name: "Mary", id: "1" },
    { name: "Sasha", id: "2" },
    { name: "Pert", id: "3" },
    { name: "ff", id: "4" },
    { name: "Tolik", id: "5" },
  ],

  userMassage: [
    { massage: "SashaMarySasha", id: "1" },
    { massage: "SashaSashaSasha", id: "2" },
    { massage: "SashaPertSasha", id: "3" },
    { massage: "SashaffSasha", id: "4" },
    { massage: "SashaTolikSasha", id: "5" },
  ],

  newChangeTextarea: ``,

}

const dialogsReducer = (state = initialState, action) => {

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