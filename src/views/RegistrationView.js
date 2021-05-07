import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import styles from './css/RegistrationView.module.css';

class RegistrationView extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    onNameChange = e => {
        this.setState({ name: e.currentTarget.value})
    }

    onEmailChange = e => {
        this.setState({ email: e.currentTarget.value})
    }

    onPasswordChange = e => {
        this.setState({ password: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email && this.state.password !== '') {
        this.props.onRegister(this.state);
        this.setState({ name: '', email: '', password: ''});
        return
        }
        else {
            this.setState({ alert: true})
        }
    };

    notify = () => toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    render() {
        return (
            <>
                <form className={styles.form} onSubmit={this.handleSubmit} autoComplete='off'>
                    <h2>Регистрация нового пользователя</h2>
                    <label htmlFor={this.nameInputId}>Имя</label>
                    <input
                        name='name'
                        id={this.nameInputId}
                        className={styles.input}
                        type="text"
                        onChange={this.onNameChange}
                        value={this.state.name}
                    />
                    <label>Адрес почты</label>
                    <input
                        name='email'
                        className={styles.input}
                        type="text"
                        onChange={this.onEmailChange}
                        value={this.state.email}
                    />
                    <label>Пароль</label>
                    <input
                        name='password'
                        className={styles.input}
                        type="text"
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                    />
                    <Button className={styles.button} variant="primary" type="submit">Отправить</Button>
                    {this.state.alert &&
                        <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />}
                </form>
            </>
        )
    }
};

const mapStateToProps = state => ({
    // isLoadingAuth: authSelectors.getAuthLoading(state),
    errorReg: authSelectors.getAuthError(state),
});

const mapDispatchToProps = dispatch => ({
    onRegister: (data) => dispatch(authOperations.register(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
