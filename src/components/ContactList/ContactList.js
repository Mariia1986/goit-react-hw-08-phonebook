import React, { Component } from "react";
import s from "./ContactList.module.css";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchCont();
  }
  onClickDelete = (id) => {
    this.props.deleteCont(id);
  };

  render() {
    const { filteredCont, isLoading } = this.props;

    return (
      <>
        {isLoading && <h2>Загружаем...</h2>}
        {
          <ul className={s.contaktList}>
            {filteredCont.map((el) => (
              <li className={s.contaktListItem} key={el.id}>
                <p className={s.contaktListName}>
                  {el.name} : {el.number}
                </p>
                <button
                  className={s.contaktListButton}
                  type="button"
                  onClick={() => this.onClickDelete(el.id)}
                >
                  Delete
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
