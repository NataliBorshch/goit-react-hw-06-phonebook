import { connect } from "react-redux";
import actionContacts from "../../redux/contacts/contacts-action";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  getFilter: (e) => dispatch(actionContacts.FilterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
