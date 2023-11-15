import { useState } from "react";

function Registration(props) {
  const { email, password } = props;
  const [edit, setEdit] = useState({
    email: email,
    password: password,
  });
  const handleChange = (e) => {};
  return (
    <div className="registration-container">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button>Зарегистрироваться</button>
    </div>
  );
}

export default Registration;
