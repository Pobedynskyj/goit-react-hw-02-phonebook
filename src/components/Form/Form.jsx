import { Component } from 'react';
import s from './Form.module.css';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, tel } = this.state;
    const { changeAppState } = this.props;

    const obj = { name: name, tel: tel, id: nanoid(3) };
    console.log('form');
    changeAppState(obj);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <input type="number" name="tel" onChange={this.handleChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
