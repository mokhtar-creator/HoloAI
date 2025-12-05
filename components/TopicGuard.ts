import { isAllowed } from "@/lib/topics"
export function enforceTopics(text){
  if(isAllowed(text)) return { ok:true }
  return { ok:false, message:"الموضوع خارج النطاق المتاح. اختر موضوعا من القائمة" }
}
