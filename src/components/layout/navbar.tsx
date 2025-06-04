import Link from "next/link";

const Navbar = () => (
    <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div>
                <Link className="text-xl font-bold text-indigo-600" href="/">
                    Riftbound Deck Builder
                </Link>
            </div>

            <nav className="flex gap-4">
                <a
                    href="/cards"
                    className="font-medium text-gray-700 hover:text-indigo-600"
                >
                    Cards
                </a>
                <a
                    href="/deck-builder"
                    className="font-medium text-gray-700 hover:text-indigo-600"
                >
                    Deck Builder
                </a>
            </nav>
        </div>
    </header>
);

export default Navbar;
