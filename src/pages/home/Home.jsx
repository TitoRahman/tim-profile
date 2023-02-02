import React from "react";
import { FaBorderAll, FaPaintBrush, FaDev, FaServer } from "react-icons/fa";

// Call Component Home
import Sliders from "./CompSliders";
import AboutUs from "./CompAboutUs";
import Features from "./CompFeatures";
import Projects from "./CompProjects";
import Clients from "./CompClients";

const Home = () => {
  const slidersData = [
    {
      mTitle: "we provide solutions and ideas for your web app",
      mDescription:
        "we are always ready to provide solutions for your web app. we are experienced in web app projects since 2019",
      mLink: "/about",
    },
  ];
  const aboutUsData = {
    mDescription:
      "Speedwagon is a professional web design and development company that creates innovative and high-quality digital solutions for businesses. Our team of experts delivers stunning websites, powerful apps, and engaging designs that meet clients' needs and goals. With a commitment to excellence, we provide the best possible experience for our clients.",
    mLink: "about",
  };
  const featuresData = [
    {
      mLogo: FaBorderAll,
      mTitle: "UI/UX design",
      mDescription: "We design a good UI/UX according to your needs",
    },
    {
      mLogo: FaDev,
      mTitle: "Web App Development",
      mDescription: "We develop Web App according to your needs",
    },
    {
      mLogo: FaServer,
      mTitle: "Maintenance",
      mDescription: "we perform maintenance for your web app project",
    },
    {
      mLogo: FaPaintBrush,
      mTitle: "Graphic Design",
      mDescription: "we design assets for your project",
    },
  ];
  const proyekData = [
    {
      mTitle: "Genius",
      mDescription: "Online learning application",
    },
  ];
  const clientData = {
    mDescription:
      "Our clients are the driving force behind everything we do at Speedwagon and we strive to deliver personalized digital solutions to meet their needs and goals.",
    mClientList: [
      "https://logosmarcas.net/wp-content/uploads/2021/11/Meta-Logo.png",
      "https://1.bp.blogspot.com/-QX9V30yKSnY/XnK1EwNfPoI/AAAAAAAASbw/ynfzj_RgdOU7DkpYIXRC18GWMu6kKCtkQCLcBGAsYHQ/s1600/GoPay.png",
      "https://th.bing.com/th/id/R.44bb9ce0af9de6ca7dfbba7428d7c4f4?rik=zB0NbwKqALur8g&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f10%2fFiverr-Logo.png&ehk=h45sJ0i%2bwIYggBVKSdxRuIfOiyPZbh3HkDqPm48LSBY%3d&risl=&pid=ImgRaw&r=0",
      "https://www.mikroskil.ac.id/pustaka/template/default/img/logo.png",
      "https://www.mikroskil.ac.id/pustaka/template/default/img/logo.png",
      "https://1.bp.blogspot.com/-rmLjPMKtx7k/XnK070LoSRI/AAAAAAAASbs/i2kIFlIzh0MUpnLZzeFoXgYN-a0EpZRvwCLcBGAsYHQ/s1600/OVO.png",
      "https://logospng.org/download/spotify/logo-spotify-icon-4096.png",
      "https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-8.png",
    ],
  };
  return (
    <>
      <div className="bg-second-dark">
        {/* Sliders */}
        <Sliders />
        {/* About Us */}
        <AboutUs
          mDescription={aboutUsData.mDescription}
          mLink={aboutUsData.mLink}
        />
        {/* Our Best At */}
        <Features featuresData={featuresData} />
        {/* List Design or Project */}
        <Projects />
        {/* Client */}
        <Clients
          mDescription={clientData.mDescription}
          clientData={clientData}
        />
      </div>
    </>
  );
};

export default Home;
