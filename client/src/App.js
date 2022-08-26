import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import AssetCreateForm from "./components/AssetCreateForm";
import User from "./pages/User";
import Library from "./pages/Library";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/libraries">
            <Library />
          </Route>
          <Route path="/new">
            <AssetCreateForm user={user} />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </main>
    </>
  );
}