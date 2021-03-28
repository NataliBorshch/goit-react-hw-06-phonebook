import React from "react";
import ContactsForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

import styles from "./App.module.css";

const App = () => {
  return (
    <section>
      <h2 className={styles.title}>Phonebook</h2>
      <div className={styles.box}>
        <ContactsForm />

        <div className={styles.contactsBox}>
          <h3>Contacts</h3>
          <Filter />
          <ContactList />
        </div>
      </div>
    </section>
  );
};

export default App;
