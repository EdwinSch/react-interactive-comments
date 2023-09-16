import { nanoid } from "nanoid";

export const currentUser = {
  id: nanoid(),
  user: {
    name: "juliusomo",
    img: "/juliusomo.webp",
  },
};

export const commentsData = [
  {
    id: nanoid(),
    user: {
      name: "amyrobson",
      img: "/amyrobson.webp",
    },
    date: "1 month ago",
    content:
      "Retro williamsburg chartreuse big mood locavore helvetica polaroid tumeric sartorial marxism tumblr photo booth coloring book. Flannel four loko hexagon cronut distillery cloud bread af gluten-free literally.",
    points: 12,
    replies: [],
  },
  {
    id: nanoid(),
    user: {
      name: "maxblagun",
      img: "/maxblagun.webp",
    },
    date: "2 weeks ago",
    content:
      " Intelligentsia taiyaki hammock woke. XOXO quinoa you probably haven't heard of them tacos praxis taiyaki unicorn trust fund fam pug farm-to-table. Sus hot chicken iPhone jianbing meh pug echo park artisan bread.",
    points: 5,
    replies: [
      {
        id: nanoid(),
        user: {
          name: "ramsesmiron",
          img: "/ramsesmiron.webp",
        },
        date: "1 week ago",
        content:
          "Photo booth succulents cardigan hammock before they sold out selvage DSA schlitz yes plz twee, meditation fit. Vape subway tile salvia, pabst freegan aesthetic iceland palo pinterest.",
        points: 4,
      },
      {
        id: nanoid(),
        user: {
          name: "amyrobson",
          img: "/amyrobson.webp",
        },
        date: "2 weeks ago",
        content:
          "Pug art party freegan, fingerstache cray tilde 3 wolf moon typewriter viral vaporware occupy adaptogen fit shaman mumblecore. ",
        points: 1,
      },
      // {
      //   id: nanoid(),
      //   user: {
      //     name: "juliusomo",
      //     img: "/juliusomo.webp",
      //   },
      //   date: "2 days ago",
      //   replyTo: "ramsesmiron",
      //   content:
      //     "Kale chips pabst gastropub intelligentsia. Prism retro cliche affogato microdosing salvia banh mi bruh air plant. Tilde neutral milk hotel jawn umami letterpress mlkshk selfies.",
      //   points: 2,
      // },
    ],
  },
  // TEMP Test Item
  {
    id: nanoid(),
    user: {
      name: "juliusomo",
      img: "/juliusomo.webp",
    },
    date: "now",
    content:
      "Forage art party gentrify vexillologist JOMO next level. Next level hot chicken tumblr sus plaid, fanny pack artisan sriracha vape shoreditch YOLO succulents unicorn poutine iceland.",
    points: 3,
    replies: [],
  },
];
