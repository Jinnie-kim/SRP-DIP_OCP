import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

function Auth() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userInputs;

  const saveUserInputs = ({ target }) => {
    const { name, value } = target;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { signin, signup, logout } = useAuth();

  const signinRequest = () => {
    signin(email, password);
  };
  const signupRequest = () => {
    signup(email, password);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          email
          <input value={email} name="email" onChange={saveUserInputs} />
        </label>
      </div>
      <div>
        <label>
          password
          <input value={password} name="password" onChange={saveUserInputs} />
        </label>
      </div>
      <button onClick={signinRequest}>signin</button>
      <button onClick={signupRequest}>signup</button>
      <button onClick={logout}>logout</button>
    </form>
  );
}

export default Auth;
