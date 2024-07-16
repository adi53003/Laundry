import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Home() {
  const { user } = useContext(UserContext);
  if(user == "User not found")
  {
    return(
      <div>
        <h1>{user}</h1>
      </div>
    )
  }
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          {/* Add more user info as needed */}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
