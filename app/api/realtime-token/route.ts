import { NextResponse } from "next/server"

export async function GET() {
  const key = process.env.OPENAI_API_KEY!
  const model = process.env.OPENAI_REALTIME_MODEL || "gpt-4o-realtime-preview"

  const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      voice: "verse",
      modalities: ["text", "audio"]
    })
  })

  const json = await r.json()
  return NextResponse.json(json)
}
