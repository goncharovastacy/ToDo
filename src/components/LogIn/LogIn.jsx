function LogIn(props) {
  const { email, password } = props;
  return (
    <div className="log-in-container">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} />
      <button>Войти</button>
    </div>
  );
}

export default LogIn;
