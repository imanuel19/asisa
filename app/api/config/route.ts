import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import config from "@/config/default/config"

export async function GET() {
  return NextResponse.json(config)
}

export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated (in a real app, use proper auth)
    // For demo purposes, we'll skip this check

    // Get the updated config from the request
    const updatedConfig = await request.json()

    // Convert to JSON string with pretty formatting
    const configJson = JSON.stringify(updatedConfig, null, 2)

    // Define the path to the config file
    const configFilePath = path.join(process.cwd(), "config", "config.json")

    // Ensure the config directory exists
    fs.mkdirSync(path.dirname(configFilePath), { recursive: true })

    // Save to local file system
    fs.writeFileSync(configFilePath, configJson, "utf8")

    return NextResponse.json({ success: true, message: "Config saved successfully" })
  } catch (error) {
    console.error("Error saving config:", error)
    return NextResponse.json({ error: "Failed to save configuration", details: String(error) }, { status: 500 })
  }
}