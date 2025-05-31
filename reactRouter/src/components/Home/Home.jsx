import {Link, NavLink} from "react-router";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 via-white to-orange-50 shadow-xl sm:mx-16 mx-2 sm:py-20 py-10">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-40 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl text-orange-800 drop-shadow">
                            Download Now
                            <span className="hidden sm:block text-4xl text-orange-600 font-semibold">HomePage</span>
                        </h2>
                        <Link
                            className="inline-flex items-center px-8 py-3 font-semibold bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-full shadow-lg hover:from-orange-700 hover:to-orange-500 transition-all duration-200"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>
                </div>
                <div className="absolute inset-0 flex justify-start items-end sm:my-20 sm:pt-1 pt-12 h-full pointer-events-none">
                    <img
                        className=" h-100 w-80 sm:w-96 rounded-xl shadow-2xl opacity-90 object-cover"
                        src="https://images.unsplash.com/photo-1711836830357-daff8bc5b560?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Elegant Home"
                    />
                </div>
            </aside>
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img
                    className="sm:w-96 w-48 rounded-xl shadow-lg object-cover"
                    src="https://images.unsplash.com/photo-1696643830146-44a8755f1905?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Modern Interior"
                />
            </div>
            <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-orange-700 drop-shadow-lg tracking-tight">
                Sweet HomePage
            </h1>
        </div>
    );
}
