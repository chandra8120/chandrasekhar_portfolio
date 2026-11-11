import MusicApp from "../../assets/MusicApp.jpg";
import Shopping from "../../assets/Shoppin.jpg";
import Cloud from "../../assets/Cloud.jpg";
import Shoe from "../../assets/Shoes.jpg";

const works = [
  {
    id: "audiomack",
    PName: "AUDIOMACK",
    image: MusicApp,
    alt: "Music browsing interface displayed on a phone beside earphones",
    category: "MUSIC & DISCOVERY",
    description: "Moving music forward. A showcase of music discovery, browsing, and the listening experience.",
    tags: ["Music", "Discovery", "Mobile interface"],
  },
  {
    id: "wisket",
    PName: "WISKET",
    image: Shopping,
    alt: "Shopping collection interface on a phone alongside a cart and shopping bags",
    category: "SHOPPING & COLLECTIONS",
    description: "Taking add to favorites to a whole new level. A look at product collections and the online shopping experience.",
    tags: ["E-commerce", "Collections", "Product discovery"],
  },
  {
    id: "cloud",
    PName: "Cloud",
    image: Cloud,
    alt: "Cloud illustration connected to devices and digital services",
    category: "CLOUD & CONNECTIVITY",
    description: "Connected services, smarter possibilities. Exploring the role of cloud technology in digital experiences.",
    tags: ["Cloud", "Connectivity", "Digital services"],
  },
  {
    id: "cookout",
    PName: "THE COOKOUT",
    image: Shoe,
    alt: "A pair of sneakers in a clean product presentation",
    category: "PRODUCT & LIFESTYLE",
    description: "A different perspective on everyday products. A visual showcase with the product at the center of the experience.",
    tags: ["Product showcase", "Lifestyle", "Visual presentation"],
  },
];

export default works;
