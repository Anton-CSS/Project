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
      window.location.href = '/add';
    }
  };
  

  return (
      <div className="form__card">
        <form onSubmit={handleSubmit} className="form__reg">
          <h2 className="register">Регистрация</h2>
          <p id="passwordError"></p>
          <input type="text" placeholder="Введите имя" name="name" autoComplete="username" />
          <input type="password" minLength="5" name="password" placeholder="Пароль" autoComplete="password" />
          <input type="email" name="email" placeholder="Введите свою почту" />
          <button className="tombol-register" type="submit" id="registerButton">Зарегистрироваться</button>
        </form>
      </div>

  );
}
