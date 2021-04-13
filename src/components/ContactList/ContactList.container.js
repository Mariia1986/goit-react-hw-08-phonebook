import { connect } from "react-redux";
import operation from "../../redux/operation";
import ContactList from "./ContactList";
import PropTypes from "prop-types";
import {
  filteredContacts,
  
  getLoading

} from "../../redux/selectors";

const mapStateToProps = (state) => ({
  filteredCont: filteredContacts(state),
  isLoading:getLoading(state),
  
});
const mapDispatchToProps = (dispatch) => ({
  deleteCont: (id) => dispatch(operation.deleteContacts(id)),
  fetchCont: () => dispatch(operation.fetchContacts()),
});
ContactList.propTypes = {
  filteredNames: PropTypes.array,
  deleteItem: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
