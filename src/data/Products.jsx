import blackTea from "../assets/products/black.png";
import whiteTea from "../assets/products/white.png";
import yellowTea from "../assets/products/yellow.png";
import blackAndWhiteTea from "../assets/products/blackandwhite.png";
import blueTea from "../assets/products/blue.png";
import blueberryTea from "../assets/products/blueberry.png";
import brownTea from "../assets/products/brown.png";
import chamomileTea from "../assets/products/chamomile.png";
import coralTea from "../assets/products/coral.png";
import ginsengTea from "../assets/products/ginseng.png";
import indigoTea from "../assets/products/indigo.png";
import limegreenTea from "../assets/products/limegreen.png";
import magentaTea from "../assets/products/magenta.png";
import neemTea from "../assets/products/neem.png";
import orangeTea from "../assets/products/orange.png";
import puerhTea from "../assets/products/puerh.png";
import redTea from "../assets/products/red.png";
import turquoiseTea from "../assets/products/turquoise.png";

const Products = [
  {
    id: 1,
    brandName: "TEA OF ASSAM",
    image: turquoiseTea,
    name: "Turquoise Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "turquoise-tea",
    desc: "Tropical Oasis: Escape to a turquoise paradise with this vibrant tea. Imagine butterfly pea flowers dancing in sunlight, infusing the water with a mesmerizing blue hue that shifts to turquoise as you add a squeeze of lime. This naturally caffeine-free beverage offers a refreshing, cooling taste with hints of mint and tropical fruits, transporting your senses to a beach hammock swaying in the breeze.",
  },

  {
    id: 2,
    brandName: "TEA OF ASSAM",
    image: redTea,
    name: "Red Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "red-tea",
    desc: "Naturally Sweet Sunshine: Bask in the warmth of naturally sweet red tea. Unlike black tea, rooibos is caffeine-free, yet offers a smooth, slightly nutty flavor with hints of honey and vanilla. Imagine cozy evenings by the fireplace, curled up with a good book and a steaming cup of this comforting ruby-red brew. Enjoy it hot or iced for a versatile and delicious treat.",
  },

  {
    id: 3,
    brandName: "TEA OF ASSAM",
    image: orangeTea,
    name: "Orange Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "orange-tea",
    desc: "Sunshine in Every Sip: Start your day with a burst of sunshine in the form of orange tea. The invigorating taste of orange peel infuses this tea with a refreshing citrus flavor, perfect for uplifting your mood and brightening your day.",
  },

  {
    id: 4,
    brandName: "TEA OF ASSAM",
    image: blackAndWhiteTea,
    name: "Black and White Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: true,
    slug: "black-and-white-tea",
    desc: "Harmony in Every Sip: Find perfect balance with this exquisite blend of bold black tea and delicate white tea. Each cup offers a captivating dance of contrasting flavors, from the deep richness of black tea to the light, elegant notes of white tea. A true journey for the senses.",
  },

  {
    id: 5,
    brandName: "TEA OF ASSAM",
    image: ginsengTea,
    name: "Ginseng Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: true,
    slug: "ginseng-tea",
    desc: "Awaken Your Energy: Embrace the revitalizing spirit of ginseng tea. Traditionally used for its energizing properties, this slightly bitter, earthy tea offers a potential boost and can be enjoyed for its unique flavor and potential health benefits.",
  },

  {
    id: 6,
    brandName: "TEA OF ASSAM",
    image: whiteTea,
    name: "White Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "white-tea",
    desc: "Embrace Delicate Serenity: Immerse yourself in the subtle sweetness and fragrant charm of white tea. This minimally processed wonder offers a smooth, elegant taste, inviting you to savor its pure essence and find a moment of tranquility.",
  },
  {
    id: 7,
    brandName: "TEA OF ASSAM",
    image: magentaTea,
    name: "Magenta Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "magenta-tea",
    desc: "Unleash a Berry Burst: Indulge in the vibrant sweetness of magenta tea. Hibiscus, cranberry, and other berries create this stunning brew with a sweet, tart flavor and a beautiful magenta hue, promising a delicious and visually stunning experience.",
  },

  {
    id: 8,
    brandName: "TEA OF ASSAM",
    image: blackTea,
    name: "Black Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "black-tea",
    desc: "Unleash Your Inner Strength: Steep yourself in the robust richness of black tea, a classic full-bodied brew with hints of spice and malt. Experience its invigorating aroma and bold flavor, perfect for conquering your day or unwinding after a long journey.",
  },

  {
    id: 9,
    brandName: "TEA OF ASSAM",
    image: limegreenTea,
    name: "Limegreen Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: true,
    slug: "limegreen-tea",
    desc: "Invigorate Your Senses: Embrace the vibrant zest of limegreen tea. Infused with lime peel and other citrus fruits, this tea offers a refreshing, zesty flavor that awakens your senses and quenches your thirst, perfect for a lively start to your day.",
  },

  {
    id: 10,
    brandName: "TEA OF ASSAM",
    image: indigoTea,
    name: "Indigo Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "indigo-tea",
    desc: "Explore Earthy Allure: Unravel the mystery of indigo tea, a unique blend of butterfly pea flower tea with other botanicals. This deep indigo brew presents an earthy, floral flavor profile, enticing your senses with its visual and gustatory allure.",
  },

  {
    id: 11,
    brandName: "TEA OF ASSAM",
    image: yellowTea,
    name: "Yellow Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "yellow-tea",
    desc: "Discover Rare Refinement: Indulge in the unique world of yellow tea. This rare gem undergoes a controlled wilting process, resulting in a mellow flavor with hints of honey and floral notes, sure to tantalize your taste buds and pique your curiosity.",
  },

  {
    id: 12,
    brandName: "TEA OF ASSAM",
    image: brownTea,
    name: "Brown Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "brown-tea",
    desc: "Embrace Natural Goodness: Discover the naturally nutty goodness of brown rice tea. This caffeine-free beverage offers a toasted, nutty flavor and is rich in vitamins and minerals, making it a healthy and satisfying alternative to conventional teas.",
  },
  {
    id: 13,
    brandName: "TEA OF ASSAM",
    image: puerhTea,
    name: "Pu-erh Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: true,
    slug: "puerh-tea",
    desc: "Embark on a Timeless Journey: Savor the aged elegance of puerh tea. This sophisticated brew offers a complex, earthy flavor with hints of chocolate and spice, rewarding patient palates with its depth and character.",
  },
  {
    id: 14,
    brandName: "TEA OF ASSAM",
    image: neemTea,
    name: "Neem Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "neem-tea",
    desc: "Embrace Natural Wellness: Discover the potential healing power of neem tea. Known for its traditional medicinal uses, this bitter, earthy tea offers a unique flavor and is considered beneficial for various health purposes.",
  },
  {
    id: 15,
    brandName: "TEA OF ASSAM",
    image: blueberryTea,
    name: "Blueberry Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: true,
    slug: "blueberry-tea",
    desc: "Antioxidant Oasis: Awaken your senses and nourish your body with the bursting flavor of blueberry tea. Packed with antioxidants and naturally sweet, this refreshing infusion is a guilt-free indulgence your taste buds and wellness will thank you for.",
  },
  {
    id: 16,
    brandName: "TEA OF ASSAM",
    image: blueTea,
    name: "Blue Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "blue-tea",
    desc: "Transform Your Tea Time: Witness the magic of butterfly pea flower tea as it steeps into a vibrant blue masterpiece. This naturally caffeine-free wonder boasts a slightly sweet, earthy taste, perfect for enjoying hot or iced for a visually stunning and flavorful experience.",
  },
  {
    id: 17,
    brandName: "TEA OF ASSAM",
    image: coralTea,
    name: "Coral Tea",
    price: "$10.00",
    category: "Tea",
    size: "10oz",
    featured: false,
    slug: "coral-tea",
    desc: "Escape to Paradise: Let your taste buds travel to the tropics with the vibrant flavors of coral tea. Hibiscus flowers and other exotic fruits infuse this brew with a sweet, tangy taste, offering a refreshing getaway in every sip.",
  },
  {
    id: 18,
    brandName: "TEA OF ASSAM",
    image: chamomileTea,
    name: "Chamomile Tea",
    price: "$12.99",
    category: "Tea",
    size: "10oz",
    featured: true,
    slug: "chamomile-tea",
    desc: "Unwind in Tranquility: Find your haven in the calming embrace of chamomile tea. Known for its relaxing properties, this sweet, floral infusion gently soothes your senses and prepares you for a restful night's sleep or a moment of peace amidst the day's chaos.",
  },
];

export default Products;
