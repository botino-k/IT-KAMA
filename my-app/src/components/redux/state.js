import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'

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
    this._state.profilePage = profileReducer(this._state.profilePage, action) // благодаря reducer обновляем часть стейта
    this._state.massagePage = dialogsReducer(this._state.massagePage, action)
    this._rerenderEntireTree(this);
  },
};

export default store;
