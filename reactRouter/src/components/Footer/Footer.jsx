import {Link, NavLink} from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-gray-100 to-white border-t shadow-lg">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-12 lg:py-16">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="mb-8 md:mb-0 flex items-center space-x-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png"
                                className="h-14 w-auto rounded-lg shadow"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-12 sm:gap-10 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase tracking-widest">Resources</h2>
                            <ul className="space-y-2 text-gray-600 font-medium">
                                <li>
                                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"} transition`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({isActive}) => `${isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"} transition`}>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase tracking-widest">Follow us</h2>
                            <ul className="space-y-2 text-gray-600 font-medium">
                                <li>
                                    <a
                                        href="https://github.com/princesharma2004"
                                        className="hover:text-gray-900 transition"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-gray-900 transition">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase tracking-widest">Legal</h2>
                            <ul className="space-y-2 text-gray-600 font-medium">
                                <li>
                                    <Link to="#" className="hover:text-gray-900 transition">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-gray-900 transition">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-10 border-gray-200" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023&nbsp;
                        <a href="https://hiteshchoudhary.com/" className="hover:underline font-semibold text-gray-700">
                            hiteshchoudhary
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-6 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition" aria-label="Facebook">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-600 transition" aria-label="Discord">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg" alt="Discord" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="Twitter">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/princesharma2004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition" aria-label="GitHub">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition" aria-label="Dribbble">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dribbble.svg" alt="Dribbble" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
