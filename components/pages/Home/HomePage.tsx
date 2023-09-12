
import PrayerCards from "./PrayerCards";
import Notices from "./Notices";

const HomePage = () => {
  return (
    <div className="container mx-auto p-2 md:p-0">
      <PrayerCards />
      <Notices/>
    </div>
  );
};

export default HomePage;
