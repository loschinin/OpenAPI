import { FC } from 'react';
import { Button } from 'UI/Button';

type UserProfileProps = {
  name: string;
  email: string;
  onEdit: () => void;
};

export const UserProfileCard: FC<UserProfileProps> = ({
  name,
  email,
  onEdit,
}) => (
  <div>
    <h3>{name}</h3>
    <p>{email}</p>
    <Button onClick={onEdit} label="Edit Profile" />
  </div>
);
