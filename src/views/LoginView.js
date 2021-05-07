import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import styles from './css/LoginView.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginView extends Component {
    state = {
        email: '',
        password: ''
    }

    onEmailChange = e => {
        this.setState({ email: e.currentTarget.value})
    }

    onPasswordChange = e => {
        this.setState({ password: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email === '') { 
            toast.error('Поле "Адрес почты" не заполнено'); 
        } if (this.state.password.length < 7) { 
            toast.error('Неправильный пароль'); 
        } else {
            this.props.onLogin(this.state);
            this.setState({ email: '', password: '' });
            return;
        };
    };

    render() {
        return (
            <>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <h2>Вход</h2>
                    <label>Адрес почты</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={this.onEmailChange}
                        value={this.state.email}
                    />
                    <label>Пароль</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                    />
                    <ToastContainer />
                    <Button className={styles.button} variant="primary" type="submit">Войти</Button>
                </form>
            </>
        )
    }
};

const mapDispatchToProps = dispatch => ({
 onLogin: (data) => dispatch(authOperations.login(data))
})

export default connect(null, mapDispatchToProps)(LoginView);