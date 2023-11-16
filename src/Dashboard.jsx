import { useState } from "react";

import AccountCreationTab from "./AccountCreationTab";
import UserList from "./UserList";
import styles from "./assets/Dashboard.module.css";
//To display the selected tabs oi have used activeTabs state to know which tab is selected
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("userDetails");
  console.log("jiixhh");
  return (
    <div>
      <h1 className={styles.header}>User Management Dashboard</h1>
      <div className={styles.buttoncontainer}>
        <button
          className={styles.button}
          onClick={() => setActiveTab("userDetails")}
        >
          User Details
        </button>
        <button
          className={styles.button}
          onClick={() => setActiveTab("accountCreation")}
        >
          Account Creation
        </button>
      </div>
      {activeTab === "userDetails" ? <UserList /> : <AccountCreationTab />}
    </div>
  );
};

export default Dashboard;
