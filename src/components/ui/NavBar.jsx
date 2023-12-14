import React from 'react';

export default function NavBar({ user }) {
  return (
      <nav className="nav">
          <a className="nav__link" href="/"> Главная</a>
          {user ? null : (
              <>
                  <a className="nav__link" href="/auth/reg">Зарегистрироваться</a>
                  <a className="nav__link" href="/auth/login">Войти</a>
              </>
          )}
          {user && (
              <>
                  <a className="nav__link" href="/auth/logout" >
                      Выйти
                  </a>
                  <a className="nav__link" href="/add" >
                      Добавить
                  </a>
              </>
          )}
      </nav>
  );
}
