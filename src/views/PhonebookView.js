import React, { Component } from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebook-operations';
// import phonebookSelectors from '../redux/phonebook/phonebook-selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';


const containerPhonebook = {
  marginLeft: "10px"
}

class PhonebookView extends Component {
  componentDidMount = () => {
    this.props.fetchContacts()
  }

  render() {
    return (
      <div style={containerPhonebook}>
        <h1>Телефонная книга</h1>
        <ContactForm />
        <h2>Контакты</h2>
        <Filter />
        <ContactList />
      </div>
    )
  }
};

// const mapStateToProps = state => ({
//   contacts: phonebookSelectors.getAllContacts(state)
// });

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})

export default connect(null, mapDispatchToProps)(PhonebookView);