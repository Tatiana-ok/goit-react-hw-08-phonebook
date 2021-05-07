import './App.css';
import s from './App.module.css';
import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import NotFoundView from './views/NotFoundView';
import PhonebookView from './views/PhonebookView';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import styles from './App.module.css';

// const PhonebookView = lazy(() => import('./views/PhonebookView'));

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    render() {
        return(
        <div className={styles.container}>
            <AppBar />
                <Switch>
                    <PublicRoute exact path="/" component={HomeView} />
                    <PublicRoute path="/register" restricted redirectTo="/" component={RegistrationView} />
                    <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
                    <PrivateRoute path="/contacts" redirectTo="/login" component={PhonebookView}/>
                    <PublicRoute component={NotFoundView} />
                </Switch>
        </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
// export default App;

