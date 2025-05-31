import { useParams } from 'react-router';

export default function User()
{
    const { userId } = useParams();

  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="bg-gradient-to-r from-rose-400 via-rose-300 to-rose-200 shadow-xl rounded-2xl px-10 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">
          User
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-rose-700 bg-white bg-opacity-70 rounded px-4 py-2 inline-block shadow">
          ID: {userId}
        </p>
      </div>
    </div>
  );
}

