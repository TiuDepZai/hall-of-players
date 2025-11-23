export default function Navbar(){
    return (
        <nav className="w-full bg-[#0073BA] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <span>🏓</span>
                    Hall of Players
                </h1>

                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-30"></div>
                </div>
            </div>
        </nav>
    )
}