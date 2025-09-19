import { divisions, Division, Team } from "@/constants/nflTeams";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold text-center mb-6">Select Your Team</h1>

      {divisions.map((division: Division) => (
        <section key={division.name} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">{division.name}</h2>
          <div className="grid grid-cols-4 gap-4">
            {division.teams.map((team: Team) => (
              <button
                key={team.code}
                className="flex flex-col items-center hover:scale-105 transition"
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
    </main>
  );
}
