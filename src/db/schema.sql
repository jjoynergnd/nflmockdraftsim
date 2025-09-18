-- Example SQL schema
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(20),
    team VARCHAR(50)
);
