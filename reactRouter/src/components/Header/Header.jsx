import {Link, NavLink} from "react-router";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-b border-gray-100 px-6 py-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png"
                            className="h-10 w-auto rounded-lg shadow transition-transform duration-300 hover:scale-105"
                            alt="Elegant Logo"
                        />
                    </Link>
                    <ul className="hidden lg:flex space-x-8 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 px-3 py-2 rounded-md ${
                                        isActive
                                            ? "text-orange-700 bg-orange-50"
                                            : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 px-3 py-2 rounded-md ${
                                        isActive
                                            ? "text-orange-700 bg-orange-50"
                                            : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 px-3 py-2 rounded-md ${
                                        isActive
                                            ? "text-orange-700 bg-orange-50"
                                            : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 px-3 py-2 rounded-md ${
                                        isActive
                                            ? "text-orange-700 bg-orange-50"
                                            : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                                    }`
                                }
                            >
                                Github
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 transition-colors duration-200 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 transition-colors duration-200 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
