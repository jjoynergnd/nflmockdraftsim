import pkg from 'pg';
const { Pool } = pkg;
import type { QueryResult } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

export const query = async (
    text: string,
    params?: (string | number | null)[]
): Promise<QueryResult> => {
    const client = await pool.connect();
    try {
        const result: QueryResult = await client.query(text, params);
        return result;
    } finally {
        client.release();
    }
};
