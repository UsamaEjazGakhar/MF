import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SOCIAL_KEYS = ["SOCIAL_TWITTER", "SOCIAL_FACEBOOK", "SOCIAL_INSTAGRAM", "SOCIAL_LINKEDIN", "SOCIAL_DISCORD"];

export async function GET() {
  try {
    const settings = await prisma.systemSetting.findMany({
      where: {
        key: {
          in: SOCIAL_KEYS,
        },
      },
    });

    const config = SOCIAL_KEYS.reduce((acc, key) => {
      const setting = settings.find((s) => s.key === key);
      acc[key] = setting ? setting.value : "";
      return acc;
    }, {} as Record<string, string>);

    return NextResponse.json({ success: true, data: config });
  } catch (error) {
    console.error("GET /api/settings/socials error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    for (const key of SOCIAL_KEYS) {
      if (body[key] !== undefined) {
        await prisma.systemSetting.upsert({
          where: { key },
          update: { value: body[key] },
          create: { key, value: body[key] },
        });
      }
    }

    return NextResponse.json({ success: true, message: "Social links updated successfully" });
  } catch (error) {
    console.error("POST /api/settings/socials error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
