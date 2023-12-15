import React from 'react';

export default function LoginPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.status === 200) {
      window.location.href = '/add';
    }
  };
  
  return (
      <div className="form__card">
        <h2 className="register">Войти</h2>
        <form onSubmit={handleSubmit} className="form__log">
          <input type="password" minLength="5" name="password" placeholder="Пароль" autoComplete="Пароль" />
          <input type="email" name="email" placeholder="Введите свою почту" />
          <button className="tombol-register" type="submit" >Войти</button>
        </form>
      </div>
  );
}
