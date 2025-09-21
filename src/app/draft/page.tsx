"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Play, Pause, RotateCcw, Handshake, Mail, Bot } from "lucide-react";

export default function DraftPage() {
  const searchParams = useSearchParams();
  const team = searchParams.get("team") || "NYG";
  const rounds = Number(searchParams.get("rounds")) || 7;
  const speed = searchParams.get("speed") || "Med";

  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<"Drafted" | "Available" | "MyPicks">("Drafted");
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for sketching
  const teamNeeds = ["QB", "WR1", "CB"];
  const drafted = [
    { round: 1, pick: 1, team: "CHI", player: "Player A (QB)" },
    { round: 1, pick: 2, team: "NYG", player: "Player B (WR)" },
  ];
  const availablePlayers = [
    "Player C (OT)",
    "Player D (RB)",
    "Player E (CB)",
    "Player F (EDGE)",
  ];
  const myPicks = drafted.filter((pick) => pick.team === team);

  return (
    <main className="p-4 max-w-7xl mx-auto min-h-screen flex flex-col">
      {/* Top control bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <button
            className="p-2 border rounded-lg hover:bg-gray-100 transition"
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={18} /> : <Pause size={18} />}
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
            <RotateCcw size={18} />
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
            <Handshake size={18} />
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
            <Mail size={18} />
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
            <Bot size={18} />
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Rounds: {rounds} | Speed: {speed}
        </div>
      </div>

      {/* Team + needs */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">{team}</h1>
        <div className="flex gap-2 flex-wrap">
          {teamNeeds.map((need) => (
            <span
              key={need}
              className="px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50"
            >
              {need}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-4 border-b border-gray-200">
        {["Drafted", "Available", "MyPicks"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 font-medium transition -mb-px border-b-2 ${
              activeTab === tab
                ? "border-gray-800 text-gray-800"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab as typeof activeTab)}
          >
            {tab === "MyPicks" ? "My Picks" : tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
        {activeTab === "Drafted" && (
          <div>
            {drafted.map((pick) => (
              <div
                key={`${pick.round}-${pick.pick}`}
                className="flex justify-between py-2 border-b border-gray-100 text-sm"
              >
                <span>
                  Round {pick.round}, Pick {pick.pick} — {pick.team}
                </span>
                <span className="font-medium">{pick.player}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Available" && (
          <div>
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            {availablePlayers
              .filter((p) =>
                p.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((player) => (
                <div
                  key={player}
                  className="py-2 border-b border-gray-100 text-sm hover:bg-gray-50 cursor-pointer"
                >
                  {player}
                </div>
              ))}
          </div>
        )}

        {activeTab === "MyPicks" && (
          <div>
            {myPicks.length === 0 ? (
              <p className="text-gray-500 text-sm">No picks yet.</p>
            ) : (
              myPicks.map((pick) => (
                <div
                  key={`${pick.round}-${pick.pick}`}
                  className="flex justify-between py-2 border-b border-gray-100 text-sm"
                >
                  <span>
                    Round {pick.round}, Pick {pick.pick}
                  </span>
                  <span className="font-medium">{pick.player}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
