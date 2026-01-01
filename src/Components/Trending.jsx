
import React, { useRef , useEffect} from 'react';

import './Trending.css';

const trendingProducts = [
  { id: 1, name: "Bracelte", img: "https://images.pexels.com/photos/13920563/pexels-photo-13920563.jpeg" },
  { id: 2, name: "Diamond Earring", img: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg" },
  { id: 3, name: "Fancy Purse", img: "https://images.pexels.com/photos/4627902/pexels-photo-4627902.jpeg" },
  { id: 4, name: "HandBag", img: "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg" },
  { id: 5, name: "Traditional Heavy Jhumka", img: "https://ik.imagekit.io/fashioncrab/wp-content/uploads/2021/02/Light-Orange-Traditional-Heavy-Jhumka-Earring.jpg" },
  { id: 6, name: "Necklace", img: "https://i5.walmartimages.com/asr/bb098bdc-dd9f-488c-8f3f-b0ca2b6a646c.98544401e41811da6c7a2a6d9d589cb0.jpeg" },
  { id: 7, name: "Diamond Bangle", img: "https://blog.southindiajewels.com/wp-content/uploads/2019/12/designer-diamond-bangles-6.jpg" },
  { id: 8, name: "Diamond Ring", img: "https://i.etsystatic.com/46184616/r/il/2a762d/6595835449/il_1080xN.6595835449_j1wv.jpg" },
  { id: 9, name: "Pearl And Diamond Necklace", img: "https://ebth-com-production.imgix.net/2017/11/20/15/01/45/5ac8c68a-8d69-46d9-912c-bb4bf6c64334/17NYC119_B.G.-1205.jpg?ixlib=rb-3.1.0&w=1400&h=2100&fit=max&crop=&auto=format" },
  { id: 10, name: "Oxidised Sliver Plated", img: "https://tse3.mm.bing.net/th/id/OIP.w9KGNuOTQ5ag7cWwpGmZ3gAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
];

export default function TrendingCarousel() {
  const sliderRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (slider) {
        scrollAmount += 1; // scroll speed
        if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0; // loop back to start
        }
        slider.scrollLeft = scrollAmount;
      }
    }, 20); // adjust speed (ms)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="trending-section">
      <h2 className="trending-title">Trending Collections</h2>
      <div className="trending-slider" ref={sliderRef}>
        {trendingProducts.map((product) => (
          <div key={product.id} className="trending-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}