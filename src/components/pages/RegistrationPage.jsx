import React from 'react';

export default function RegistrationPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.status === 200) {
      window.location.href = '/';
    }
  };

  const formContainerStyle = {
    background: 'rgba(255, 255, 255, 0)',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',
  };


  return (
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2 className="register">Регистрация</h2>
          <p id="passwordError"></p>
          <input type="text" placeholder="Введите имя" autoComplete="username" />
          <input type="password" minLength="8" id="password" placeholder="Пароль" autoComplete="password" />
          <input type="email" id="fullName" name="email" placeholder="Введите свою почту" />
          <button className="tombol-register" type="submit" id="registerButton">Зарегистрироваться</button>
        </form>
      </div>

  );
}
