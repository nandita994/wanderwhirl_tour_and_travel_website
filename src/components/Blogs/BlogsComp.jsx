import React from 'react';
import BlogCard from "../Blogs/BlogCard";
import Img1 from "../../assets/Places/agra.jpg";
import Img2 from "../../assets/Places/goa.jpg";
import Img3 from "../../assets/Places/j&k.jpg";
import Img4 from "../../assets/Places/kedarnath.jpg";
import Img5 from "../../assets/Places/amritsar.jpg";
const BlogsData=[
    {
        id:1,
        image:Img1,
        title:"Agra",
        description:"Agra, a city nestled on the banks of the Yamuna River in Uttar Pradesh, India, is synonymous with the majestic Taj Mahal. However, Agra offers much more than just this iconic monument. From its rich Mughal heritage, exemplified by sites like the Agra Fort, Fatehpur Sikri, and Itmad-ud-Daulah’s Tomb, to its vibrant markets and delectable cuisine, Agra is a treasure trove waiting to be explored. The Taj Mahal, a UNESCO World Heritage site and one of the New Seven Wonders of the World, captivates with its gleaming white marble and intricate inlay work. Visitors should plan to see it early in the morning or late afternoon to avoid crowds and enjoy the best light. Beyond the Taj, Agra Fort showcases Mughal architecture's grandeur, while Fatehpur Sikri offers a glimpse into a former Mughal capital. The culinary scene in Agra is a delightful blend of Mughlai flavors and local specialties, with must-try dishes like Petha, Butter Chicken, and street food such as Aloo Tikki and Bedai. Agra's markets, including Sadar Bazaar and Kinari Bazaar, offer a shopper's paradise of handicrafts, textiles, and marble inlay work. Hidden gems like Mehtab Bagh, with its stunning views of the Taj, and Chini Ka Rauza, a Persian-style tomb, provide additional exploration opportunities. For animal lovers, Wildlife SOS offers a sanctuary for rescued elephants and bears. Agra also hosts vibrant cultural festivals, such as the Taj Mahotsav and Ram Barat, celebrating the city’s rich heritage. Travelers will find a range of accommodations, from luxury hotels like the Oberoi Amarvilas to budget-friendly guesthouses, and convenient transport options, such as auto-rickshaws and guided tours, to explore the city. The best time to visit Agra is from October to March when the weather is pleasant. Whether you are captivated by history, culture, or cuisine, Agra promises a rich and unforgettable experience that weaves these elements into a mesmerizing tapestry.",
        author:"Pradip Sen",
        date:"05/08/2023"
    },
    {
        id:2,
        image:Img2,
        title:"Goa",
        description:"Goa, a gem on India's western coast, is renowned for its stunning beaches, vibrant nightlife, and rich cultural heritage, making it a paradise for travelers seeking both relaxation and adventure. The golden sands of beaches like Anjuna, Calangute, and Palolem attract sun-seekers and party-goers alike, offering everything from serene sunrise yoga sessions to lively beach parties under the stars. Beyond the beaches, Goa’s colonial past is reflected in its charming architecture, with beautiful churches like the Basilica of Bom Jesus and Se Cathedral standing as testaments to its Portuguese heritage. Visitors can explore the bustling markets of Mapusa and Anjuna, where colorful handicrafts, spices, and souvenirs abound. Goa's culinary scene is a delightful fusion of Indian and Portuguese flavors, with must-try dishes like spicy Vindaloo, Prawn Balchão, and Bebinca sweetening the palate. Adventurous souls can indulge in water sports such as parasailing, jet-skiing, and scuba diving along the coast, while nature lovers can explore the lush Western Ghats and wildlife sanctuaries like Bhagwan Mahavir and Cotigao. Goa also hosts a myriad of festivals, including the vibrant Carnival and Sunburn Festival, drawing crowds from around the globe to celebrate life with music, dance, and color. Whether lounging on a tranquil beach, wandering through historic lanes, or reveling in its pulsating nightlife, Goa offers an unforgettable experience that captures the heart of every visitor. With its welcoming spirit and endless attractions, Goa is not just a destination but a state of mind that promises relaxation, exploration, and exhilaration all in one.",
        author:"Keshav Thakre",
        date:"12/09/2023"
    },
    {
        id:3,
        image:Img3,
        title:"Jammu & Kashmir",
        description:" paradise on earth, the enthralling beauty of Kashmir is recognised all over the world. The gentle streams, the cool breeze, the green valleys and the magical vistas are no less than a gorgeous painting. Undoubtedly, one of the most beautiful places in India, Jammu and Kashmir is a must-visit destination.Jammu and Kashmir, often referred to as 'Paradise on Earth,' is a stunning region in northern India, renowned for its breathtaking landscapes, rich culture, and diverse heritage. Nestled in the Himalayas, this region boasts awe-inspiring vistas with snow-capped peaks, lush green valleys, serene lakes, and vibrant gardens. Srinagar, the summer capital, is famous for its picturesque Dal Lake, where traditional houseboats and shikaras offer a unique experience. The Mughal Gardens, with their meticulous designs, reflect the grandeur of Mughal architecture and offer a tranquil escape. Adventure seekers can explore Gulmarg, a haven for skiing and trekking, while Pahalgam offers opportunities for trekking and fishing amid lush surroundings. Jammu, the winter capital, is home to the sacred Vaishno Devi Temple, attracting pilgrims from all over India. The region's rich cultural tapestry is evident in its cuisine, with dishes like Rogan Josh and Kashmiri Pulao tantalizing taste buds. Handicrafts such as Pashmina shawls and intricate Kashmiri carpets are treasured souvenirs. Despite its natural beauty, Jammu and Kashmir has faced challenges due to its geopolitical significance, yet it remains a symbol of resilience and the enduring spirit of its people. A visit to Jammu and Kashmir is a journey through nature's splendor, spiritual richness, and cultural diversity, leaving an indelible mark on every traveler who ventures into this enchanting region.",
        author:"Sonam Kumari",
        date:"25/08/2023"
    },
    {
        id:4,
        image:Img4,
        title:"Kedarnath",
        description:"Kedarnath, nestled in the majestic Himalayas, exudes a profound beauty with its snow-capped peaks and serene landscapes. The spirituality of this sacred place is palpable, drawing pilgrims and seekers who find solace and divine connection in its ancient temple and tranquil surroundings.Nestled in the Garhwal Himalayas of Uttarakhand, India, Kedarnath is a sacred pilgrimage site and one of the twelve Jyotirlingas dedicated to Lord Shiva. This holy town, situated at an altitude of 3,583 meters, is renowned for its breathtaking natural beauty and spiritual significance. The Kedarnath Temple, believed to have been built by the Pandavas and later reconstructed by Adi Shankaracharya, stands majestically amidst snow-capped peaks and lush green valleys. Pilgrims from around the world embark on a challenging journey through the rugged terrain to seek blessings and experience the divine atmosphere of the temple. The trek to Kedarnath, which starts from Gaurikund, is an adventure in itself, offering stunning vistas of the surrounding mountains and the Mandakini River. The temple remains open from April to November, as the region is covered in snow during winter. Beyond the spiritual allure, Kedarnath offers a serene escape for nature lovers and trekkers, with opportunities to explore nearby attractions like Gandhi Sarovar and Vasuki Tal. The resilience of the temple, especially after the devastating floods of 2013, stands as a testament to the indomitable spirit of the region and its people. Whether you are a devotee seeking spiritual solace or an adventurer drawn to the mountains, Kedarnath promises an unforgettable journey that transcends the mundane and touches the soul.",
        author:"Ramanath Chatterjee",
        date:"14/03/2024"
    },
    {
        id:5,
        image:Img5,
        title:"Amritsar",
        description:"Amritsar, located in the northwestern state of Punjab, India, is a vibrant city that seamlessly blends spirituality, history, and culture. At the heart of Amritsar is the Golden Temple, or Harmandir Sahib, a stunning Sikh gurdwara adorned in gold and surrounded by a serene water tank. The temple serves as a symbol of equality and brotherhood, welcoming people of all faiths to partake in its community kitchen, or langar, which serves free meals to thousands every day. Beyond the spiritual solace of the Golden Temple, Amritsar offers a poignant glimpse into India's tumultuous past at the Jallianwala Bagh memorial, where a tragic massacre in 1919 became a turning point in the Indian independence movement. The city's bustling markets, such as Hall Bazaar, showcase the rich Punjabi culture with an array of traditional textiles, jewelry, and handicrafts. Food lovers can indulge in Amritsar's renowned culinary delights, including Amritsari kulcha, butter chicken, and lassi, best enjoyed at local dhabas. The nearby Wagah Border presents a unique experience with its daily flag-lowering ceremony, symbolizing the rivalry and camaraderie between India and Pakistan. Amritsar, with its warm hospitality and cultural richness, invites travelers to explore its many facets, making it a destination that leaves a lasting impression.",
        author:"Avishek Das",
        date:"10/02/2024"
    },
];
const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up"
      className='container '>
        <h1 className='my-8 border-l-8 
        border-primary/50 py-2 pl-2 text-3xl font-bold'>
         Our latest Blogs
         </h1>
         <h2 className='text-xl font-bold pl-10'>Top 5 Places in India</h2>
         <div>
                {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
         </div>
      </div>
    </div>
  );
};

export default BlogsComp;
