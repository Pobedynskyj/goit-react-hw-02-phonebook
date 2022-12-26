import { Component } from 'react';
import { ContactsForm } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import Form from './Form';
import s from './App.module.css';

// export const App = () => {
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = object => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, object] });

    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === object.name.toLowerCase()
    );
    console.log(checkContact);
    if (checkContact) {
      alert(`${object.name} is already in contacts `);
    }

    this.setState(prevState => ({
      contacts: [this.contact, ...prevState.contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  filterByName = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  visibileContacts = id => {
    const { contacts, filter } = this.state;
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
  };

  render() {
    const visibileContacts = this.visibileContacts();
    console.log(this.state);
    return (
      <div className={s.mainDiv}>
        <h1 className={s.mainTitle}>Phonebook</h1>
        <Form changeAppState={this.handleSubmit} />
        <h1 className={s.mainTitle}>Contacts</h1>

        <Filter filterName={this.filterByName} value={this.state.filter} />
        <ContactsForm
          contacts={visibileContacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
