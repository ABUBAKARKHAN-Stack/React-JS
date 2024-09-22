import { useLoaderData } from "react-router-dom";

const Github = ({ error}) => {
  const gitData = useLoaderData();

  if (error) return <h1>{error}</h1>;

  return (
    <div className="p-4 bg-gray-600 flex flex-col md:flex-row justify-center items-center gap-x-10 text-white text-3xl font-semibold tracking-widest">
      Github followers: {gitData.followers}
      <img src={gitData.avatar_url} alt="Profile" className="h-48 w-48" />
    </div>
  );
};

export default Github;

export const GitHubData = async () => {
  try {
    const res = await fetch('https://api.github.com/users/ABUBAKARKHAN-Stack');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
};
