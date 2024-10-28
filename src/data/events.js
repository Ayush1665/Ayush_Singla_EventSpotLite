import diljit from "../assets/diljit.jpeg"
import garba from "../assets/garba.jpeg"
import yoga from "../assets/yoga.jpeg"
import local from "../assets/local.jpeg"
import diwali from "../assets/diwali.jpeg"
import food from "../assets/food.jpeg"
import craft from "../assets/craft.jpeg"
import cultural from "../assets/cultural.jpeg"
import art from "../assets/art.jpeg"
import wellness from "../assets/wellness.jpeg"
import bollywood from "../assets/bollywood.jpeg"
import tech from "../assets/tech.jpeg"
import eco from "../assets/eco.jpeg"
import pet from "../assets/pet.jpeg"
import indie from "../assets/indie.jpeg"
import adventure from "../assets/adventure.jpeg"
import photography from "../assets/photography.jpeg"
import winter from "../assets/winter.jpeg"
import book from "../assets/book.jpeg"
import mindfulness from "../assets/mindfulness.jpeg"
import jazz from "../assets/jazz.jpeg"
import holistic from "../assets/holistic.jpeg"
import science from "../assets/science.jpeg"
import wellnessw from "../assets/wellnessw.jpeg"
import street from "../assets/street.jpeg"
import heritage from "../assets/heritage.jpeg"
import sustainable from "../assets/sustainable.jpeg"
import gaming from "../assets/gaming.jpeg"
import children from "../assets/children.jpeg"
import outdoor from "../assets/outdoor.jpeg"
import zumba from "../assets/zumba.jpeg"
import foodfestival from "../assets/foodfestival.jpeg" 
import techinno from "../assets/techinno.jpeg"
import animal from "../assets/animal.jpeg"
import literature from "../assets/literature.jpeg"
import startup from "../assets/startup.jpeg"
import culinary from "../assets/culinary.jpeg"
import film from "../assets/film.jpeg"
import creative from "../assets/creative.jpeg"
import culturalexchange from "../assets/culturalexchange.jpeg"
import artgala from "../assets/artgala.jpeg"
import photographyexpedition from "../assets/photographyexpedition.jpeg"

const events = [
  {
      id: 1,
      name: "Local Music Fest",
      date: "2024-10-31",
      location: "Mumbai, India",
      description: "Join us for an unforgettable evening at the Local Music Fest, featuring an amazing lineup of local bands and artists. This festival will showcase a variety of genres, from rock to folk, providing something for everyone. Experience the vibrant atmosphere, delicious food stalls, and craft vendors, all while enjoying live music from talented performers. Don’t miss out on this chance to support local talent and make lasting memories with friends and family!",
      image: local
  },
  {
      id: 2,
      name: "Garba Nights",
      date: "2024-09-02",
      location: "Muktsar, India",
      description: "Immerse yourself in the vibrant culture of India at the Garba Nights festival! This event will feature traditional Garba dances performed by local artists, allowing you to participate in the festivities. Enjoy the colorful decorations, festive music, and delicious local cuisine as you dance the night away. Whether you are a seasoned dancer or a curious newcomer, Garba Nights promises an evening filled with joy, laughter, and community spirit. Bring your friends and family for an unforgettable experience!",
      image: garba
  },
  {
      id: 3,
      name: "Diljit Dosanjh Concert",
      date: "2024-11-05",
      location: "Delhi, India",
      description: "Don’t miss the chance to see the sensational Diljit Dosanjh live in concert! Known for his captivating performances and chart-topping hits, Diljit will light up the stage with his electrifying presence. This concert promises an exciting evening filled with music, dance, and unforgettable moments. Get ready to sing along to your favorite tracks as Diljit brings his unique style and energy to Delhi. Grab your tickets now and be part of this incredible musical journey!",
      image: diljit
  },
  {
      id: 4,
      name: "Yoga Under the Stars",
      date: "2024-10-15",
      location: "Rishikesh, India",
      description: "Reconnect with yourself in a serene environment at our Yoga Under the Stars event in Rishikesh. Experience the calming sounds of nature while practicing yoga under the breathtaking night sky. Led by experienced instructors, this event is suitable for all levels. Participants will engage in mindfulness activities, gentle yoga sessions, and meditation, promoting relaxation and mental clarity. Join us for an evening of tranquility and rejuvenation, where you can unwind and rejuvenate your mind, body, and spirit.",
      image: yoga
  },
  {
      id: 5,
      name: "Diwali Vibes",
      date: "2024-11-01",
      location: "Jaipur, India",
      description: "Celebrate the Festival of Lights at our Diwali Vibes event! Enjoy a lively atmosphere filled with music, dance, and delicious food stalls. This event will feature traditional Diwali celebrations, including lighting of diyas, rangoli competitions, and cultural performances. Families are welcome to partake in this festive gathering, where you can create lasting memories with loved ones. Experience the beauty of Diwali and embrace the spirit of togetherness at this joyful celebration.",
      image: diwali
  },
  {
      id: 6,
      name: "Food Fest Fiesta",
      date: "2024-11-15",
      location: "Bangalore, India",
      description: "Join us for the Food Fest Fiesta, where food lovers can indulge in a variety of cuisines from around the world! This culinary extravaganza will feature food stalls, cooking demonstrations, and tasting sessions from renowned chefs. Enjoy live music while sampling delicious dishes and discovering new flavors. Bring your family and friends to experience this food lover's paradise, where every bite tells a story. Don't miss out on this unique culinary adventure!",
      image: food
  },
  {
      id: 7,
      name: "Craft Fair Extravaganza",
      date: "2024-11-20",
      location: "Chennai, India",
      description: "Discover handmade treasures at the Craft Fair Extravaganza! This event will showcase local artisans and their unique creations, from handmade jewelry to beautiful home decor. Enjoy workshops, live demonstrations, and the opportunity to meet the makers behind the crafts. Bring your family for a day of creativity, inspiration, and shopping for one-of-a-kind gifts. Support local artisans and embrace the beauty of handmade craftsmanship at this vibrant craft fair!",
      image: craft
  },
  {
      id: 8,
      name: "Cultural Dance Festival",
      date: "2024-12-01",
      location: "Hyderabad, India",
      description: "Experience the rich cultural heritage of India at the Cultural Dance Festival! This event will feature performances from various dance forms, including classical, folk, and contemporary styles. Enjoy mesmerizing performances by talented dancers, accompanied by live music. Participate in workshops to learn about the traditions behind each dance form and connect with fellow dance enthusiasts. Join us in celebrating the diversity of Indian culture through the beauty of dance!",
      image: cultural
  },
  {
      id: 9,
      name: "Wellness Retreat",
      date: "2024-12-10",
      location: "Kerala, India",
      description: "Escape to paradise at our Wellness Retreat in the lush greenery of Kerala. This retreat offers a holistic approach to wellness, combining yoga, meditation, and wellness workshops. Experience rejuvenating treatments, healthy cuisine, and beautiful surroundings, allowing you to relax and recharge. Engage in mindfulness practices and connect with nature while discovering new ways to enhance your well-being. Join us for this transformative journey to inner peace and wellness.",
      image: wellness
  },
  {
      id: 10,
      name: "Art in the Park",
      date: "2024-12-20",
      location: "Pune, India",
      description: "Immerse yourself in creativity at the Art in the Park festival! This event will showcase local artists and their stunning artwork in a beautiful outdoor setting. Enjoy live painting sessions, art workshops, and interactive installations. Meet fellow art enthusiasts and participate in discussions about art and creativity. Bring your family for a day of inspiration and fun, where you can explore the beauty of art while enjoying the outdoors.",
      image: art
  },
  {
      id: 11,
      name: "Bollywood Night",
      date: "2025-01-05",
      location: "Mumbai, India",
      description: "Get ready for an exciting evening filled with glamour and glitz at Bollywood Night! Join us for a night of Bollywood music, dance performances, and entertainment by talented artists. Dress in your best Bollywood-inspired outfits and dance the night away to your favorite hits. This event promises to be a star-studded affair, offering a unique opportunity to immerse yourself in the magic of Bollywood. Bring your friends for a night to remember!",
      image: bollywood
  },
  {
      id: 12,
      name: "Tech Expo 2025",
      date: "2024-01-15",
      location: "Gurgaon, India",
      description: "Explore the latest innovations in technology at the Tech Expo 2025! This event will showcase cutting-edge products, tech startups, and industry leaders. Attend keynote speeches, panel discussions, and workshops to gain insights into the future of technology. Network with professionals and discover opportunities for collaboration. Whether you're a tech enthusiast or a professional, the Tech Expo offers something for everyone. Don't miss this chance to be at the forefront of technology!",
      image: tech
  },
  {
      id: 13,
      name: "Eco-Friendly Living",
      date: "2025-01-25",
      location: "Bangalore, India",
      description: "Join us for the Eco-Friendly Living Expo, where sustainability meets innovation! Discover eco-friendly products, sustainable practices, and tips for living a greener life. Participate in workshops and discussions with experts in sustainability. Learn about renewable energy, waste management, and more. Bring your family for a day of education and inspiration, empowering everyone to make a positive impact on the planet.",
      image: eco
  },
  {
      id: 14,
      name: "Pet Adoption Fair",
      date: "2025-02-10",
      location: "Delhi, India",
      description: "Find your furry friend at the Pet Adoption Fair! This event will feature a variety of adoptable pets from local shelters and rescue organizations. Meet dogs, cats, and other animals looking for loving homes. Learn about responsible pet ownership and connect with fellow animal lovers. Join us in giving these pets a second chance at happiness. Whether you're looking to adopt or just want to learn more about pets, this event is perfect for you!",
      image: pet
  },
  {
      id: 15,
      name: "Indie Film Festival",
      date: "2025-02-20",
      location: "Mumbai, India",
      description: "Celebrate the art of storytelling at the Indie Film Festival! This event will showcase independent films from talented filmmakers, offering a platform for creativity and innovation. Attend screenings, panel discussions, and Q&A sessions with filmmakers. Explore diverse narratives and connect with fellow film enthusiasts. Join us for a celebration of cinema and discover the future of independent filmmaking!",
      image: indie
  },
  {
      id: 16,
      name: "Adventure Sports Fest",
      date: "2024-03-01",
      location: "Rishikesh, India",
      description: "Experience adrenaline-pumping excitement at the Adventure Sports Fest! This event will feature a variety of thrilling activities, including river rafting, rock climbing, and trekking. Participate in workshops and demonstrations led by experienced instructors. Bring your friends and family for a day of adventure and fun in the beautiful outdoors. Whether you're a seasoned adventurer or trying something new, the Adventure Sports Fest offers excitement for everyone!",
      image: adventure
  },
  {
      id: 17,
      name: "Photography Walk",
      date: "2024-03-10",
      location: "Jaipur, India",
      description: "Capture the beauty of Jaipur at our Photography Walk! Join fellow photography enthusiasts for a guided tour through the city’s picturesque streets and historic landmarks. Learn photography tips and techniques from experienced photographers while exploring the vibrant culture of Jaipur. This event is suitable for all skill levels, providing a unique opportunity to hone your skills and connect with other creatives. Don’t forget to bring your camera and share your passion for photography!",
      image: photography
  },
  {
      id: 18,
      name: "Winter Carnival",
      date: "2025-03-20",
      location: "Shimla, India",
      description: "Embrace the winter spirit at our Winter Carnival in Shimla! Enjoy a festive atmosphere filled with fun activities for all ages, including snow sports, ice skating, and traditional winter games. Explore food stalls serving delicious winter treats and hot beverages. This event promises a day of joy and celebration amid the beautiful snowy landscapes. Bring your family and friends for an unforgettable winter experience!",
      image: winter
  },
  {
      id: 19,
      name: "Book Fair 2025",
      date: "2024-04-01",
      location: "Delhi, India",
      description: "Join us for the Book Fair 2025, where literature comes alive! Explore a vast collection of books from various genres, meet authors, and attend book signings. Participate in discussions and workshops with writers and literary enthusiasts. This event is perfect for book lovers of all ages, offering a unique opportunity to immerse yourself in the world of literature. Bring your family for a day of reading, inspiration, and discovery!",
      image: book
  },
  {
      id: 20,
      name: "Mindfulness Retreat",
      date: "2025-04-10",
      location: "Kerala, India",
      description: "Experience peace and tranquility at our Mindfulness Retreat in Kerala. This event will focus on meditation, yoga, and wellness practices designed to promote relaxation and self-discovery. Enjoy serene surroundings, nourishing meals, and expert guidance to help you reconnect with yourself. This retreat is perfect for anyone looking to unwind and explore mindfulness in a supportive environment. Join us for a transformative experience that nourishes the mind, body, and spirit.",
      image: mindfulness
  },
  {
      id: 21,
      name: "Jazz Nights",
      date: "2025-04-20",
      location: "Bangalore, India",
      description: "Enjoy a magical evening of music at Jazz Nights! This event will feature talented jazz musicians performing live in a cozy setting. Relax with friends while enjoying soulful melodies and delightful food. Whether you are a jazz aficionado or a newcomer to the genre, this event promises a delightful experience. Immerse yourself in the rhythm and elegance of jazz while creating unforgettable memories!",
      image: jazz
  },
  {
      id: 22,
      name: "Holistic Healing Fair",
      date: "2025-05-01",
      location: "Chennai, India",
      description: "Discover the power of holistic healing at our Holistic Healing Fair! This event will feature workshops, demonstrations, and talks by wellness experts. Explore alternative therapies, including yoga, meditation, and herbal remedies. Connect with like-minded individuals and learn how to enhance your well-being through holistic practices. Bring your friends and family to embrace the journey of self-discovery and healing in a supportive environment.",
      image: holistic
  },
  {
      id: 23,
      name: "Science Fair 2025",
      date: "2024-05-15",
      location: "Hyderabad, India",
      description: "Join us for the Science Fair 2025, where innovation meets creativity! This event will showcase projects from students and professionals, highlighting advancements in various scientific fields. Attend interactive exhibits, demonstrations, and workshops to explore the wonders of science. This fair is perfect for curious minds of all ages, offering a unique opportunity to learn and inspire future generations of scientists. Don't miss this chance to explore the exciting world of science!",
      image: science
  },
  {
      id: 24,
      name: "Wellness Walk",
      date: "2025-05-20",
      location: "Mumbai, India",
      description: "Join us for a rejuvenating Wellness Walk in Mumbai! This event combines exercise and mindfulness, encouraging participants to connect with nature and promote physical and mental well-being. Enjoy guided walking sessions while practicing mindfulness techniques. Engage with like-minded individuals and discover the benefits of staying active. Bring your family and friends for a day of health, wellness, and community spirit!",
      image: wellnessw
  },
  {
      id: 25,
      name: "Street Art Festival",
      date: "2024-06-01",
      location: "Delhi, India",
      description: "Experience creativity at its finest at the Street Art Festival! This event will showcase talented street artists from around the country, transforming public spaces into vibrant galleries. Enjoy live painting, graffiti, and art installations. Participate in workshops and engage in discussions about street art and its impact on culture. Bring your family for a day of inspiration and artistic expression, celebrating the power of creativity!",
      image: street
  },
  {
      id: 26,
      name: "Heritage Walk",
      date: "2025-06-15",
      location: "Jaipur, India",
      description: "Explore the rich history of Jaipur at our Heritage Walk! Join knowledgeable guides as they lead you through the city's iconic landmarks, sharing stories and insights about its heritage. Experience the vibrant culture, architecture, and traditions of Jaipur while connecting with fellow history enthusiasts. This event is perfect for anyone looking to learn more about the city's fascinating past and appreciate its beauty. Bring your family for a day of exploration and discovery!",
      image: heritage
  },
  {
      id: 27,
      name: "Sustainable Workshop",
      date: "2025-06-30",
      location: "Bangalore, India",
      description: "Join us for a Sustainable Living Workshop, where you'll learn practical tips for reducing your environmental footprint! This event will feature hands-on activities, discussions, and expert speakers sharing insights on sustainability. Explore topics like waste reduction, energy efficiency, and sustainable gardening. Bring your family for a day of education and inspiration, empowering everyone to contribute to a more sustainable future!",
      image: sustainable
  },
  {
      id: 28,
      name: "Gaming Expo 2025",
      date: "2024-07-15",
      location: "Mumbai, India",
      description: "Dive into the world of gaming at the Gaming Expo 2025! This event will feature the latest games, gaming technology, and competitions. Meet game developers, attend panels, and participate in tournaments. Whether you're a casual gamer or a hardcore enthusiast, the Gaming Expo offers something for everyone. Join us for a fun-filled day celebrating gaming culture and innovation!",
      image: gaming
  },
  {
      id: 29,
      name: "Children’s Art Camp",
      date: "2024-07-20",
      location: "Delhi, India",
      description: "Encourage creativity in your children at the Children’s Art Camp! This event will offer fun art workshops for kids of all ages, led by experienced instructors. Children will explore various art techniques, including painting, drawing, and crafting, while making new friends. Join us for a day filled with imagination, creativity, and fun, allowing children to express themselves and develop their artistic skills!",
      image: children
  },
  {
      id: 30,
      name: "Outdoor Movie Night",
      date: "2024-08-01",
      location: "Pune, India",
      description: "Experience the magic of cinema under the stars at our Outdoor Movie Night! Enjoy classic films and recent hits in a relaxed outdoor setting. Bring your blankets, snacks, and friends for a memorable evening of entertainment. This event is perfect for families and movie lovers alike, providing a unique opportunity to enjoy films in a beautiful environment. Don't miss this chance to create lasting memories with loved ones!",
      image: outdoor
  },
  {
      id: 31,
      name: "Zumba Party",
      date: "2024-08-15",
      location: "Goa, India",
      description: "Get ready to groove at our Zumba Party in Goa! This event will feature energetic Zumba sessions led by professional instructors. Dance to the rhythm and enjoy a fun workout while meeting new friends. Whether you're a seasoned dancer or just starting, this party welcomes everyone. Join us for a day of fitness, fun, and positive energy as we celebrate movement and music together!",
      image: zumba
  },
  {
      id: 32,
      name: "Food Festival 2025",
      date: "2025-08-30",
      location: "Ahmedabad, India",
      description: "Savor the flavors of diverse cuisines at our Food Festival 2025! This event will bring together food vendors, chefs, and culinary enthusiasts for a delicious experience. Sample mouthwatering dishes, attend cooking demonstrations, and participate in food workshops. Whether you're a food lover or just looking for a fun day out, the Food Festival offers something for everyone. Join us to celebrate food, culture, and community in a vibrant atmosphere!",
      image: foodfestival
  },
  {
      id: 33,
      name: "Tech Innovations",
      date: "2024-09-15",
      location: "Delhi, India",
      description: "Join us at the Tech Innovations Summit, where industry leaders share insights on the latest technology trends! This event will feature keynote speakers, panel discussions, and networking opportunities. Explore topics like artificial intelligence, cybersecurity, and digital transformation. Whether you're a tech professional or an enthusiast, this summit offers valuable knowledge and connections. Don’t miss this chance to be at the forefront of technology innovation!",
      image: techinno
  },
  {
      id: 34,
      name: "Animal kindness Day",
      date: "2025-09-30",
      location: "Mumbai, India",
      description: "Join us for Animal Welfare Awareness Day, dedicated to promoting the well-being of animals! This event will feature educational talks, interactive sessions, and activities focused on animal rights and welfare. Connect with local animal shelters, learn about adoption opportunities, and participate in fundraising activities. Bring your family for a day of compassion and awareness, supporting the cause of animal welfare in our community!",
      image: animal
  },
  {
      id: 35,
      name: "Literature and Arts",
      date: "2025-10-10",
      location: "Kolkata, India",
      description: "Experience the fusion of literature and arts at our Literature and Arts Festival! This event will showcase talented authors, poets, and artists sharing their works through readings, performances, and exhibitions. Attend workshops to explore your creative side and connect with fellow enthusiasts. This festival is perfect for anyone passionate about literature and the arts, celebrating creativity and expression in a vibrant atmosphere. Don’t miss this opportunity to be inspired!",
      image: literature
  },
  {
      id: 36,
      name: "Startup Pitch Day",
      date: "2025-10-20",
      location: "Bangalore, India",
      description: "Join us for Startup Pitch Day, where innovative ideas take center stage! This event will feature emerging startups pitching their projects to industry leaders and investors. Attend networking sessions, workshops, and discussions to learn about entrepreneurship and the startup ecosystem. Whether you're an aspiring entrepreneur or an investor, this event provides valuable insights and connections. Don’t miss this opportunity to witness the future of innovation!",
      image: startup
  },
  {
      id: 37,
      name: "Culinary Masterclass",
      date: "2023-11-01",
      location: "Delhi, India",
      description: "Join us for a Culinary Masterclass, where you can enhance your cooking skills with expert chefs! This event will feature hands-on sessions focusing on various cuisines and techniques. Learn to prepare delicious dishes while exploring the art of cooking. Whether you’re a beginner or an experienced cook, this masterclass offers something for everyone. Bring your friends and family for a day of culinary exploration and creativity!",
      image: culinary
  },
  {
      id: 38,
      name: "Film Screening Night",
      date: "2025-11-10",
      location: "Mumbai, India",
      description: "Experience the magic of cinema at our Film Screening Night! This event will showcase independent films, offering a platform for aspiring filmmakers. Join us for a night filled with creativity, storytelling, and engaging discussions. Meet filmmakers, participate in Q&A sessions, and immerse yourself in the world of film. This event is perfect for film lovers and anyone interested in the art of storytelling. Don’t miss this chance to discover new voices in cinema!",
      image: film
  },
  {
      id: 39,
      name: "Creative Writing",
      date: "2025-11-20",
      location: "Pune, India",
      description: "Unlock your creativity at our Creative Writing Workshop! This event will provide a supportive environment for writers of all levels to explore their craft. Engage in writing exercises, receive feedback, and share your work with fellow writers. Whether you're an experienced author or just starting, this workshop will inspire you to develop your unique voice. Join us for a day of creativity, expression, and community in the heart of Pune!",
      image: creative
  },
  {
      id: 40,
      name: "Cultural Exchange",
      date: "2025-12-01",
      location: "Delhi, India",
      description: "Join us for the Cultural Exchange Festival, celebrating the diversity of cultures in India! This event will feature performances, exhibitions, and workshops showcasing various cultural traditions. Connect with artists and participants from different backgrounds and learn about their customs, art, and history. Enjoy food stalls offering delicious cuisines from around the world. This festival is perfect for anyone looking to embrace and celebrate cultural diversity. Don’t miss this opportunity to connect with others and broaden your horizons!",
      image: culturalexchange
  },
  {
    id: 41,
    name: "Photography Expedition",
    date: "2026-02-05",
    location: "Leh, India",
    description: "Capture the beauty of the Himalayas on our Photography Expedition in Leh! This event is designed for photographers of all levels, offering guided photo tours, workshops on landscape and portrait photography, and one-on-one mentoring sessions with professional photographers. Explore breathtaking landscapes and learn to enhance your photography skills in one of the most scenic locations in India. Whether you're an amateur or a seasoned photographer, this expedition is an unforgettable experience.",
    image: photographyexpedition
  },
  {
    id: 42,
    name: "Art and Music Gala",
    date: "2025-12-22",
    location: "Mumbai, India",
    description: "Experience an evening of artistic expression and musical performances at the Art and Music Gala in Mumbai! This event brings together talented artists and musicians to showcase their work in a vibrant setting. Enjoy live music, art installations, and interactive workshops, creating a memorable cultural experience. Perfect for art lovers and music enthusiasts alike, this gala promises a night of creativity and inspiration. Join us and immerse yourself in the world of art and music!",
    image: artgala
  }
];


export default events;
