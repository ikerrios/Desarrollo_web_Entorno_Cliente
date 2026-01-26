import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.length < 7) {
      setUsernameError('Mínimo 7 caracteres');
    } else {
      setUsernameError('');
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@') || !value.includes('.')) {
      setEmailError('Email no válido');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('Mínimo 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usernameError || emailError || passwordError) {
      alert('Hay errores en el formulario');
      return;
    }

    alert('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label><br />
        <input type="text" value={username} onChange={handleUsername} />
        <p style={{ color: 'red' }}>{usernameError}</p>
      </div>

      <div>
        <label>Email</label><br />
        <input type="text" value={email} onChange={handleEmail} />
        <p style={{ color: 'red' }}>{emailError}</p>
      </div>

      <div>
        <label>Password</label><br />
        <input type="password" value={password} onChange={handlePassword} />
        <p style={{ color: 'red' }}>{passwordError}</p>
      </div>

      <button
        type="submit"
        disabled={usernameError || emailError || passwordError}
      >
        Submit
      </button>
    </form>
  );
}

export default App;
