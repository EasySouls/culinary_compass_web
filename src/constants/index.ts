import githubLogo from "public/github-logo-90.svg";
import xLogo from "public/x-logo-90.svg";
import facebookLogo from "public/facebook-logo-100.svg";

export const socials = [
  {
    title: "Github",
    url: "https://github.com/EasySouls/culinary_compass_web",
    image: githubLogo,
  },
  { title: "X", url: "https://twitter.com/CulinaryComp", image: xLogo },
  { title: "Facebook", url: "/", image: facebookLogo },
];

export const about = {
  title: "About",
  links: [
    { title: "How it works", url: "/" },
    { title: "Featured", url: "/" },
    { title: "Partnership", url: "/" },
  ],
};

export const kitchenTypes = [
  "american",
  "british",
  "canadian",
  "chinese",
  "croatian",
  "dutch",
  "egyptian",
  "filipino",
  "french",
  "greek",
  "hungarian",
  "indian",
  "irish",
  "italian",
  "jamaican",
  "japanese",
  "kenyan",
  "malaysian",
  "mexican",
  "moroccan",
  "polish",
  "portuguese",
  "russian",
  "spanish",
  "thai",
  "tunisian",
  "turkish",
  "unknown",
  "vietnamese",
];

export const categories = [
  { title: "Chicken", value: "chicken" },
  { title: "Dessert", value: "dessert" },
  { title: "Lamb", value: "lamb" },
  { title: "Miscellaneous", value: "miscellaneous" },
  { title: "Pasta", value: "pasta" },
  { title: "Pork", value: "pork" },
  { title: "Seafood", value: "seafood" },
  { title: "Starter", value: "starter" },
  { title: "Vegan", value: "vegan" },
  { title: "Vegetarian", value: "vegetarian" },
  { title: "Breakfast", value: "breakfast" },
  { title: "Goat", value: "goat" },
  { title: "Beef", value: "beef" },
] as const;

export const tags = [
  "chicken",
  "dessert",
  "lamb",
  "miscellaneous",
  "pasta",
  "pork",
  "seafood",
  "starter",
  "vegan",
  "vegetarian",
  "breakfast",
  "goat",
];

export const DATABASE_NAME = "compassDB";
