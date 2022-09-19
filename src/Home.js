import React from "react";

function Home() {
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
    // firebase とグールグル
  };

  return <button onClick={signInWithGoogle}>グーグルでサインイン</button>;
}
