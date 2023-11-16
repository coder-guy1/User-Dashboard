import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./assets/Report.module.css";
//Generates the report of the seleted user
const Report = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/users/${userId}`
        );
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleGoBack = () => {
    // Use navigate to go back to the previous page
    navigate(-1);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Report for User ID: {userId}</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>
            <strong>Username:</strong>
          </span>
          <span className={styles.value}>{userData.username}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>
            <strong>Email:</strong>
          </span>
          <span className={styles.value}>{userData.email}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>
            <strong>Phone:</strong>
          </span>
          <span className={styles.value}>{userData.phone}</span>
        </li>
      </ul>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Report;
