import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact_i) =>
    contact_i.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.conatactListContainer}>
      {visibleContacts &&
        visibleContacts.length > 0 &&
        visibleContacts.map((contact_i) => (
          <li key={contact_i.id}>
            <Contact data={contact_i} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
