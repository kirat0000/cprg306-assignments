"use client";
import React from 'react';

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";


function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle GitHub sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500 p-6">
      {!user ? (
        <button
          onClick={handleSignIn}
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-xl font-semibold">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={handleSignOut}
            className="px-6 py-2 mb-4 text-lg font-semibold text-white bg-red-500 rounded-md shadow hover:bg-red-700 transition duration-150 ease-in-out"
          >
            Logout
          </button>
          <a
            href="./week-8/shopping-list"
            className="inline-block px-6 py-2 text-lg font-semibold text-black-500 bg-white rounded-md shadow hover:bg-orange-200 transition duration-150 ease-in-out"
          >
            Go to Shopping List
          </a>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
