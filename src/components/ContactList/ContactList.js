import React, { Component } from "react";
import s from "./ContactList.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ContactForm from "../ContactForm";
import EditContactForm from './EditContactForm.js/EditContactForm'

class ContactList extends Component {
state={
  editform: false,
  idContact:null,

}

  componentDidMount() {
    this.props.fetchCont();
  }
  onClickDelete = (id) => {
    this.props.deleteCont(id);
  };
  onClickEdit = (id) => {
  this.setState({editform:!this.state.editform,
                   idContact: id      })

  }

  render() {
    const { filteredCont, isLoading } = this.props;

    return (
      <>
        {isLoading && <h2>Обновляем информацию...</h2>}
        {
          <ul className={s.contaktList}>
            {filteredCont.map(({ id, name, number }) => (
              <li className={s.contaktListItem} key={id}>
                {this.state.editform && id === this.state.idContact ?  <EditContactForm id={id} name={name} number={number} editReset={this.onClickEdit}/>: <p className={s.contaktListName}>
                  {name} : {number}
                </p>}
                
                {/* <ContactForm/>   */}
                <button
                  className={s.contaktListButton}
                  type="button"
                  onClick={() => this.onClickDelete(id)}
                >
                  <DeleteIcon color="action" />
                </button>
                <button
                  className={s.contaktListButton}
                  type="button"
                  onClick={()=>this.onClickEdit(id)}
                >
                  <EditIcon color="action" fontSize="small" />
                </button>
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}

export default ContactList;
