const ghibliAPI = 'https://ghibliapi.herokuapp.com';

// actions

const GET_FILMS = 'redux/films/films/GET_FILMS';

// reducer

export default function filmsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_FILMS:
      return action.payload;
    default:
      return state;
  }
}

//  actions

function getFilms() {
  return async (dispatch) => {
    // const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const response = await fetch(`${ghibliAPI}/films`);
    const films = await response.json();
    dispatch({
      type: GET_FILMS,
      payload: films,
    });
  };
}

export { getFilms };
