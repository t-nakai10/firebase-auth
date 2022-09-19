import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <SignInButton />
    </div>
  );
}

export default Home;

// コンポーネントではなく一旦同ファイルに作成.
function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return <button onClick={signInWithGoogle}>グーグルでサインイン</button>;
}
