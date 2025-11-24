export default async function handler(req, res) {
  const url = "https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=e732bf85fe3cfa8c18adb2df66d0be7c";

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error", details: err });
  }
}
