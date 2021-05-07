import './App.css';
import s from './App.module.css';
import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import styles from './App.module.css';

const PhonebookView = lazy(() => import('./views/PhonebookView'));
const HomeView = lazy(() => import('./views/HomeView'));
const RegistrationView = lazy(() => import('./views/RegistrationView'));
const LoginView = lazy(() => import('./views/LoginView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    render() {
        return(
        <div className={styles.container}>
            <AppBar />
            <Suspense fallback={<p>Загружаем...</p>}>
                <Switch>
                    <PublicRoute exact path="/" component={HomeView} />
                    <PublicRoute path="/register" restricted redirectTo="/" component={RegistrationView} />
                    <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
                    <PrivateRoute path="/contacts" redirectTo="/login" component={PhonebookView}/>
                    <PublicRoute component={NotFoundView} />
                </Switch>
            </Suspense>
        </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
// export default App;

