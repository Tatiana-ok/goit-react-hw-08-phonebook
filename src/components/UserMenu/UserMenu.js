import s from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const UserMenu = ({ userName, onLogOut }) => {
    return (
        <>
            <p>Добро пожаловать, {userName}</p>
            <button type='button' onClick={onLogOut} >Выйти</button>
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
