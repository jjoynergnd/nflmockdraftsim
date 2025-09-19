import { divisions } from "@/constants/nflTeams";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold text-center mb-6">
        Select Your Team
      </h1>

      {divisions.map((division) => (
        <section key={division.name} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">{division.name}</h2>
          <div className="grid grid-cols-4 gap-4">
            {division.teams.map((team) => (
              <button
                key={team.code}
                className="flex flex-col items-center hover:scale-105 transition"
              >
                <img
                  src={team.logo}
                  alt={`${team.city} ${team.name}`}
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
