import { NextRequest } from "next/server"
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
  const noSecureKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmNkGRZOKYTtHU\nsSNTNp93GipURcL9TICFG+qAvejgNfkH38jwJik9uqM0AxpvUM/LbIFQYB3MLph7\nlS3iq5x3MwepBMNEQCemhZEbE9Xra2/9/c+pnJUDTIbxPXVSCQrZjj4RCXp7AqHE\nnj47ZMG4rEJPHCyNDFZZOopNGCo9/7dgX7CoTK1jqSje8V9dRYdfc9IlfaeqfVAR\nDRvnk1H1QuPGBHKJFUaSdh5QpFtQr8dy6/ferVAk4ZmK8cQpLlZA3Cdxi8mXd9t1\ndiZs6cgI6H86S01zPu2ohNeRCbhqDAV9KXznDegt0L6nC2DCUUGduZjoq3T1h/Wp\ne0NGVpDRAgMBAAECggEAE40cR1sDoIDdA9TWX+pz9ZGZWxJdrmf6Ui4Hdp9gLkeL\nBJcZTs5eWYmDuxGGYYOy/a3ExEyaFLOCcj8JB7nCDO9uvj32LigRwe/CMtoxdqDL\nqqfZbo0hpiKxWN0u2LiBkze9K0nfI2sa1kL69QeUFgIFRsL8ppbF7XcKX6kxBtvF\n5rEBYcl7px5351qXFrIIt2oXwLb0lWjnsSwlRu45PRJAq0c086PwG2T1hik1orj5\na88jYYUoLm9Sfntucm+9Dj8V8ABrgQ/G+ZB6KPo7uSe7D4D9Q1j9nRlQwDaPD02h\n/LfFBG6H21MiAyCAth+87gbAgaA6h4o18Sp3Y+oD5QKBgQDgOGfPwkiAiPEYIA+/\nUFgLSP2/PnhvtEy72YihtTsSfPuAKeq7ddvHiPAswshGQOYv0jwo2b8r6K9pABsI\ni18DiCz5sZcR2sZrVMQ9dU4M3qfWdw2q6dyNF0keli9g/Q5eVNdT4bmPJYYdXHoY\nhKwGavAKROt1AdvLnk21+enMuwKBgQC9xRQA0XcPYQIEy/LpbjkNZAqS/ekMYXfn\n/3fG54s3bHlGqwPSzw1njFO8Yl27mguJ2oQzSQ4Y9T9GodI4DQzf0oxv5asUNIf+\nR5EClrHKhwU+OUsXhFyIrfXkKnZ55nFF+rwJM2/mmkYiwqnchtIgaEu/cVlh0sWm\n5JwmLN0l4wKBgQDKQzeqW9kpUd8i4zExZJm3vGViUkk0gxHBVw+AyEp8eBAr4iQk\nbMIQsj/uMNuXPE4pj13DgAGK64DomDbKs2bHed0QdZoQeikJg1LvGdWJmIUQ2x6S\nMhpJkFreY55jwINopuIDghjwv2nHLLfbTDseIvNcYCWCzGVoveneIY49pwKBgQCk\nbudFSjsjLUiFhX9HO0XeT4hGFBNisfYnJZrQ1AMylCCF1ltqyBRyXAqWmpljnDhR\nS/HvSmcXwzH/7unrvYshShx8PQK/cEFCWRrSpmcJ+XLWluh1STCxEiOVgCHGwKH4\nJCnYwyQ8KgOJzSlIN95NTHIOQZZUiEDRuxd+kLNTRwKBgAYnce+K1kYAUSiQCs4W\nAgYuaSVDu7hsmtEs8Q/qnXoNWjTrgu/JhQlz9eNQD9Swan9wpyRa8H9ooc4rw1P/\npRoYav8DcqiiBRvfSrDoGls4C35oRgCR9V9OZUpPVDlCb2cCVEFpTQfwBgA2O6na\nMxHQHvO24qS0Hdhnvrkbpk5w\n-----END PRIVATE KEY-----\n"
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
        // private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY ? process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
        private_key: noSecureKey.replace(/\\n/g, "\n")
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
    return new Response(JSON.stringify({ message: "Exitoso!!"}), {
      headers: { "content-type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    })
  }
}
