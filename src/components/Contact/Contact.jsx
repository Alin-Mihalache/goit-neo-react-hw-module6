import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleClick = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfoContainer}>
        <p>
          <FaUser />
          <span className={css.contactInfoText}>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span className={css.contactInfoText}>{number}</span>
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => handleClick(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
