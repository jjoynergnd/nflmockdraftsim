export type Team = {
  code: string;
  city: string;
  name: string;
  logo: string;
};

export type Division = {
  name: string;
  teams: Team[];
};


export const divisions: Division[] = [
  {
    name: "AFC East",
    teams: [
      { city: "Buffalo", name: "Bills", code: "BUF", logo: "/logos/nfl/bills.svg" },
      { city: "Miami", name: "Dolphins", code: "MIA", logo: "/logos/nfl/dolphins.svg" },
      { city: "New England", name: "Patriots", code: "NE", logo: "/logos/nfl/patriots.svg" },
      { city: "New York", name: "Jets", code: "NYJ", logo: "/logos/nfl/jets.svg" },
    ],
  },
  {
    name: "AFC North",
    teams: [
      { city: "Baltimore", name: "Ravens", code: "BAL", logo: "/logos/nfl/ravens.svg" },
      { city: "Cincinnati", name: "Bengals", code: "CIN", logo: "/logos/nfl/bengals.svg" },
      { city: "Cleveland", name: "Browns", code: "CLE", logo: "/logos/nfl/browns.svg" },
      { city: "Pittsburgh", name: "Steelers", code: "PIT", logo: "/logos/nfl/steelers.svg" },
    ],
  },
  {
    name: "AFC South",
    teams: [
      { city: "Houston", name: "Texans", code: "HOU", logo: "/logos/nfl/texans.svg" },
      { city: "Indianapolis", name: "Colts", code: "IND", logo: "/logos/nfl/colts.svg" },
      { city: "Jacksonville", name: "Jaguars", code: "JAX", logo: "/logos/nfl/jaguars.svg" },
      { city: "Tennessee", name: "Titans", code: "TEN", logo: "/logos/nfl/titans.svg" },
    ],
  },
  {
    name: "AFC West",
    teams: [
      { city: "Denver", name: "Broncos", code: "DEN", logo: "/logos/nfl/broncos.svg" },
      { city: "Kansas City", name: "Chiefs", code: "KC", logo: "/logos/nfl/chiefs.svg" },
      { city: "Las Vegas", name: "Raiders", code: "LV", logo: "/logos/nfl/raiders.svg" },
      { city: "Los Angeles", name: "Chargers", code: "LAC", logo: "/logos/nfl/chargers.svg" },
    ],
  },
  {
    name: "NFC East",
    teams: [
      { city: "Dallas", name: "Cowboys", code: "DAL", logo: "/logos/nfl/cowboys.svg" },
      { city: "New York", name: "Giants", code: "NYG", logo: "/logos/nfl/giants.svg" },
      { city: "Philadelphia", name: "Eagles", code: "PHI", logo: "/logos/nfl/eagles.svg" },
      { city: "Washington", name: "Commanders", code: "WAS", logo: "/logos/nfl/commanders.svg" },
    ],
  },
  {
    name: "NFC North",
    teams: [
      { city: "Chicago", name: "Bears", code: "CHI", logo: "/logos/nfl/bears.svg" },
      { city: "Detroit", name: "Lions", code: "DET", logo: "/logos/nfl/lions.svg" },
      { city: "Green Bay", name: "Packers", code: "GB", logo: "/logos/nfl/packers.svg" },
      { city: "Minnesota", name: "Vikings", code: "MIN", logo: "/logos/nfl/vikings.svg" },
    ],
  },
  {
    name: "NFC South",
    teams: [
      { city: "Atlanta", name: "Falcons", code: "ATL", logo: "/logos/nfl/falcons.svg" },
      { city: "Carolina", name: "Panthers", code: "CAR", logo: "/logos/nfl/panthers.svg" },
      { city: "New Orleans", name: "Saints", code: "NO", logo: "/logos/nfl/saints.svg" },
      { city: "Tampa Bay", name: "Buccaneers", code: "TB", logo: "/logos/nfl/buccaneers.svg" },
    ],
  },
  {
    name: "NFC West",
    teams: [
      { city: "Arizona", name: "Cardinals", code: "ARI", logo: "/logos/nfl/cardinals.svg" },
      { city: "Los Angeles", name: "Rams", code: "LAR", logo: "/logos/nfl/rams.svg" },
      { city: "San Francisco", name: "49ers", code: "SF", logo: "/logos/nfl/49ers.svg" },
      { city: "Seattle", name: "Seahawks", code: "SEA", logo: "/logos/nfl/seahawks.svg" },
    ],
  },
];