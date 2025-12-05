"use client"
import { useEffect, useRef, useState } from "react"

export default function Hologram(){
  const vref = useRef(null)
  const [playing,setPlaying] = useState(false)

  useEffect(()=>{ if(vref.current) vref.current.playbackRate = 1.0 },[])

  return (
    <div className="holo card">
      <video ref={vref} src="/avatar.mp4" autoPlay loop playsInline muted />
      <div style={{marginTop:8, display:"flex", gap:8}}>
        <button className="btn" onClick={()=>{ 
          if(playing){ vref.current?.pause(); setPlaying(false) } 
          else { vref.current?.play(); setPlaying(true) } 
        }}>{playing?"إيقاف":"تشغيل"}</button>
      </div>
    </div>
  )
}
