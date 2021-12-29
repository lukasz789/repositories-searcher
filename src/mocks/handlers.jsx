import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://api.github.com/search/repositories?q=user:test&sort=stars&order=desc&per_page=11&page=1`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          total_count: 13,
          items: [
            {
              id: 1,
              html_url: "#",
              name: "1",
              stargazers_count: 51,
            },
            {
              id: 2,
              html_url: "#",
              name: "2",
              stargazers_count: 50,
            },
            {
              id: 3,
              html_url: "#",
              name: "3",
              stargazers_count: 40,
            },
            {
              id: 4,
              html_url: "#",
              name: "4",
              stargazers_count: 38,
            },
            {
              id: 5,
              html_url: "#",
              name: "5",
              stargazers_count: 35,
            },
            {
              id: 6,
              html_url: "#",
              name: "6",
              stargazers_count: 30,
            },
            {
              id: 7,
              html_url: "#",
              name: "7",
              stargazers_count: 25,
            },
            {
              id: 8,
              html_url: "#",
              name: "8",
              stargazers_count: 20,
            },
            {
              id: 9,
              html_url: "#",
              name: "9",
              stargazers_count: 15,
            },
            {
              id: 10,
              html_url: "#",
              name: "10",
              stargazers_count: 14,
            },
            {
              id: 11,
              html_url: "#",
              name: "11",
              stargazers_count: 12,
            },
          ],
        })
      );
    }
  ),
];
