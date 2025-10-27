import React, { useState } from "react";
import axios from "axios";

export default function Sample() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    // Simple validation
    if (!username || !email || !password) {
      setMessage("⚠️ Please fill in all fields");
      return;
    }

    try {
      console.log(formData);

      // 🔗 Replace with your actual deployed backend URL
      const res = await axios.post(
        "https://ssv-lyart.vercel.app/register",
        formData
      );

      if (res.data.success) {
        setMessage("✅ Registration successful!");
      } else {
        setMessage("❌ " + res.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registration Form</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    background: "#007bff",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
};
