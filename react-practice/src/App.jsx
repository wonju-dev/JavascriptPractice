import React from "react";

export default function App() {
  async function SignIn() {
    const options = {
      headers: new Headers({ "Access-Control-Allow-Origin": "*" }),
    };
    const response = await fetch("https://github.com/login/oauth/authorize", options);
  }

  return <button onClick={SignIn}>Start with Github</button>;
}
