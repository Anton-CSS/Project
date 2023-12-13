import React from 'react';

export default function NavBar({ user }) {
  const style = {
    background: 'rgba(255, 255, 255, 0)',
    width: '0px',
  };

  return (
    <nav
      className="navbar navbar-expand bg-body-tertiary"
      style={{
        ...style,
        backgroundColor: 'black',
        color: 'green',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid" style={{ padding: '10px' }}>
        <a
          className="navbar-brand"
          href="/"
          style={{ color: 'green', fontSize: '24px', borderBottom: '2px solid green' }}
        >
         Main
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: 'green', border: '1px solid white' }}
        >
          <span className="navbar-toggler-icon" style={{ color: 'black' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'flex-end' }}>
          <div className="navbar-nav">
          <a className="nav-link" href="/" style={{ color: 'green', borderBottom: '2px solid green' }}>
                  Main
                </a>
            {user ? null : (
              <>
                <a className="nav-link" href="/auth/reg" style={{ color: 'green', borderBottom: '2px solid green' }}>
                  Registration
                </a>
                <a className="nav-link" href="/auth/login" style={{ color: 'green', borderBottom: '2px solid green' }}>
                  Login
                </a>
              </>
            )}
            {user && (
              <a className="nav-link" href="/auth/logout" style={{ color: 'green', borderBottom: '2px solid green' }}>
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
