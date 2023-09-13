import { useLogin } from "../hooks/useLogin";
const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>Profile</h1>
      <p>Hello {username}</p>
    </div>
  );
};

export default ProfilePage;
