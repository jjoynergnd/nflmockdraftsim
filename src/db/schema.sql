-- Teams
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL UNIQUE,
    conference TEXT,
    division TEXT
);

-- Players (prospects)
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    school TEXT,
    rank INT,         -- scouting rank
    overall_grade NUMERIC(4,2) -- composite score
);

-- Draft order (picks)
CREATE TABLE draft_order (
    id SERIAL PRIMARY KEY,
    pick_number INT NOT NULL,
    round INT NOT NULL,
    team_id INT REFERENCES teams(id),
    original_team_id INT REFERENCES teams(id) -- to track traded picks
);

-- User mock drafts
CREATE TABLE mock_drafts (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id TEXT, -- later replace with auth if needed
    picks JSONB   -- store all picks made in this draft
);
