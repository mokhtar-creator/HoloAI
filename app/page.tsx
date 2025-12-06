import Hologram from "../components/Hologram";
import ChatHUD from "../components/ChatHUD";
export default function Page(){
  return (
    <main className="container">
      <h1 style={{fontSize:28, marginBottom:12}}>HoloAI</h1>
      <div className="row">
        <Hologram />
        <ChatHUD />
      </div>
      <p style={{opacity:.7, marginTop:16}}>ضع avatar.mp4 داخل مجلد public</p>
    </main>
  )
}
