
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

export async function GET() {
  try {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not configured");
    }

    const sql = neon(databaseUrl);
    const result = await sql`SELECT 1 AS database_connected`;

    if (Number(result[0]?.database_connected) !== 1) {
      throw new Error("Unexpected database response");
    }

    return NextResponse.json({
      ok: true,
      database: "connected"
    });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        ok: false,
        database: "disconnected",
        error: "Database health check failed"
      },
      { status: 503 }
    );
  }
}
