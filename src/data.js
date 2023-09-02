import { nanoid } from "nanoid";

const commentsData = [
  {
    id: nanoid(),
    user: {
      name: "maxblagun",
      img: "/maxblagun.webp",
    },
    date: "2 weeks ago",
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    upvotePts: 5,
    replies: [],
  },
];

export default commentsData;
