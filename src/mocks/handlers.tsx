import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://api.github.com/search/repositories?q=user:test&sort=stars&order=desc&per_page=11&page=1`,
    (req, res, ctx) => {
      console.log("MOCK MOCK MOCK");
      return res(
        ctx.json({
          total_count: 2,
          items: [
            {
              id: 1,
              html_url: "#",
              name: "1",
              stargazers_count: 1,
            },
            {
              id: 2,
              html_url: "#",
              name: "2",
              stargazers_count: 2,
            },
          ],
        })
      );
    }
  ),
];
