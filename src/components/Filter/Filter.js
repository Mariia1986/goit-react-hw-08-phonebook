import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/actions/userActions";
import { filterContact} from '../../redux/selectors'

class Filter extends Component {
  handleFilter = (e) => {
    this.props.filterAct(e.currentTarget.value);
  };

  render() {
    return (
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          name="filter"
          value={this.props.filter}
          onChange={this.handleFilter}
          type="text"
        />
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  
  filter: filterContact(state),
});
const mapDispatchToProps = {
  filterAct: filterContacts,
};

Filter.propTypes = {
  filter: PropTypes.string,
  search: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
