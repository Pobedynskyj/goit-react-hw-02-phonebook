import React from 'react';
import s from './Contacts.module.css';

export const ContactsForm = ({ contacts, onDelete }) => {
  return (
    <>
      {' '}
      {contacts.length !== 0 && (
        <ul className={s.contList}>
          {contacts.map(({ name, tel, id }) => (
            <li className={s.contItem} key={name}>
              <p className={s.contInfo}>
                {name}: {tel}
              </p>
              <button
                className={s.contBtn}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
