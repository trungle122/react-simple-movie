import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import Header from './Header';

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
