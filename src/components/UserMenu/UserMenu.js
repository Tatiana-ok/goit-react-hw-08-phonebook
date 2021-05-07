import s from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';

const UserMenu = ({ userName, onLogOut }) => {
    return (
        <>
            <p>Добро пожаловать, {userName}</p>
            <Button variant="primary" type="button" onClick={onLogOut}>Выйти</Button>
        </>
    )
};

const mapStateToProps = state => ({
    userName: authSelectors.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    onLogOut: () => dispatch(authOperations.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
