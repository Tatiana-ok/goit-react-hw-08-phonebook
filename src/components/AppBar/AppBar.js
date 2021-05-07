import UserMenu from '../UserMenu/UserMenu';
import MainNavigation from '../Navigation/MainNavigation';
import AuthNavigation from '../Navigation/AuthNavigation';
import authSelectors from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
    return (
        <header>
            <span className={styles.logo} role="icon" aria-label="logo"></span>
            <div className={styles.AppBar}>
                <MainNavigation />
                {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
            </div>
            <hr className={styles.line} />
        </header>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar);


