import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
  INITIAL_CURRENT,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};
function writeFavsToLocalStorage(favs) {
  window.localStorage.setItem("favs", JSON.stringify(favs));
}
function readFavsFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("favs"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case INITIAL_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
        favs: readFavsFromLocalStorage(),
      };

    case FAV_ADD:
      writeFavsToLocalStorage([...state.favs, action.payload]);
      let newFav = action.payload;
      let copyFavs = [...state.favs, newFav];
      return {
        ...state,
        favs: [...copyFavs],
      };

    case FAV_REMOVE:
      let selectedFav = action.payload;
      let copyFavs2 = [...state.favs];
      let resultFav = copyFavs2.filter((fav) => fav !== selectedFav);
      writeFavsToLocalStorage([...resultFav]);
      return {
        ...state,
        favs: [...resultFav],
      };

    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
