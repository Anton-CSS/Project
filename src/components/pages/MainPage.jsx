import React from 'react'
import NavBar from "../ui/NavBar";
import Picture from "./Picture";
import Albums from "./Albums";

export default function MainPage({ user}) {
  return (
      <>
          <NavBar user={user}/>
          <Picture/>
          <Albums/>
      </>
  )
}
