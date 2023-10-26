import BgImg from "../assets/images/HomePageIMG.jpg";

const MainPage = () => {
  const WelcomeStyle = {
    backgroundImage: `url(${BgImg})`,
  };

  return (
    <div className="h-screen">
      <div style={WelcomeStyle} className="bg-cover bg-center h-full relative">
        <div className="h-full absolute inset-0 flex items-center justify-center">
          <div className="p-4">
            <p className="text-6xl text-black">CodeByte Library</p>
            <div>
              Search bar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
