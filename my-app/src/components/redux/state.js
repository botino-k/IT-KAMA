const UPDATE_NEW_CHANGE_INPUT="UPDATE-NEW-CHANGE-INPUT";
const ADD_POST="ADD-POST";
const UPDATE_NEW_CHANGE_MASSAGE="UPDATE-NEW-CHANGE-MASSAGE";
const ADD_MASSAGE="ADD-MASSAGE";


let store = {
  _state: {
    profilePage: {
      posts: [
        { massage: "hi!", likeCount: "4", id: "1" },
        { massage: "how!", likeCount: "1", id: "2" },
        { massage: "hhhh!", likeCount: "2", id: "3" },
      ],
      newChangeInput: `what's up`,
    },

    massagePage: {
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

    },

    refPage:{
      cardCollection: [],
    },
  },

  getState() {
    return this._state;
  },

  _rerenderEntireTree() {
    console.log("do");
  },

  subscriber(observer) {
    this._rerenderEntireTree = observer;
  },
  // в dispatch кладутся функции, которые меняют компонент
  // action-это объект с обязательным {type:string}
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        massage: action.postMsg,
        likeCount: "0",
        id: "4",
      };
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newChangeInput = ""
      this._rerenderEntireTree(this)

    } else if (action.type === UPDATE_NEW_CHANGE_INPUT) {
      this._state.profilePage.newChangeInput = action.postInput;
      this._rerenderEntireTree(this);

    } else if(action.type === ADD_MASSAGE) {
      let newMsg = {
        massage: action.postMassage,
        id: "4",
      };
      this._state.massagePage.userMassage.push(newMsg)
      this._state.massagePage.newChangeTextarea = ""
      this._rerenderEntireTree(this)

    }else if (action.type === UPDATE_NEW_CHANGE_MASSAGE) {
      this._state.massagePage.newChangeTextarea = action.postTextarea;
      this._rerenderEntireTree(this);
    }
  },
};

export default store;

export const addPostActionCreator = (postMsg) => ({
  type: ADD_POST,
  postMsg,
});

export const updateNewChangeInputActionCreator = (postInput) => ({
  type: UPDATE_NEW_CHANGE_INPUT,
  postInput,
});

export const addMassageActionCreator = (postMassage) => ({
  type: ADD_MASSAGE,
  postMassage,
});

export const updateNewTextareaActionCreator = (postTextarea) => ({
  type: UPDATE_NEW_CHANGE_MASSAGE,
  postTextarea,
});