import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import PageNav from "../components/PageNav";
// import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./register.module.css";

export default function Register() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordconfirm] = useState("");
  const [address, setAddress] = useState(""); // New input field for address
  const [phoneno, setPhoneno] = useState(""); // New input field for phone number
  const [age, setAge] = useState(""); // New input field for age
  const [gender, setGender] = useState(""); // New input field for gender
  const [preferedrole, setPreferedrole] = useState(""); // New input field for preferred role
  const [photo, setPhoto] = useState(null);
  //   const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    const response = await fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        passwordConfirm,
        address,
        phoneno,
        age,
        gender,
        preferedrole,

        photo,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "ok") {
      console.log(data);
      history.push("/login");
    }
  }

  return (
    <main className={styles.register}>
      {/* <PageNav /> */}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            onChange={(e) => setPasswordconfirm(e.target.value)}
            value={passwordConfirm}
          />
        </div>
        {/* New input fields */}
        <div className={styles.row}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="phoneno">Phone Number</label>
          <input
            type="tel"
            id="phoneno"
            onChange={(e) => setPhoneno(e.target.value)}
            value={phoneno}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.row}>
          <label htmlFor="preferedrole">Preferred Role</label>
          <input
            type="text"
            id="preferedrole"
            onChange={(e) => setPreferedrole(e.target.value)}
            value={preferedrole}
          />
        </div>
        {/* <div className={styles.row}>
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            accept="photo/*"
            onChange={(e) => {
              const photo = event.target.files[0];
              setPhoto(photo);
            }}
          />
        </div> */}

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </main>
  );
}
