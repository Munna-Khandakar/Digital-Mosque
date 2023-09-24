import React from "react";
import Card from "./Card";
import MosqueSelector from "./MosqueSelector";

const PrayerCards = () => {
  return (
    <>
      <div className="py-5 flex  flex-col md:flex-row justify-center md:justify-between items-center">
        <span className="text-slate-500 leading-6 font-semibold text-xl mb-6 md:mb-0">
          নামাজের সূচি
        </span>

       <MosqueSelector/>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        <Card primaryName="ফজর" secondaryName="Fajr" time="5.20 am" />
        <Card primaryName="জোহর" secondaryName="Zuhar" time="5.20 am" />
        <Card primaryName="আসর" secondaryName="Asar" time="5.20 am" />
        <Card primaryName="মাগরিব" secondaryName="Maghrib" time="5.20 am" />
        <Card primaryName="ইশা" secondaryName="Isha" time="5.20 am" />
      </div>
    </>
  );
};

export default PrayerCards;
