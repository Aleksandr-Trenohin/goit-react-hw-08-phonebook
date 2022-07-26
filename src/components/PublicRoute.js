// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate replace to="/" /> : children;
};

// ? PublicRouter 2
export default PublicRoute;
