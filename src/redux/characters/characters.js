const ghibliAPI = 'https://ghibliapi.herokuapp.com';

// actions

const GET_CHARACTERS = 'redux/characters/characters/GET_CHARACTERS';

// reducer

export default function charactersReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}

//  actions

function getCharacters() {
  return async (dispatch) => {
    // const response = await fetch('https://ghibliapi.herokuapp.com/people');
    const response = await fetch(`${ghibliAPI}/people`);
    const characters = await response.json();
    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    });
  };
}

export { getCharacters };
