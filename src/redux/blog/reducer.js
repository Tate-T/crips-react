const allPostsData = [
  {
    id: 1,
    category: "Article",
    title: "Exactly What To Wear To Every Type Of Wedding This Summer",
    excerpt:
      'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.',
    date: "21 January 2018 by guido",
    author: "guido"
  },
  {
    id: 2,
    category: "TIPS",
    title: "Exactly What To Wear To Every Type Of Wedding This Summer",
    excerpt: "When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. ",
    date: "21 January 2018 by guido",
    author: "elena"
  },
  {
    id: 3,
    category: "TIPS",
    title: "Exactly What To Wear To Every Type Of Wedding This Summer",
    excerpt:
      'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.',
    date: "21 January 2018 by guido",
    author: "mark"
  },
  {
    id: 4,
    category: "Article",
    title: "Exactly What To Wear To Every Type Of Wedding This Summer",
    excerpt: "When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. ",
    date: "21 January 2018 by guido",
    author: "guido"
  }
];



export const blogReducer = (state = { posts: allPostsData }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state
      };
    default:
      return state;
  }
};
