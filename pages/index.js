import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className={`${geistSans.className} ${geistMono.className} bg-[#F2F2F2] min-h-screen`}>
      
      {/* Navbar */}
      <Navbar />

      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#0073BA] text-center mb-12">
          Hall of Players
        </h1>
        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {players.map((p) => (
            <Card key={p.Name} player={p} onClick={() => setSelectedPlayer(p)} />
          ))}
        </div>

      </main>
    </div>
  );
}
