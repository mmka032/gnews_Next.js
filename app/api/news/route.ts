// サーバーからのレスポンス
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { start } from "repl";

const BASE = "https://gnews.io/api/v4/top-headlines"

export async function GET(req: Request) {
    
    const {searchParams} = new URL(req.url)
    const q = searchParams.get("q") || "";
    const topic = searchParams.get("topic") || "";
    const lang = searchParams.get("lang") || "ja";
    const country = searchParams.get("country") || "ja";
    const max = searchParams.get("max") || "10";

const token = process.env.GNEWS_API_KEY;
if(!token){
    return NextResponse.json({ error: "missing api key" }, {status: 500})
}

const params = new URLSearchParams({
    lang, country, topic, max, token
})

if (q) params.get("q");
if (topic) params.set("topic", topic)

const url = `${BASE}?{params.toString()}`


try {
    const re = await fetch(url, {cache: "no-store"})
}

}