import { NextResponse } from "next/server";
import { query } from "@/db";

export async function GET() {
  try {
    const players = await query(`
      SELECT *
      FROM player_full_data
      ORDER BY rank
      LIMIT 100
    `);

    return NextResponse.json(players);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch players" }, { status: 500 });
  }
}
