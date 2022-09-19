import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  // useAuthState で認証状態を管理, この状態を利用して表示するものを変更する.
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        // ログインしていたら.
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        // ログインしていなかったら.
        <SignInButton />
      )}
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

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>サインアウト</button>;
}

function UserInfo() {
  return <div>ユーザー情報</div>;
}
