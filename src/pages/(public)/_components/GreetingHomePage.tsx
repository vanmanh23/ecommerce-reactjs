import SlideImages from "./SlideImages";

const images = [
  "https://krishnasilicon.b-cdn.net/images/product/sub_images/2023/05/ibiza-suit-raysa-embroidered-fancy-work-salwar-kameez-collection-2-2023-05-02_16_35_05.jpeg",
  "https://th.bing.com/th?id=OIF.gXa%2fzit8XMXjdb3b8bFMdQ&r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://mithmagazine.com/wp-content/uploads/2016/01/MITH_rapids_sid_Yugo-Takahashi1_web05.jpg",
];

const dealHot = [
  {
    name: "",
    title: "",
    description: "",
    img: "https://wpthemes.themehunk.com/shean/wp-content/uploads/sites/361/2025/09/i11-1.jpg",
  },
  {
    name: "",
    title: "trends store",
    description: "#SHEANForAll",
    img: "https://wpthemes.themehunk.com/shean/wp-content/uploads/sites/361/2025/09/ima1-1.jpg",
  },
  {
    name: "Shean Club",
    title: "Free Delivery + Extra 5% Off",
    description: "Every Season is Denim Season",
    img: "https://wpthemes.themehunk.com/shean/wp-content/uploads/sites/361/2025/09/1033-1.jpg",
  },
];

const topTrends = [
  {
    img: "https://i5.walmartimages.com/seo/Chiccall-Mens-Lightweight-Sweaters-Casual-Stretch-Comfy-Textured-Crew-Neck-Pullover-Tops-Fall-Fashion-2025-Solid-Long-Sleeve-Shirts_7461fea9-79c1-47dc-81d2-1fdade70ae33.8c5e8c80d696ae84c920a44ba8bbd4e3.jpeg",
    name: "Chicall men",
  },
  {
    img: "https://th.bing.com/th?id=OIF.p0ZHXfXK85prg%2bt8cXEfDw&r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Sweatshirts",
  },
  {
    img: "https://i5.walmartimages.com/seo/Fantaslook-Womens-Button-Down-Shirts-Lapel-Long-Sleeve-Blouses-Business-Work-Shirt-Dressy-Casual-Collared-Tops_7fa3e8f4-9981-49f1-942b-d4501b76075d.af73032b60e3040fcb4de92587ba1bb7.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    name: "Blouses Business",
  },
  {
    img: "https://i5.walmartimages.com/seo/ASDFVBKG-Cardigans-Women-Long-Sleeve-Cropped-Knit-Lightweight-Button-V-Neck-Cardigan-Casual-Fall-Open-Front-Fashion-Solid-Color-Dresses-Top-2025-Shru_79163a8a-d778-416c-bfca-c13b0ba9803f.ccfc0c4f31d000a4c39a6307a44ee723.jpeg",
    name: "cardigan",
  },
  {
    img: "https://i5.walmartimages.com/seo/Boho-Tops-For-Women-Winter-Fashion-Sweatshirt-2025-Fall-Sweaters-Cropped-Crewneck-Sweatshirts-Graphic-Long-Sleeve-Blouses-Fall-My-Items_818e6c12-8ca6-47a2-86d1-16cf8e5a2e98.adcc9c0fbb5d3750b2fed5c01cebe19d.jpeg",
    name: "bohotops",
  },
  {
    img: "https://i5.walmartimages.com/seo/ASDFVBKG-Women-s-Oversized-Sweatshirt-Crewneck-Casual-Loose-Hoodies-Fall-Drop-Shoulder-Long-Sleeve-2025-Fashion-Pullover-Tops-Pocket-Winter-Solid-Col_69bb7e12-0f28-454c-92ef-4c0afbeaaae5.fbb4ca3a7c121bf79c3d603389883fa5.jpeg",
    name: "Sweatshirts",
  },
];

export default function GreetingHomePage() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1">
      <div className="md:hidden flex col-span-1 w-full h-[170px]  overflow-hidden">
        <SlideImages imgUrls={images} />
      </div>
      <div className="flex flex-col gap-3 col-span-1">
        {dealHot.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
            className="bg-cover w-full h-36 rounded-md bg-black/90 relative"
          >
            <div className="absolute inset-0 bg-black/40 rounded-md"></div>
            <div className="relative  flex flex-col justify-center items-center text-white h-full">
              <p className="text-base uppercase font-medium">{item.name}</p>
              <p className="font-bold text-xl uppercase">{item.title}</p>
              <p className="text-sm uppercase">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex hidden col-span-2 w-full h-full">
        <SlideImages imgUrls={images} />
      </div>
      <div className="col-span-1 bg-bg-footer rounded-md">
        <div>
          <h2 className="text-xl font-bold uppercase">top trends</h2>
        </div>
        <div className="flex flex-row flex-wrap">
          {topTrends.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 py-2">
              <img src={item.img} alt="" className="w-24 h-32 object-cover" />
              <p className="text-sm text-fuchsia-500">#{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
