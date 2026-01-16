import { color } from "framer-motion";

export const products = [
  {
    id: 1,
    name: "Abstract Bhakt",
    price: 1999,
    image: "https://tartariatech.com/public/1.webp?v=1680173599",
    category: "Bhakt",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: ["Black"],
    rating: 4,
    description: `The Abstract Bhakt combines traditional craftsmanship with a contemporary aesthetic. Its sleek design and premium leather construction make it a versatile choice for formal occasions. The cushioned insole ensures comfort throughout the day, while the durable outsole provides reliable traction.
<br/>
  <b>Key features:</b>
    Modern silhouette; leather upper; cushioned insole; durable rubber outsole; available in Black, Brown & Tan.
   <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, textile lining, rubber outsole.
  `,
  },

  {
  id: 2,
  name: "Urban Loafer",
  price: 2999,
  // originalPrice: 449,
  image: "https://tartariatech.com/public/2.webp?v=1680173590",
  category: "Formal / Casual",
  sizes: ["5", "6", "7", "8", "9", "10", "11"],
  colors: ["Black", "Brown", "Tan"],
  rating: 5,
  description: `The Urban Loafer is built for the professional who values convenience and polish. Its smooth leather upper and cushioned footbed make it ideal for commuting and meetings. The low-profile sole keeps the look formal while offering everyday flexibility. Pair them with chinos or a suit for a refined yet effortless outfit.
<br/>
  <b>Key features:</b>
    Slip-on design; premium leather upper; padded insole; flexible rubber outsole; breathable lining; available in Black, Brown & Tan.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, textile lining, rubber outsole.
  <br/><b>Care & warranty:</b> Use a soft brush and leather cleaner; store with shoe trees; 3-month workmanship warranty.
  `,
},
 {
    id: 3,
    name: "Heritage Mojari",
    price: 2999,
    // originalPrice: 379,
    image: "https://tartariatech.com//public/3.webp?v=1680173595",
    category: "Formal / Casual/ Functions",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 4,
    description: `Celebrate tradition with the Heritage Mojari — a handcrafted footwear option that adds cultural charm to your formal wardrobe. Finished in premium leather, it offers a snug, comfortable fit and pairs beautifully with ethnic and fusion outfits at weddings and festivals.
<br/>
  <b>Key features:</b>
    Hand-finished leather upper; cushioned lining; slip-on design; detailed stitching; lightweight sole; ethnic styling.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper & lining; Sole: flexible rubber.
  <br/><b>Care & warranty:</b> Wipe with soft cloth; keep away from water; avoid machine cleaning.
  `,
},
 {
    id: 4,
    name: " Prime Oxford",
    price: 2999,
    // originalPrice: 529,
    image: "https://tartariatech.com/public/4.webp?v=1680173592",
    category: "Formal / Casual",
    rating: 5,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    description: `The Prime Oxford refines classic Oxford styling with practical comfort features. It’s suited to professionals seeking a dependable formal shoe for regular wear. The firm heel support and cushioned insole reduce strain during long days while maintaining a slim, elegant toe line.
<br/>
  <b>Key features:</b>
    Polished leather upper; cushioned footbed; leather-lined interior; anti-slip sole insert; reinforced heel.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, PU insole, rubber insert.
  <br/><b>Care & warranty:</b> Apply leather polish periodically; repel moisture with waterproof spray.
  `,
},
  {
    id: 5,
    name: "Elite Loafer",
    price: 2999,
    // originalPrice: 359,
    image: "https://www.artarium.com/cdn/shop/products/3_22.jpg?v=1680173586",
    category: "Formal / Casual",
    rating: 4,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    description: `The Elite Loafer fuses traditional loafer aesthetics with modern comfort. Smooth leather and a soft cushioned insole make it a favorite for professionals who prefer easy-on footwear without losing formality. Perfect with suits and chinos alike.
<br/>
  <b>Key features:</b>
    Penny-loafer strap detail; leather upper & lining; cushioned insole; flexible outsole; low-profile heel.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, PU insole, rubber outsole.
  <br/><b>Care & warranty:</b> Clean with damp cloth and use neutral conditioner.
  `,
},
  {
    id: 6,
    name: "Heritage Nagra",
    price: 2999,
    // originalPrice: 489,
    image: "https://www.artarium.com/cdn/shop/products/4_25.jpg?v=1680173590",
    category: "Formal / Casual/ Functions",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Heritage Nagra delivers a traditional aesthetic with a modern comfort-oriented sole. Tailored for festive events and function wear, it’s a great choice when you want formal flair and slip-on convenience.
<br/>
  <b>Key features:</b>
    Smooth leather upper; slip-on design; cushioned footbed; non-slip sole; decorative stitching.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper.
  <br/><b>Care & warranty:</b> Avoid soaking; polish gently.
  `,
  },
  {
    id: 7,
    name: "Windsor Brogue",
    price: 2499,
    // originalPrice: 489,
    image: "https://www.artarium.com/cdn/shop/products/5_27.jpg?v=1680173593",
    category: "Formal",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Windsor Brogue balances formal elegance and character. Its decorative brogue perforations add texture while the leather upper keeps the shoe suitable for black-tie and smart-casual ensembles. Comfortable insoles and solid stitching ensure durability.
<br/>
  <b>Key features:</b>
    Wingtip brogue perforation; leather upper; cushioned insole; welted stitching; rubber heel tip for grip.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, leather lining, rubber heel.
  <br/><b>Care & warranty:</b> Use brogue brush and leather polish.
  `,
  },
  {
    id: 8,
    name: "Classic Slip-On",
    price: 2499,
    // originalPrice: 2000,
    image: "https://www.artarium.com/cdn/shop/products/7_19.jpg?v=1680173596",
    category: "Formal / Casual/ Functions",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Classic Slip-On simplifies formal dressing without sacrificing style. With a soft leather lining and supportive insole, it suits professionals who prize quick wearability and refined looks. The subtle design makes it ideal for office-to-evening transitions.
<br/>
  <b>Key features:</b>
    Slip-on construction; leather upper; padded collar; soft lining; anti-slip sole.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper & lining, synthetic sole.
  <br/><b>Care & warranty:</b> Wipe and buff; 3-month warranty.
  `,
  },
  {
    id: 9,
    name: "Penny Loafer",
    price: 2499,
    // originalPrice: 489,
    image: "https://www.artarium.com/cdn/shop/products/8_16.jpg?v=1680173598",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Penny Loafer offers a sleek silhouette and comfortable insole for everyday formal-casual wear. It’s a wardrobe staple for professionals who want a low-effort yet refined footwear option.
<br/>
  <b>Key features:</b>
    Penny strap detail; leather upper; cushioned lining; flexible rubber outsole.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, PU insole.
  <br/><b>Care & warranty:</b> Spot-clean only; use leather conditioner monthly; 3-month warranty.
  `,
  },
  {
    id: 10,
    name: "Monarch Plain Derby",
    price: 2499,
    // originalPrice: 489,
    image: "https://www.artarium.com/cdn/shop/products/10_13.jpg?v=1680173600",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Monarch Plain Derby is a practical, stylish choice for professionals needing a dependable daily formal shoe. Its open-lacing Derby fit suits a range of foot shapes while the ergonomic insole provides long-wear comfort.
<br/>
  <b>Key features:</b>
    Open-lace Derby design; leather upper; padded insole; rubber grip outsole; reinforced toe.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, rubber outsole.
  <br/><b>Care & warranty:</b> Polish regularly; avoid water.
  `,
  },
  {
    id: 11,
    name: "Regal Plain Oxford",
    price: 2999,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/hindu-goddess-durga-sculpture-pune-260nw-1143323375.jpg",
    category: "Formal",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Regal Plain Oxford emphasizes simplicity and elegance. The unadorned toe and glossy leather make it a versatile formal staple, blending seamlessly with suit trousers and formal attire. Comfort features keep it suitable for long days.
<br/>
  <b>Key features:</b>
    Plain-toe Oxford; full-grain leather upper; cushioned insole; leather sole with rubber tip; secure lace-up.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, leather lining.
  <br/><b>Care & warranty:</b> Clean and polish; keep in dust bag.
  `,
  },
  {
    id: 12,
    name: "Prime Oxford",
    price: 2999,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/statue-sri-ayyappan-hindu-deity-260nw-1933036430.jpg",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Prime Oxford refines classic Oxford styling with practical comfort features. It’s suited to professionals seeking a dependable formal shoe for regular wear. The firm heel support and cushioned insole reduce strain during long days while maintaining a slim, elegant toe line.
<br/>
  <b>Key features:</b>
    Polished leather upper; cushioned footbed; leather-lined interior; anti-slip sole insert; reinforced heel.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, PU insole, rubber insert.
  <br/><b>Care & warranty:</b> Apply leather polish periodically; repel moisture with waterproof spray.
  `,
  },
  {
    id: 13,
    name: "Regal Plain Oxford",
    price: 2499,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/statue-hindu-god-shiva-meditating-260nw-152192732.jpg",
    category: "Formal",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Regal Plain Oxford is designed for the modern professional who values understated elegance. With a clean plain-toe design and closed-lacing Oxford construction, this shoe delivers a crisp, formal profile that pairs perfectly with suits and corporate attire.
<br/>
  <b>Key features:</b>
    Closed-lacing Oxford; plain-toe design; leather upper; cushioned PU insole; anti-slip rubber outsole; reinforced heel.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, PU insole, rubber sole.
  <br/><b>Care & warranty:</b> Wipe clean and polish regularly; 6-month warranty on manufacturing defects.
  `,
  },
  {
    id: 14,
    name: "Monarch Toe Derby",
    price: 2999,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/lord-ganesha-ganesh-festival-ganesha-260nw-1143323375.jpg",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `With a defined toe-cap and strong construction, the Monarch Toe Derby offers durability and a sharp look. The supportive midsole and leather upper make this a practical option for daily professional use.
<br/>
  <b>Key features:</b>
    Toe-cap design; leather upper; cushioned midsole; anti-slip outsole; reinforced heel.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, PU insole, rubber sole.
  <br/><b>Care & warranty:</b> Brush and polish regularly; store dry.
  `,
  },
  {
    id: 15,
    name: "Classic Slip-on",
    price: 2499,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/beautiful-lakshmi-statue-diwali-festival-260nw-1842 beautiful-lakshmi-statue-diwali-festival-260nw-1842918199.jpg",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Classic Slip-On is crafted for men who prefer simplicity without compromising on style. Featuring a smooth leather upper and a streamlined silhouette, this shoe offers effortless wear with a polished appearance.
<br/>
  <b>Key features:</b>
    Easy slip-on design; smooth leather upper; cushioned PU insole; anti-slip rubber outsole; lightweight construction.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: Leather upper, PU insole, rubber sole.
  <br/><b>Care & warranty:</b> Clean with soft cloth; 6-month warranty against manufacturing defects.
  `,
  },
  {
    id: 16,
    name: "Monarch Plain Derby",
    price: 2999,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/hindu-deity-lord-krishna-radha-260nw-1701334909.jpg",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `Classic design meets modern comfort in the Monarch Plain Derby. Made from premium genuine leather, this Derby offers unmatched durability and style, making it ideal for both formal events and business-casual occasions.
<br/>
  <b>Key features:</b>
    Minimalist design; premium leather; handcrafted excellence; open-lacing fit; durable rubber sole.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, rubber outsole.
  <br/><b>Care & warranty:</b> Polish regularly; store in a dry place.
  `,
  },
  {
    id: 17,
    name: "Monarch Plain Derby",
    price: 2499,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/lord-rama-sita-laxshman-hanuman-260nw-1099528280.jpg",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Monarch Plain Derby blends traditional derby construction with a minimal plain-toe profile for a look that’s both refined and versatile. Its open-lacing system provides a comfortable, adjustable fit while the leather upper delivers a polished finish suited to business meetings and semi-formal events.
<br/>
  <b>Key features:</b>
    Plain-toe design for a minimal, formal appearance; Derby (open-lacing) construction; leather upper; cushioned PU insole; anti-slip rubber outsole; reinforced heel.
    <br/> <b>Specs:</b> Sizes: 5–11 (UK); Material: Leather upper, PU insole, rubber sole.
  <br/><b>Care & warranty:</b> Clean with a soft cloth; apply leather polish regularly; 6-month warranty on manufacturing defects.
  `,
  },
  {
    id: 18,
    name: "Dummy Lace Oxford",
    price: 2499,
    // originalPrice: 489,
    image: "https://image.shutterstock.com/image-photo/closeup-face-lord-buddha-statue-260nw-110487059.jpg",
    category: "Formal / Casual",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    rating: 5,
    description: `The Dummy Lace Oxford preserves the polished look of laced formal shoes while offering the convenience of a slip-on. Great for professionals on the go who want a classic silhouette without fuss. Durable leather finish and a cushioned insole deliver both style and comfort.
<br/>
  <b>Key features:</b>
    Faux-lace appearance with elastic fit; leather upper; cushioned footbed; lightweight sole; neat profile.
    <br/> <b>Specs:</b> Sizes 5–11 (UK); Material: leather upper, elastic gore, synthetic sole.
  <br/><b>Care & warranty:</b> Wipe clean; condition leather occasionally; 3-month workmanship warranty.
  `,
  }
];