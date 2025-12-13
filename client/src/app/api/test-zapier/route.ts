import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(_req: NextRequest) {
  try {
    const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("Missing ZAPIER_WEBHOOK_URL");
    }

    const payload = {
      username: "Test User",
      email: "test@example.com",
      message: "Hello from backend",
      createdAt: new Date().toISOString(),
    };

    const zapierRes = await axios.post(webhookUrl, payload);

    return NextResponse.json({
      success: true,
      zapierStatus: zapierRes.status,
      dataSent: payload,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: (err as Error).message,
      },
      { status: 500 }
    );
  }
}
