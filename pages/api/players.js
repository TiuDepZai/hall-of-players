import { google } from "googleapis";

export default async function handler(req, res) {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT), // store JSON key in env
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = "Player!B12:I"; // Adjust based on your sheet

  const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
  const rows = response.data.values;

  if (!rows.length) {
    return res.status(404).json({ error: "No data found." });
  }

  // Convert rows to objects
  const [header, ...data] = rows;
  const players = data.map((row) =>
    header.reduce((acc, key, i) => ({ ...acc, [key]: row[i] }), {})
  );

  res.status(200).json(players);
}
