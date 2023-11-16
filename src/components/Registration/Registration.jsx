import { useState } from "react";

function Registration(props) {
  // const { email, password } = props;
  const [edit, setEdit] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && !isValidEmail(value) && value !== "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEdit({ ...edit, [name]: value });
  };
  const register = () => {
    console.log(edit);
    setEdit({
      email: "",
      password: "",
    });
  };
  return (
    <div className="registration-container">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={edit.email}
        onChange={handleChange}
      />
      {emailError && (
        <span className="span-validate">Неправильный формат email</span>
      )}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={edit.password}
        onChange={handleChange}
      />
      <button onClick={register}>Зарегистрироваться</button>
    </div>
  );
}

export default Registration;
