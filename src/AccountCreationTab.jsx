import { useState, useEffect } from "react";
import styles from "./assets/AccountCreationTab.module.css";

const AccountCreationTab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/users");
      const usersData = await response.json();
      setUsers(usersData);
    };
    fetchData();
  }, []);

  const validateForm = () => {
    let isValid = true;

    // Username validation
    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else if (!isValidUsername(username)) {
      setUsernameError("Username can only contain letters and numbers");
      isValid = false;
    } else if (isUsernameTaken(username))
      setUsernameError("Username already taken");
    else {
      setUsernameError("");
    }

    // Password validation
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else if (
      !hasUppercase(password) ||
      !hasLowercase(password) ||
      !hasSpecialCharacter(password)
    ) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and one special character"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const isValidUsername = (value) => /^[a-zA-Z0-9]+$/.test(value);
  const isUsernameTaken = (value) =>
    users.some((user) => user.username === value);

  const hasUppercase = (value) => /[A-Z]/.test(value);

  const hasLowercase = (value) => /[a-z]/.test(value);

  const hasSpecialCharacter = (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`Submitted: Username - ${username}, Password - ${password}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Account Creation</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && (
            <span style={{ color: "red" }}>{usernameError}</span>
          )}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className={styles.label}>{passwordError}</span>
          )}
        </label>
        <br />
        <button className={styles.button} type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AccountCreationTab;
