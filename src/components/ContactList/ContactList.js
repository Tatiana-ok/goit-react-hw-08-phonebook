import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import contactsSelectors from '../../redux/phonebook/phonebook-selectors';

function ContactList({ contacts = [], onUpdateContact, onDeleteContact }) {
  return (
    <>
      <ul className={s.listOfContact}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.itemOfListContact}>
            <p className={s.itemNameContact}>{contact.name} </p>
            <p className={s.itemNumberContact}>{contact.number}</p>
            <button
              className={s.btnOfListContact}
              type="button"
              onClick={() => onUpdateContact(contact.id)}
            >
              Изменить
            </button>
            <button
              className={s.btnOfListContact}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(phonebookOperations.deleteContact(contactId)),
  onUpdateContact: contactId =>
    dispatch(phonebookOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
