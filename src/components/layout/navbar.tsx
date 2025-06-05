import Link from "next/link";

const Navbar = () => (
    <header className="bg-black border-b-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div>
                <Link
                    className="text-xl font-bold font-title text-orange-500"
                    href="/"
                >
                    Riftbound Deck Builder
                </Link>
            </div>

            <nav className="flex gap-4">
                <a
                    href="/cards"
                    className="font-medium font-title text-white hover:text-orange-500"
                >
                    Cards
                </a>
                <a
                    href="/deck-builder"
                    className="font-medium font-title text-white hover:text-orange-500"
                >
                    Deck Builder
                </a>
            </nav>
        </div>
    </header>
);

export default Navbar;
