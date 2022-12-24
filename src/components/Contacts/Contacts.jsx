import React from 'react';

export const ContactsForm = ({ contacts, onDelete }) => {
  return (
    <>
      {' '}
      {contacts.length !== 0 && (
        <ul>
          {contacts.map(({ name, tel, id }) => (
            <li key={name}>
              <p>
                {name}: {tel}
              </p>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
