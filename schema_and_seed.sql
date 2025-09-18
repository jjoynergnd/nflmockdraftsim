-- Drop tables if they exist
DROP TABLE IF EXISTS mock_drafts;
DROP TABLE IF EXISTS draft_order;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;

-- Create tables
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL UNIQUE,
    conference TEXT,
    division TEXT
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    school TEXT,
    rank INT,
    overall_grade NUMERIC(4,2)
);

CREATE TABLE draft_order (
    id SERIAL PRIMARY KEY,
    pick_number INT NOT NULL,
    round INT NOT NULL,
    team_id INT REFERENCES teams(id),
    original_team_id INT REFERENCES teams(id)
);

CREATE TABLE mock_drafts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id TEXT,
    picks JSONB
);

-- Seed 32 NFL teams
INSERT INTO teams (name, abbreviation, conference, division) VALUES
('Arizona Cardinals','ARI','NFC','West'),
('Atlanta Falcons','ATL','NFC','South'),
('Baltimore Ravens','BAL','AFC','North'),
('Buffalo Bills','BUF','AFC','East'),
('Carolina Panthers','CAR','NFC','South'),
('Chicago Bears','CHI','NFC','North'),
('Cincinnati Bengals','CIN','AFC','North'),
('Cleveland Browns','CLE','AFC','North'),
('Dallas Cowboys','DAL','NFC','East'),
('Denver Broncos','DEN','AFC','West'),
('Detroit Lions','DET','NFC','North'),
('Green Bay Packers','GB','NFC','North'),
('Houston Texans','HOU','AFC','South'),
('Indianapolis Colts','IND','AFC','South'),
('Jacksonville Jaguars','JAX','AFC','South'),
('Kansas City Chiefs','KC','AFC','West'),
('Las Vegas Raiders','LV','AFC','West'),
('Los Angeles Chargers','LAC','AFC','West'),
('Los Angeles Rams','LAR','NFC','West'),
('Miami Dolphins','MIA','AFC','East'),
('Minnesota Vikings','MIN','NFC','North'),
('New England Patriots','NE','AFC','East'),
('New Orleans Saints','NO','NFC','South'),
('New York Giants','NYG','NFC','East'),
('New York Jets','NYJ','AFC','East'),
('Philadelphia Eagles','PHI','NFC','East'),
('Pittsburgh Steelers','PIT','AFC','North'),
('San Francisco 49ers','SF','NFC','West'),
('Seattle Seahawks','SEA','NFC','West'),
('Tampa Bay Buccaneers','TB','NFC','South'),
('Tennessee Titans','TEN','AFC','South'),
('Washington Commanders','WAS','NFC','East');
