import { Octokit } from "@octokit/core";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({
    auth: apiKey,
  });

  const res = await octokit.request("GET /gists", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return NextResponse.json(res);
}
