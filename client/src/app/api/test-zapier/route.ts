import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (!process.env.ZAPIER_WEBHOOK_URL) {
      throw new Error("Missing ZAPIER_WEBHOOK_URL");
    }

    

    const zapierRes = await axios.post(process.env.ZAPIER_WEBHOOK_URL, body);

    return NextResponse.json({
      success: true,
      zapierStatus: zapierRes.status,
      dataSent: body,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: (err as Error).message,
    });
  }
}
