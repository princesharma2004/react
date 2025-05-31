import { useLoaderData } from 'react-router'

export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
return (
    <div className="flex flex-col items-center m-10 p-10 bg-gradient-to-br from-indigo-700 via-purple-800 to-gray-900 rounded-2xl shadow-2xl border border-indigo-500/30">
        <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-44 h-44 rounded-full border-4 border-indigo-400 shadow-lg mb-6 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg tracking-wide">
            Prince Sharma
        </h2>
        <p className="text-xl text-indigo-200 mb-2 italic">
            @{data.login}
        </p>
        <p className="text-lg text-gray-300 mb-4">
            Public Repositories:{" "}
            <span className="font-semibold text-indigo-200">{data.public_repos}</span>
        </p>
        <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow transition-colors duration-200 font-medium"
        >
            View Profile
        </a>
    </div>
)
}
