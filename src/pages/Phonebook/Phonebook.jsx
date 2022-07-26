import s from './Phonebook.module.css';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth';
import { Link } from 'react-router-dom';
import UserProfile from 'components/UserProfile/UserProfile';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const Phonebook = () => {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.mainPage}>
      <h1 className={s.title}>Welcome to your personal phonebook!</h1>

      {!isLoggedIn && (
        <Container>
          <Row className="justify-content-md-center">
            <Card style={{ width: '24rem' }}>
              <Card.Body className="text-center">
                <Button variant="primary" className="me-3">
                  <Card.Link
                    as={Link}
                    to="/register"
                    className="text-white text-decoration-none"
                  >
                    Register now
                  </Card.Link>
                </Button>
                <Button variant="primary">
                  <Card.Link
                    as={Link}
                    to="/login"
                    className="text-white text-decoration-none"
                  >
                    Login to your account
                  </Card.Link>
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default Phonebook;
