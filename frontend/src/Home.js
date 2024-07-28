import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const username = location.state?.username || 'Guest';

  return (
    <div>Welcome to home page, {username}</div>
  );
}
