import { Component } from 'react';
import { ContactsForm } from './Contacts/Contacts';
import Form from './Form';

// export const App = () => {
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = object => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, object] });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <Form changeAppState={this.handleSubmit} />
        <ContactsForm
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
