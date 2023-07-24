import { saveApiSupport } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const json = Object.fromEntries(data.entries());

    const res = await saveApiSupport({ data: json });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
