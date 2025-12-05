"use client"
import { useState, useRef } from "react"
import { enforceTopics } from "./TopicGuard"

export default function ChatHUD(){
  const [connected,setConnected] = useState(false)
  const [log,setLog] = useState([])
  const audioRef = useRef(null)

  async function sendText(text){
    const ok = enforceTopics(text)
    if(!ok.ok){ setLog(l=>[...l, ok.message]); return }
    const r = await fetch("/api/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ messages:[{ role:"user", content:text }] })
    })
    const j = await r.json()
    const content = j.choices?.[0]?.message?.content || ""
    setLog(l=>[...l, "انت: "+text, "المساعد: "+content])
  }

  return (
    <div className="card" style={{flex:1}}>
      <form onSubmit={(e)=>{ e.preventDefault(); 
        const t=e.target.q.value;
        if(t) sendText(t); 
        e.target.reset()
      }}>
        <input name="q" className="input" placeholder="اكتب رسالة" />
      </form>
      <div style={{marginTop:12, whiteSpace:"pre-wrap"}}>{log.join("\n")}</div>
    </div>
  )
}
