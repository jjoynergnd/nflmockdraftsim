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
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Round Selector */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Rounds:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((round) => (
              <button
                key={round}
                className={`px-3 py-1 rounded-full border ${
                  selectedRounds === round
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-white text-gray-800 border-gray-300"
                } hover:bg-gray-200 transition`}
                onClick={() => setSelectedRounds(round)}
              >
                {round}
              </button>
            ))}
          </div>
        </div>

        {/* Draft Speed Selector */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Speed:</span>
          {(["Low", "Med", "Fast"] as const).map((speed) => (
            <button
              key={speed}
              className={`px-3 py-1 rounded-full border ${
                draftSpeed === speed
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white text-gray-800 border-gray-300"
              } hover:bg-gray-200 transition`}
              onClick={() => setDraftSpeed(speed)}
            >
              {speed}
            </button>
          ))}
        </div>
      </div>

      {/* League selection */}
      <section className="mb-8 text-center">
        <h2 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2">
          League
          <span className="text-sm font-normal text-gray-600">
            (Draft for all 32 teams)
          </span>
        </h2>
        <button className="flex flex-col items-center mx-auto hover:scale-105 transition border border-gray-300 rounded-lg p-2">
          <Image
            src={league.logo}
            alt={league.name}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="text-sm mt-1">{league.name}</span>
        </button>
      </section>

      {/* Divisions */}
      {divisions.map((division: Division) => {
        // Determine division border color: AFC = red, NFC = blue
        const borderColor =
          division.name.includes("AFC") ? "border-red-500" : "border-blue-500";

        return (
          <section
            key={division.name}
            className={`mb-8 p-3 border ${borderColor} rounded-lg`}
          >
            <h2 className="text-lg font-semibold mb-3">{division.name}</h2>
            <div className="grid grid-cols-4 gap-4">
              {division.teams.map((team: Team) => (
                <button
                  key={team.code}
                  className="flex flex-col items-center p-2 border border-gray-200 rounded-lg hover:scale-105 transition"
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
