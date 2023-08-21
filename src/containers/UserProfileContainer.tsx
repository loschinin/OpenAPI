import React from 'react';
import { UserProfileCard } from '../components/UserProfileCard';

export const UserProfileContainer: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const handleEdit = () => {
    // Handle edit logic here
  };

  return (
    <UserProfileCard name={user.name} email={user.email} onEdit={handleEdit} />
  );
};
