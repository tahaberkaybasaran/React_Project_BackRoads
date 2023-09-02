import tourImage1 from "../images/tour-1.jpeg";
import tourImage2 from "../images/tour-2.jpeg";
import tourImage3 from "../images/tour-3.jpeg";
import tourImage4 from "../images/tour-4.jpeg";

export const links = [
  { id: 1, href: "#home", contentText: "Home" },
  { id: 2, href: "#about", contentText: "About" },
  { id: 3, href: "#services", contentText: "Services" },
  { id: 4, href: "#tours", contentText: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    serviceTitle: "saving money",
    serviceText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresofficia. Test - 1",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    serviceTitle: "endless hiking",
    serviceText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresofficia. Test - 2",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    serviceTitle: "amazing comfort",
    serviceText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioresofficia. Test - 3",
  },
];

export const tours = [
  {
    id: 1,
    img: tourImage1,
    toursDate: "august 26th, 2020",
    toursTitle: "Tibet Adventure",
    toursText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod xercitationem fugit, qui corporis.",
    toursCountry: "china",
    toursDuration: 6,
    toursPrice: 2100,
  },
  {
    id: 2,
    img: tourImage2,
    toursDate: "october 1th, 2020",
    toursTitle: "Best of Java",
    toursText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod xercitationem fugit, qui corporis.",
    toursCountry: "indonesia",
    toursDuration: 11,
    toursPrice: 1400,
  },
  {
    id: 3,
    img: tourImage3,
    toursDate: "september 15th, 2020",
    toursTitle: "explore hong kong",
    toursText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod xercitationem fugit, qui corporis.",
    toursCountry: "hong kong",
    toursDuration: 8,
    toursPrice: 5000,
  },
  {
    id: 4,
    img: tourImage4,
    toursDate: "december 5th, 2019",
    toursTitle: "kenya highlights",
    toursText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod xercitationem fugit, qui corporis.",
    toursCountry: "kenya",
    toursDuration: 20,
    toursPrice: 3300,
  },
];
