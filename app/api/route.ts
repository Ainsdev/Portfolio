import { NextRequest } from "next/server"
import { GoogleSpreadsheet } from "google-spreadsheet"
import { google } from "googleapis"

type SheetForm = {
  email: string
  message: string
  focus: string
  phone: string
  name: string
  // Boolean Pricings
  basic: string
  premium: string
  //Checkbox personalization
  logo: string
  solution: string
  colors: string
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const {
    email,
    message,
    focus,
    phone,
    name,
    basic,
    premium,
    logo,
    solution,
    colors,
  } = body
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    })

    const sheets = google.sheets({
      auth,
      version: "v4",
    })
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            email,
            message,
            focus,
            phone,
            name,
            basic,
            premium,
            logo,
            solution,
            colors,
          ],
        ],
      },
    })
    return new Response(JSON.stringify({ message: "Success"}), {
      headers: { "content-type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    })
  }
}
