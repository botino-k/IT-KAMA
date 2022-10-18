import {rerenderEntireTree } from '../../render'


const state = {

  profilePage: {
    posts: [
      { massage: "hi!", likeCount: "4", id: "1"  },
      { massage: "how!", likeCount: "1",  id: "2"  },
      { massage: "hhhh!", likeCount: "2", id: "3"  },
    ],
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
  },
};

export let addPost = (postMsg) => {
  let newPost = {
    massage: postMsg,
    likeCount: "0",
    id: "4",
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
};

export default state;