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
    // marginTop: '10vh',
  };

  // const style = {
  //   backgroundImage:
  //     "url('https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666336002_31-mykaleidoscope-ru-p-zloi-rik-i-morti-oboi-33.jpg')",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '700px',
  // };
  return (
    <div >
      <div style={formContainerStyle}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input name="name" type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  );
}
