import { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "./firebase";

export default function App() {
  const [user, setUser] = useState("");
  console.log(auth);

  useEffect(() => {
    auth.onAuthStateChanged(({ userObj }) => {
      console.log({ userObj });
      setUser(userObj);
    });
  }, [user]);

  return (
    <div className="App">
      {user ? (
        <button onClick={() => auth.signOut()}>signOut</button>
      ) : (
        <button onClick={signInWithGoogle}>signIn</button>
      )}
    </div>
  );
}
