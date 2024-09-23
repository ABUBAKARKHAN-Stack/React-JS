import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col gap-y-8 justify-center items-center bg-zinc-900 text-white px-6">
      {/* Animation */}
      <iframe
        src="https://lottie.host/embed/945ce6a4-a78e-4b12-b386-872c1a8baddd/HF89HlnX9K.json"
        className="scale-150 mb-4"
        title="Error Animation"
      ></iframe>

      {/* Error Message */}
      <div className="text-center flex flex-col gap-y-4">
        <h1 className="text-4xl font-extrabold text-red-500">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-400">
          {error.data || "Please try again later or contact support."}
        </p>
      </div>

      {/* Go Back Button */}
      <Link
        to="/"
        className="px-8 py-4 rounded bg-red-500 hover:bg-red-600 text-white font-semibold text-sm shadow-lg transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
