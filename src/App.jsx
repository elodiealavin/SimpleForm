import { useState } from "react";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");

  const [result, setResult] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    if (confirmPassWord !== passWord) {
      alert("Les mots de passe ne sont pas identiques");
    } else {
      setResult(true);
    }
  };

  return (
    <>
      {!result ? (
        <form onSubmit={handleSubmit}>
          <header>(h2)Create account(h2)</header>
          <input
            placeholder="userName"
            type="text"
            name="userName"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            value={userName}
          />

          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />

          <input
            placeholder="passWord"
            type="passWord"
            name="passWord"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={passWord}
          />

          <input
            placeholder="confirmPassWord"
            type="passWord"
            name="confirmPassWord"
            onChange={(event) => {
              setConfirmPassWord(event.target.value);
            }}
            valut={confirmPassWord}
          />

          <input type="submit" value="Register" />
        </form>
      ) : (
        <div>
          <p>setUserName</p>
          <p>setEmail</p>
          <p>setPassWord</p>
        </div>
      )}

      <footer>
        Made with React at Le Reacteur by Elodie - Promo Phoenix2023
      </footer>
    </>
  );
}

export default App;
