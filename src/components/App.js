import React, { Component } from 'react';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts/contactsActions';
import styles from '../components/App.module.css';
import fadeTransition from '../transition/fade.module.css';
import slideTransition from '../transition/slide.module.css';
import rotateTransition from '../transition/rotate.module.css';
import scaleTransition from '../transition/scale.module.css';

class App extends Component {
  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem('contacts');
  //   if (persistedContacts) {
  //     this.props.localStorageContact(persistedContacts);
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.contacts !== this.props.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
  //   }
  // }
  filteredContacts=() => {
    return this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
  }

  deleteContact = id => {
    this.props.deleteContact(id);
    if (this.filteredContacts().length === 1) {
      this.props.filterContact('');
    }
  };
  
  render() {
    return (
      <>
        <ContactForm
          contacts={this.props.contacts}
          addContact={this.props.addContact}
        />
        <h2 className={styles.title}>Contacts</h2>
        <CSSTransition
          in={this.props.contacts.length >= 2 || this.props.filter.length !== 0}
          timeout={500}
          classNames={fadeTransition}
          mountOnEnter
          unmountOnExit
        >
          <Filter
            filter={this.props.filter}
            filterContact={this.props.filterContact}
          />
        </CSSTransition>
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  addContact: contactsActions.addContact,
  filterContact: contactsActions.filterContact,
  deleteContact: contactsActions.deleteContact,
  // localStorageContact: contactsActions.localStorageContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
