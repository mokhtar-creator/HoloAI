import { NextRequest, NextResponse } from "next/server"

export async function POST(req){
  const { messages } = await req.json()
  const r = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TEXT_MODEL || "gpt-4.1-mini",
      messages
    })
  })
  const data = await r.json()
  return NextResponse.json(data)
}
