export interface NFLTeam {
  code: string;
  city: string;
  name: string;
  logo: string;
}

export interface Division {
  name: string;
  teams: NFLTeam[];
}

export const divisions: Division[] = [
  {
    name: "AFC East",
    teams: [
      { code: "BUF", city: "Buffalo", name: "Bills", logo: "/logos/nfl/Buffalo Bills.svg" },
      { code: "MIA", city: "Miami", name: "Dolphins", logo: "/logos/nfl/Miami Dolphins.svg" },
      { code: "NE", city: "New England", name: "Patriots", logo: "/logos/nfl/New England Patriots.svg" },
      { code: "NYJ", city: "New York", name: "Jets", logo: "/logos/nfl/New York Jets.svg" },
    ],
  },
  {
    name: "AFC North",
    teams: [
      { code: "BAL", city: "Baltimore", name: "Ravens", logo: "/logos/nfl/Baltimore Ravens.svg" },
      { code: "CIN", city: "Cincinnati", name: "Bengals", logo: "/logos/nfl/Cincinnati Bengals.svg" },
      { code: "CLE", city: "Cleveland", name: "Browns", logo: "/logos/nfl/Cleveland Browns.svg" },
      { code: "PIT", city: "Pittsburgh", name: "Steelers", logo: "/logos/nfl/Pittsburgh Steelers.svg" },
    ],
  },
  {
    name: "AFC South",
    teams: [
      { code: "HOU", city: "Houston", name: "Texans", logo: "/logos/nfl/Houston Texans.svg" },
      { code: "IND", city: "Indianapolis", name: "Colts", logo: "/logos/nfl/Indianapolis Colts.svg" },
      { code: "JAX", city: "Jacksonville", name: "Jaguars", logo: "/logos/nfl/Jacksonville Jaguars.svg" },
      { code: "TEN", city: "Tennessee", name: "Titans", logo: "/logos/nfl/Tennessee Titans.svg" },
    ],
  },
  {
    name: "AFC West",
    teams: [
      { code: "DEN", city: "Denver", name: "Broncos", logo: "/logos/nfl/Denver Broncos.svg" },
      { code: "KC", city: "Kansas City", name: "Chiefs", logo: "/logos/nfl/Kansas City Chiefs.svg" },
      { code: "LV", city: "Las Vegas", name: "Raiders", logo: "/logos/nfl/Las Vegas Raiders.svg" },
      { code: "LAC", city: "Los Angeles", name: "Chargers", logo: "/logos/nfl/Los Angeles Chargers.svg" },
    ],
  },
  {
    name: "NFC East",
    teams: [
      { code: "DAL", city: "Dallas", name: "Cowboys", logo: "/logos/nfl/Dallas Cowboys.svg" },
      { code: "NYG", city: "New York", name: "Giants", logo: "/logos/nfl/New York Giants.svg" },
      { code: "PHI", city: "Philadelphia", name: "Eagles", logo: "/logos/nfl/Philadelphia Eagles.svg" },
      { code: "WSH", city: "Washington", name: "Commanders", logo: "/logos/nfl/Washington Commanders.svg" },
    ],
  },
  {
    name: "NFC North",
    teams: [
      { code: "CHI", city: "Chicago", name: "Bears", logo: "/logos/nfl/Chicago Bears.svg" },
      { code: "DET", city: "Detroit", name: "Lions", logo: "/logos/nfl/Detroit Lions.svg" },
      { code: "GB", city: "Green Bay", name: "Packers", logo: "/logos/nfl/Green Bay Packers.svg" },
      { code: "MIN", city: "Minnesota", name: "Vikings", logo: "/logos/nfl/Minnesota Vikings.svg" },
    ],
  },
  {
    name: "NFC South",
    teams: [
      { code: "ATL", city: "Atlanta", name: "Falcons", logo: "/logos/nfl/Atlanta Falcons.svg" },
      { code: "CAR", city: "Carolina", name: "Panthers", logo: "/logos/nfl/Carolina Panthers.svg" },
      { code: "NO", city: "New Orleans", name: "Saints", logo: "/logos/nfl/New Orleans Saints.svg" },
      { code: "TB", city: "Tampa Bay", name: "Buccaneers", logo: "/logos/nfl/Tampa Bay Buccaneers.svg" },
    ],
  },
  {
    name: "NFC West",
    teams: [
      { code: "ARI", city: "Arizona", name: "Cardinals", logo: "/logos/nfl/Arizona Cardinals.svg" },
      { code: "LAR", city: "Los Angeles", name: "Rams", logo: "/logos/nfl/Los Angeles Rams.svg" },
      { code: "SF", city: "San Francisco", name: "49ers", logo: "/logos/nfl/San Francisco 49ers.svg" },
      { code: "SEA", city: "Seattle", name: "Seahawks", logo: "/logos/nfl/Seattle Seahawks.svg" },
    ],
  },
];
