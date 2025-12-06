export const allowedTopics = process.env.ALLOWED_TOPICS?.split("|").map(s=>s.trim().toLowerCase()) ?? []
export function isAllowed(text){
  if(allowedTopics.length===0) return true
  const t = text.toLowerCase()
  return allowedTopics.some(k=> t.includes(k))
}
