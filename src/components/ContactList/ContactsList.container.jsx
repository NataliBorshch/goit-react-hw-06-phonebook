import { connect } from "react-redux";
import ContactList from "./ContactList";
import actionContacts from "../../redux/contacts/contacts-action";

const getFilterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(actionContacts.DeleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
