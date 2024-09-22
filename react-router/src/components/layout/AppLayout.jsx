import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation, useLoaderData } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const [post, setPost] = React.useState([]);
  const loaderData = useLoaderData();

  React.useEffect(() => {
    setPost(loaderData);
  }, [loaderData]);

  // Use navigation.state to handle loading during route changes
  if (navigation.state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      {post.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      <Footer />
      <Outlet />
    </div>
  );
}

export default AppLayout;
