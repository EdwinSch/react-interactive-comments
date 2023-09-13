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
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
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
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    points: 5,
    replies: [
      {
        id: nanoid(),
        user: {
          name: "ramsesmiron",
          img: "/ramsesmiron.webp",
        },
        date: "1 week ago",
        replyTo: "maxblagun",
        content:
          "If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
        points: 4,
      },
      {
        id: nanoid(),
        user: {
          name: "juliusomo",
          img: "/juliusomo.webp",
        },
        date: "2 days ago",
        replyTo: "ramsesmiron",
        content:
          "I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        points: 2,
      },
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
