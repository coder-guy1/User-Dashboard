import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./assets/UserDetailsTab.module.css";
// this provides the structure for each user details
const UserDetailsTab = ({ user }) => {
  const creationDate = new Date().toLocaleString();

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{creationDate}</td>
      <td>
        <Link to={`/report/${user.id}`}>
          <button className={styles.button}>View</button>
        </Link>
      </td>
    </tr>
  );
};

UserDetailsTab.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  GenerateReport: PropTypes.func.isRequired,
};

export default UserDetailsTab;
