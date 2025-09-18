import { NextResponse } from "next/server";
import { query } from "@/db";

export async function GET() {
  try {
    const result = await query("SELECT * FROM teams ORDER BY id ASC");
    return NextResponse.json(result.rows);
  } catch (err: any) {
    console.error("Error fetching teams:", err);
    return NextResponse.json({ error: "Failed to fetch teams" }, { status: 500 });
  }
}
