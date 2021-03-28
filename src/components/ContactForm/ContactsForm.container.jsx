import { connect } from "react-redux";
import ContactsForm from "./ContactsForm";
import contactsAction from "../../redux/contacts/contacts-action";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (obj) => dispatch(contactsAction.AddContact(obj)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
