import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StreamChat } from "stream-chat";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios"; // Ensure axios is imported for handling HTTP requests

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    navigate.push('/');
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
  };

  useEffect(() => {
    if (!user) {
      navigate.push('/');
      return;
    }

    // Initialize Stream Chat client
    const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_CHAT_ID);

    const connectUser = async () => {
      try {
        // Connect the Stream user
        await client.connectUser(
          {
            id: user.uid,
            name: user.displayName || user.email,
            image: user.photoURL || 'https://i.imgur.com/fR9Jz14.png', // Placeholder or user photo
          },
          process.env.REACT_APP_STREAM_CHAT_SECRET // Use the secret from environment variable
        );

        setLoading(false);
      } catch (error) {
        console.error("Error connecting to Stream Chat:", error);
        let formData = new FormData();
        formData.append('email', user.email);
        formData.append('username', user.email);
        formData.append('secret', user.uid);

        // Optionally add user profile image
        getFile(user.photoURL)
          .then((avatar) => {
            formData.append('avatar', avatar, avatar.name);

            axios.post(
              'https://getstream.io/accounts/login/', // Update with actual API endpoint if needed
              formData,
              { headers: { "private-key": process.env.REACT_APP_STREAM_CHAT_KEY } }
            )
            .then(() => setLoading(false))
            .catch((error) => console.error("Error creating user:", error));
          });
      }
    };

    connectUser();

    // Cleanup Stream client on unmount
    return () => client.disconnectUser();
  }, [user, navigate]);

  if (!user || loading) return 'Loading...';

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Unichat
        </div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      {/* Stream Chat Component */}
      <StreamChat
        height="calc(100vh - 66px)"
        projectID={process.env.REACT_APP_STREAM_CHAT_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
