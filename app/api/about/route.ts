import { Octokit } from "@octokit/core";
import { NextResponse } from "next/server";

export async function GET() {
  /**
   *
   *
   *
   * *
   */ const apiKey = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({
    auth: apiKey,
  });

  const res = await octokit.request("GET /gists", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return JSON.stringify({
    url: "string",
    forks_url: "string",
    commits_url: "string",
    id: "string",
    node_id: "string",
    git_pull_url: "string",
    git_push_url: "string",
    html_url: "string",
    files: {
      string: {
        filename: "string",
        type: "string",
        language: "string",
        raw_url: "string",
        size: 2,
      },
    },
  });
}
