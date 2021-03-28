import React from "react";
import Button from "../Button";
import { ReactComponent as IconDelite } from "../../icon/delite.svg";
import styles from "./ContactsList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map((ele) => {
      return (
        <li key={ele.id} className={styles.item}>
          <p>{ele.name}</p>
          <p>{ele.number}</p>
          <Button onClick={() => onDelete(ele.id)} type="button">
            <IconDelite
              width="30"
              height="25"
              fill="white"
              aria-label="delite"
            />
          </Button>
        </li>
      );
    })}
  </ul>
);

export default ContactList;
