export async function getLevelData() {
  const res = await fetch("/app/start");
  return res.json();
}