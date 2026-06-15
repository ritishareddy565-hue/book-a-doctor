import React from "react";

function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 My Profile</h1>

      <p><b>Name:</b> Ritisha</p>
      <p><b>Email:</b> ritisha@gmail.com</p>
      <p><b>Phone:</b> 9876543210</p>

      <button
        style={{
          background: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Update Profile
      </button>
    </div>
  );
}

export default Profile;