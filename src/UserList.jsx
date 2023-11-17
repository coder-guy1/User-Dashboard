import { useEffect, useState } from "react";
import UserDetailsTab from "./UserDetailsTab";

import styles from "./assets/UserList.module.css";
//this will fetch the data from api and use UserDetails tab to display the details of each user using map function
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users"); //api from where data is fetched
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <h2>{searchTerm ? "User Details" : "Search"}</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <div>Loading...</div>
      ) : filteredUsers.length === 0 ? (
        <div>No User Found</div>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tableCell}>ID</th>
                <th className={styles.tableCell}>Username</th>
                <th className={styles.tableCell}>Email</th>
                <th className={styles.tableCell}>Phone</th>
                <th className={styles.tableCell}>Creation Date</th>
                <th className={styles.tableCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <UserDetailsTab key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default UserList;
