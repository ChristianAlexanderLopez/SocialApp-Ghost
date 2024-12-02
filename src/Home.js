import React, { useState } from "react";
import Footer from "./HomeComponents/Footer";
import LeftBar from "./HomeComponents/LeftBar";
import TopBar from "./HomeComponents/TopBar";
import Post from "./HomeComponents/Post";
import useUpload from "./HomeComponents/Posts/upload";

function Home({ username }) {
  const {
    uploadedImage,
    uploadedVideo,
    handlePhotoUpload,
    handleVideoUpload,
    clearUploads,
  } = useUpload();

  const [selectedGroup, setSelectedGroup] = useState("Look Around");

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/*TopBar*/}
      <div style={{ flexShrink: 0 }}>
        <TopBar
          onPhotoUpload={handlePhotoUpload}
          onVideoUpload={handleVideoUpload}
          username={username}
        />
      </div>
      <div style={{ display: "flex", flex: 1, padding: "10px" }}>
        <LeftBar onGroupChange={handleGroupChange} username={username} />
        <div style={{ flex: 1 }}>
          <Post
            uploadedImage={uploadedImage}
            uploadedVideo={uploadedVideo}
            clearUploads={clearUploads}
            selectedGroup={selectedGroup}
            username={username}
          />
        </div>
      </div>
      <Footer style={{ marginTop: "auto" }} />
    </div>
  );
}

export default Home;
