import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
try {
const result = await sql"SELECT 1 AS database_connected";

if (Number(result[0]?.database_connected) !== 1) {
  throw new Error("Unexpected database response");
}

return NextResponse.json({
  ok: true,
  database: "connected"
});

} catch (error) {
console.error(
"Astravelle database health check failed:",
error instanceof Error ? error.message : "Unknown database error"
);

return NextResponse.json(
  {
    ok: false,
    database: "connection_failed"
  },
  { status: 503 }
);

}
}