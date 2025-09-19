"use client";

import { divisions, Division, Team, league } from "@/constants/nflTeams";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [selectedRounds, setSelectedRounds] = useState(1);
  const [draftSpeed, setDraftSpeed] = useState<"Low" | "Med" | "Fast">("Med");

  return (
    <main className="p-4 max-w-6xl mx-auto">
      {/* Top controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        {/* Left side: Rounds + Speed */}
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          {/* Rounds selector */}
          <div>
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

          {/* Speed selector */}
          <div>
            <span className="font-semibold mb-1 block">Speed</span>
            <div className="flex border-b border-gray-300">
              {(["Low", "Med", "Fast"] as const).map((speed) => (
                <button
                  key={speed}
                  className={`px-4 py-2 -mb-px font-medium border-b-2 transition ${
                    draftSpeed === speed
                      ? "border-gray-800 text-gray-800"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={() => setDraftSpeed(speed)}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side: NFL logo + League */}
        <div className="ml-auto flex flex-col items-center sm:items-end gap-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            League
            <span className="text-sm font-normal text-gray-600">
              (Draft for all 32 teams)
            </span>
          </h2>
          <button className="flex flex-col items-center border border-gray-300 rounded-lg p-2 hover:scale-105 transition">
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

      {/* Divisions */}
      {divisions.map((division: Division) => {
        const bgColor = division.name.includes("AFC")
          ? "bg-red-50"
          : "bg-blue-50";

        return (
          <section
            key={division.name}
            className={`mb-8 p-4 rounded-lg shadow-md ${bgColor}`}
          >
            <h2 className="text-lg font-semibold mb-3">{division.name}</h2>
            <div className="border-t border-gray-200 pt-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        );
      })}
    </main>
  );
}
