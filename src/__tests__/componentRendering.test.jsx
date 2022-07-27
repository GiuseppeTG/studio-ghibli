import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/homePage';
import PeoplePage from '../pages/peoplePage';
import store from '../redux/configureStore';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import PeopleList from '../components/PeopleList/PeopleList';

describe('Testing component rednering propperly', () => {
  test('renders HomePage component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders PeoplePage component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <PeoplePage />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders App component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders Home component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders Navbar component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders PeopleList component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <PeopleList />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
