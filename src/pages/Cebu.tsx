import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import DayItinerary from "@/components/DayItinerary";
import PhotoGallery from "@/components/PhotoGallery";

// Import images
import onboardImage from "@/assets/Ticket.jpg";
import citCampusImage from "@/assets/CITCampus.jpg";
import buffet101Image from "@/assets/Buffet101.jpg";
import rivanitImage from "@/assets/RIVANIT.jpg";
import mcdoCebuImage from "@/assets/McdoCebu.jpg";
import breakfastBaiImage from "@/assets/breakfastbai.jpg";
import mataImage from "@/assets/MATA.jpg";
import vikingsLogoImage from "@/assets/vikingslogo.jpg";
import pierImage from "@/assets/pier.jpg";
import boholArrival3Image from "@/assets/boholarrival3.jpg";
import vistaSuitesImage from "@/assets/VistaSuites.jpg";
import skatingImage from "@/assets/Skating.png";
import stoNinoHopeImage from "@/assets/StoNinoHope.jpg";
import vikings2Image from "@/assets/vikings2.jpg";
import ticketImage from "@/assets/Ticket.jpg";

const cebuDay1 = {
  day: 1,
  date: "Day 1 - Cebu City Tour",
  activities: [
    {
      time: "8:45 AM-9:45 AM",
      title: "Departure & Arrival",
      description: "Early morning departure from the meeting point. Travel to Cebu City via plane. Welcome orientation upon arrival.",
      image: onboardImage,
    },
    {
      time: "10:30 AM",
      title: "Lapu-Lapu Shrine Monumentum",
      description: "The Lapu-Lapu Shrine Monument in Mactan, Cebu commemorates Datu Lapu-Lapu, the native chieftain who bravely resisted Spanish colonization and defeated Ferdinand Magellan in the Battle of Mactan in 1521. The monument stands as a symbol of Filipino courage, independence, and the nation’s first recorded act of resistance against foreign rule.",
      image: "https://travelogue-portfolio.vercel.app/assets/lapulapu-1-BrSsHnEl.jpg",
    },
    {
      time: "3:00 PM",
      title: "WorldTech Solutions, Inc.",
      description: "WorldTech Solutions, Inc. (Cebu) is an IT company in Cebu City that provides information technology services and certification training, including courses and consulting in areas like cybersecurity, networking, and IT skills development. It helps individuals and businesses learn tech skills and improve their IT systems.",
      image: "https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-6/590623317_889934643358163_736802096095621842_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGCvm22l7uPf1K6tg_mRxl5zOrqemMOUm3M6up6Yw5SbYAf-rAALk3FqpoXqS6Xz_QJSteUbiyzbTl7UdNGTdCu&_nc_ohc=5HgTB_b0a_MQ7kNvwFEJjBf&_nc_oc=AdkxdM05rhzAliVQoGDG4am2PbJQ3n73_rnBE44SutFrbn1eVzMClaMjZEy4F2D1tJs&_nc_zt=23&_nc_ht=scontent.fdvo5-1.fna&_nc_gid=LOtZG-CJie9qMTQZemeBBw&oh=00_AfnlmiMrF-hCOl0X1VDELM0gOaLQPAK1HFrZy8ZjnQLgnQ&oe=694309BD",
    },
    {
      time: "4:30 PM",
      title: "Check in at Bai Hotel",
      description: "Bai Hotel is a modern luxury hotel located in Cebu City, Philippines. It offers upscale accommodations, dining options, a spa, and event facilities, making it a popular choice for both business and leisure travelers seeking comfort and convenience in the city.",
      image: "https://www.cebuballoons.com/wp-content/uploads/2018/02/Bai-Hotel-Photo-from-Inquirer.net_.jpg",
    },
    {
      time: "6:30 PM",
      title: "Dinner at our own choice",
      description: "We dined at Jollibee near Bai Hotel, enjoying familiar Filipino favorites in a convenient and casual setting, perfect for a quick and satisfying meal after our stay.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoEVr-tYXC54zIEfCiccuSNwH2-r8jnukAqi6IwGlNmWlYz04_9tMyQuF1hDFRDLaFQBnCFeqfU-PTj90AdJSd4_otCNO9gG_hPG275v_oL1_G5TEaxarh9KTmt2CnVR8XVmPHHF1LiA/s800/Bai+Hotel+in+Cebu+behind+Jollibee+Parkmall+Mandaue.jpg",
    },
  ],
};

const cebuDay2 = {
  day: 2,
  date: "Day 2 - Nature & Adventure",
  activities: [
    {
      time: "6:00 AM",
      title: "Breakfast at Bai Hotel",
      description: "Enjoy breakfast at the hotel and prepare for a day full of adventure and nature exploration.",
      image: "https://travelogue-portfolio.vercel.app/assets/dump-9-eX8HRAz5.jpg",
    },
    {
      time: "9:00 AM",
      title: "CIT-U Wildcat Innovation Labs",
      description: "We attended a CodeChum seminar at Cebu Institute of Technology–University (CIT-U), where we learned practical coding concepts and improved our programming skills through guided discussions and activities.",
      image: citCampusImage,
    },
    {
      time: "11:30 AM",
      title: "Buffet 101",
      description: "After our visit to **CIT-U**, we had lunch at **Buffet 101**, where we enjoyed a wide selection of local and international dishes, making it a relaxing and satisfying way to end the day.",
      image: buffet101Image,
    },
    {
      time: "2:00 PM",
      title: "Rivan IT Cebu",
      description: "Rivan IT Cebu introduced us to their company and gave a brief discussion about their services, while also teaching us basic networking concepts to help us better understand real-world IT practices.",
      image: rivanitImage,
    },
    {
      time: "5:30 PM",
      title: "Dinner at our own choice",
      description: "After returning to the hotel, we went to **McDonald’s near Bai Hotel** to grab a quick and familiar meal, enjoying the relaxed atmosphere as we rested and recharged after a long day of activities.",
      image: mcdoCebuImage,
    },
  ],
};

const cebuDay3 = {
  day: 3,
  date: "Day 3 - Cultural Exploration",
  activities: [
    {
      time: "6:00 AM",
      title: "Breakfast at Bai Hotel",
      description: "We had breakfast at Bai Hotel, enjoying a variety of dishes that gave us the energy to start our day and prepare for the tour ahead.",
      image: breakfastBaiImage,
    },
    {
      time: "10:00 AM",
      title: "Mata Technology Solutions, Inc.",
      description: "Mata Solutions, Inc. introduced us to their company and the services they offer, and they also gave a brief demonstration of their VR technology, allowing us to experience how it is used in their projects.",
      image: mataImage,
    },
    {
      time: "12:00 PM",
      title: "Lunch Buffet at Vikings",
      description: "After our tour, we had lunch at Vikings, indulging in a wide variety of delicious dishes and filling up well to prepare for our upcoming trip to Tagbilaran, Bohol.",
      image: vikingsLogoImage,
    },
    {
      time: "2:00 PM",
      title: "Proceed to Pier Departure to Tagbilaran, Bohol",
      description: "We **boarded a ferry to Bohol**, enjoying a scenic ride across the sea that lasted for about **two hours** as we traveled to our next destination.",
      image: pierImage,
    },
    {
      time: "5:00 PM",
      title: "Arrival at Tagbilaran, Bohol",
      description: "We arrived at Tagbilaran, Bohol after a long ferry sail, marking the beginning of another memorable part of our journey.",
      image: boholArrival3Image,
    },
    {
      time: "7:00 PM",
      title: "Check in at Vista Suites Hotel then Dinner buffet",
      description: "We arrived at Vista Suites Hotel feeling tired from the day’s travel. After checking in, we enjoyed a warm and satisfying dinner buffet, sharing stories and laughter before finally heading to our rooms to rest and recharge for the next day.",
      image: vistaSuitesImage,
    },
  ],
};



const photoDump = [
  { src: "https://travelogue-portfolio.vercel.app/assets/departure-5-C-1MCMZL.jpg", caption: "Flight" },
  { src: "https://travelogue-portfolio.vercel.app/assets/departure-8-DI5uqbDZ.jpg", caption: "Mactan Airport" },
  { src: "https://travelogue-portfolio.vercel.app/assets/lapulapu-4-Z4Cqo_VF.jpg", caption: "Painting depicting the Battle of Mactan" },
  { src: "https://travelogue-portfolio.vercel.app/assets/dump-1-Bk6V8Tu2.jpg", caption: "Morning view from Bai Hotel" },
  { src: "https://travelogue-portfolio.vercel.app/assets/worldtech-2-BFsvcIzZ.jpg", caption: "WorldTech Seminar" },
  { src: "https://travelogue-portfolio.vercel.app/assets/rivan-3-1Kwt0Zku.jpg", caption: "Rivan IT Cebu" },
  { src: "https://travelogue-portfolio.vercel.app/assets/rivan-7-Ca6EyF4q.jpg", caption: "Turles in Rivan IT Cebu" },
  { src: "https://travelogue-portfolio.vercel.app/assets/rivan-2-DYd7lfJQ.jpg", caption: "Activity in Rivan IT Cebu" },
  { src: "https://travelogue-portfolio.vercel.app/assets/codechum-3-DpPkIYy9.jpg", caption: "CIT Codechum Seminar" },
  { src: "https://travelogue-portfolio.vercel.app/assets/codechum-4-SySNqJOZ.jpg", caption: "CIT Campus" },
  { src: "https://travelogue-portfolio.vercel.app/assets/parian-2-C3b__q2Q.jpg", caption: "Heritage of Cebu Momentum" },
  { src: "https://travelogue-portfolio.vercel.app/assets/mata-2-BHDP_MFa.jpg", caption: "MATA Seminar" },
  { src: skatingImage, caption: "SM Sea Side Cebu" },
  { src: stoNinoHopeImage, caption: "Sto. Nino Hope of the Pilgrim Church" },
  { src: vikings2Image, caption: "Foods" },
  { src: ticketImage, caption: "Our Tickets to Cebu" },
];

const Cebu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Cebu"
        subtitle="3 Days in the Queen City of the South"
        backgroundImage="https://www.visitphilippines.org/wp-content/uploads/2016/04/Visit-Philippines-Cebu-City-780x405.jpg"
      />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Itinerary</h2>
          <DayItinerary {...cebuDay1} />
          <DayItinerary {...cebuDay2} />
          <DayItinerary {...cebuDay3} />
        </section>

        <section className="max-w-6xl mx-auto">
          <PhotoGallery title="Photo Dump 📸" photos={photoDump} />
        </section>
      </main>

      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Educational Trip Portfolio • Cebu & Bohol 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Cebu;
