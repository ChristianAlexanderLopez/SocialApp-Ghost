import React from "react";
import Header from "./ProfileComponents/Header";
import MainContent from "./ProfileComponents/MainComponent";
import Footer from "./ProfileComponents/Footer";
import Submit from "./ProfileComponents/Submit";

function Profile({ username, email, onUpdateUsername }) {
  return (
    <div>
      <Header />
      <MainContent
        username={username}
        email={email}
        onUpdateUsername={onUpdateUsername}
      />
      <Footer />
      <Submit />
    </div>
  );
}

export default Profile;
