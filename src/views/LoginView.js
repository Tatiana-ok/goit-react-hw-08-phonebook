import { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

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
        if (this.state.email && this.state.password !== '') {
            this.props.onLogin(this.state);
            this.setState({ email: '', password: '' });
            return;
        } 
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h2>Вход</h2>
                    <label>Адрес почты</label>
                    <input
                        
                        type="text"
                        onChange={this.onEmailChange}
                        value={this.state.email}
                    />
                    <label>Пароль</label>
                    <input
                        
                        type="text"
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                    />
                    <button type="submit">Войти</button>
                </form>
            </>
        )
    }
};

const mapDispatchToProps = dispatch => ({
 onLogin: (data) => dispatch(authOperations.login(data))
})

export default connect(null, mapDispatchToProps)(LoginView);