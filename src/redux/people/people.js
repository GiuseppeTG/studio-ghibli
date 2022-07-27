const ghibliAPI = 'https://ghibliapi.herokuapp.com';

// actions

const GET_PEOPLE = 'redux/people/people/GET_PEOPLE';

// reducer

export default function peopleReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_PEOPLE:
      return action.payload;
    default:
      return state;
  }
}

//  actions

function getPeople() {
  return async (dispatch) => {
    // const response = await fetch('https://ghibliapi.herokuapp.com/people');
    const response = await fetch(`${ghibliAPI}/people`);
    const people = await response.json();
    dispatch({
      type: GET_PEOPLE,
      payload: people,
    });
  };
}

export { getPeople };
