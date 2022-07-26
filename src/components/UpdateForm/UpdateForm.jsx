import { PropTypes } from 'prop-types';
import { useState } from 'react';
// import s from './UpdateForm.module.css';
import { Notify } from 'notiflix';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { RiUserShared2Line } from 'react-icons/ri';
import { BsTelephoneForward } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';

const UpdateForm = ({ onUpdate, isUpdated, setIsClicked, id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onUpdateCurrentContact = evt => {
    evt.preventDefault();

    onUpdate({ id, name, number });

    if (isUpdated) {
      Notify.success(`${name} contact updated successfully`);
    }

    setName('');
    setNumber('');
    setIsClicked(false);
  };

  return (
    <Form
      onSubmit={onUpdateCurrentContact}
      //! autoComplete="off"
    >
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <RiUserShared2Line size="18px" />
        </InputGroup.Text>
        <Form.Control
          aria-label="name"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <InputGroup.Text>
          <BsTelephoneForward size="18px" />
        </InputGroup.Text>
        <Form.Control
          aria-label="number"
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="outline-info" type="submit">
          <GrUpdate size="18px" />
        </Button>
      </InputGroup>
    </Form>
  );

  // ? vanilla CSS
  // return (
  //   // ? autoComplete="off"
  //   <form onSubmit={onUpdateCurrentContact} className={s.form}>
  //     <label htmlFor="username" className={s.label}>
  //       Name
  //     </label>
  //     <input
  //       className={s.input}
  //       type="text"
  //       name="name"
  //       id="username"
  //       value={name}
  //       onChange={e => setName(e.target.value)}
  //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //       required
  //     />
  //     <label htmlFor="usernumber" className={s.label}>
  //       Number
  //     </label>
  //     <input
  //       className={s.input}
  //       type="tel"
  //       name="number"
  //       id="usernumber"
  //       value={number}
  //       onChange={e => setNumber(e.target.value)}
  //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //       required
  //     />

  //     <button type="submit" className={s.btn}>
  //       Update contact
  //     </button>
  //   </form>
  // );
};

UpdateForm.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  isUpdated: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default UpdateForm;
