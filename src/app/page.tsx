"use client";

import { divisions, Division, Team, league } from "@/constants/nflTeams";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [selectedRounds, setSelectedRounds] = useState(1);
  const [draftSpeed, setDraftSpeed] = useState<"Low" | "Med" | "Fast">("Med");

  return (
    <main className="p-4 max-w-7xl mx-auto min-h-screen flex flex-col">
      {/* Top controls: sticky at top */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 gap-4 sticky top-0 bg-white z-10 p-2 border-b border-gray-200">
        {/* Rounds - left third */}
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <span className="font-semibold mb-1 block">Rounds</span>
          <div className="flex border-b border-gray-300">
            {[1, 2, 3, 4, 5, 6, 7].map((round) => (
              <button
                key={round}
                className={`px-4 py-2 -mb-px font-medium border-b-2 transition ${
                  selectedRounds === round
                    ? "border-gray-800 text-gray-800"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
                onClick={() => setSelectedRounds(round)}
              >
                {round}
              </button>
            ))}
          </div>
        </div>

        {/* Speed - center third */}
        <div className="flex-1 flex flex-col items-center">
          <span className="font-semibold mb-1 block">Speed</span>
          <div className="flex gap-2">
            {(["Low", "Med", "Fast"] as const).map((speed) => (
              <button
                key={speed}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
                  draftSpeed === speed
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setDraftSpeed(speed)}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>

        {/* League - right third */}
        <div className="flex-1 flex flex-col items-center sm:items-end">
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-3 shadow-sm">
            <span className="text-sm font-semibold text-center mb-2 leading-tight">
              League (Draft for all 32 teams)
            </span>
            <button className="flex flex-col items-center border border-gray-200 rounded-lg p-2 hover:scale-105 transition">
              <Image
                src={league.logo}
                alt={league.name}
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <span className="text-sm mt-1">{league.name}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Divisions container - scrollable */}
      <div className="flex-1 overflow-auto">
        {divisions.map((division: Division) => (
          <section
            key={division.name}
            className="mb-6 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-3">{division.name}</h2>
            <div className="border-t border-gray-200 pt-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center">
              {division.teams.map((team: Team) => (
                <button
                  key={team.code}
                  className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:scale-105 hover:shadow-sm transition"
                >
                  <Image
                    src={team.logo}
                    alt={`${team.city} ${team.name}`}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                  <span className="text-xs mt-1">{team.name}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* START DRAFT button */}
      <div className="flex justify-center mt-4">
        <button className="bg-green-200 hover:bg-green-300 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-md transition">
          START DRAFT
        </button>
      </div>
    </main>
  );
}
