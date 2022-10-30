import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagepath: "/images/vanilla.png" },
      ])
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imagePath: "/images/cherries.png" },
        { name: "M&Ms", imagepath: "/images/m-and-ms.png" },
        { name: "Hot fudge", imagepath: "/images/hot-fudge.png" },
      ])
    );
  }),
];
