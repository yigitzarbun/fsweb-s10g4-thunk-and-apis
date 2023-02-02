import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_LOADING,
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
function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case INITIAL_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case FAV_ADD:
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

    case FETCH_LOADING:
      return state;

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
}
