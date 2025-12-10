export default function Navbar() {
    return (
        <nav className="w-full bg-[#0073BA] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <a href="/" className="text-2xl font-bold flex items-center gap-2">
                    <span>🏓</span>
                    Hall of Players
                </a>

                {/* Ping Pong Path */}
                <div className="relative w-40 h-4 overflow-visible">
                    <div className="absolute top-1/2 -translate-y-1/2 flex gap-2 animate-pingpong">
                        <div className="w-3 h-3 bg-white rounded-full opacity-100"></div>
                    </div>
                </div>

                {/* About Button */}
                <a
                    href="/about"
                    className="
                        px-4 py-2 
                        rounded-md 
                        hover:bg-white hover:text-[#0073BA]
                        transition-all duration-200
                        font-medium
                    "
                >
                    About
                </a>

            </div>
        </nav>
    );
}
