import React from "react";
import LeftTrackCard from "./components/LeftTrackCard";
import CenterFolderCard from "./components/CenterFolderCard";
import RightAudioProfileCard from "./components/RightAudioProfileCard";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrapper">
      <LeftTrackCard />
      <CenterFolderCard />
      <RightAudioProfileCard />
    </div>
  );
}