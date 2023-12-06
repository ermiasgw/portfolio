import { Octokit } from "@octokit/core";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!apiKey) {
    throw new Error(`Error environment ${apiKey}`);
  }

  const octokit = new Octokit({
    auth: "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",
  });

  const res = await octokit.request("GET /gists", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  let codearray: any[] = [];
  res.data.forEach((element: any) => {
    let key: any = Object.values(element.files)[0];
    codearray = codearray.concat({
      url: element.html_url,
      language: key.language,
      raw_url: key.raw_url,
      description: element.description,
      username: element.owner.login,
      avatar_url: element.owner.avatar_url,
    });
  });

  let codearray2 = [];

  for (const element of codearray) {
    const response = await fetch(element.raw_url);
    const code = await response.text();
    element["code"] = code;
    codearray2.push(element);
  }

  return Response.json(codearray2);
}
