const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: ``,
});

let createIssue = async (title, body, lables) => {
  await octokit.request("POST / repos/OrangeMakaron/OrangeMakaron/issues", {
    // ('POST / repos / 계정 이름 / repo이름 / issues)
    owner: "octocat",
    repo: "Lune",
    title: title,
    body: body,
    lables: lables,
  });
};

createIssue("Test Issue - OrangeMakaron", "Github Issue", ["bug"]); // (title, body, lables) labels는 배열형태로(['bug]) 처리
© 2021 GitHub, Inc.
