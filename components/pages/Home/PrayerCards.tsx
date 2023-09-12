import React from "react";
import Card from "./Card";

const PrayerCards = () => {
  return (
    <>
      <div className="py-5 flex  flex-col md:flex-row justify-center md:justify-between items-center">
        <span className="text-slate-500 leading-6 font-semibold text-xl mb-6 md:mb-0">
          নামাজের সূচি
        </span>

        <div className="flex flex-row items-center gap-1">
          <label
            htmlFor="template"
            className="text-xs font-bold uppercase tracking-widest text-slate-500"
          >
            মসজিদ সিলেক্ট করুন
          </label>
          <select
            className="form-select border py-2 px-1 rounded"
            aria-label="Default select example"
          >
            <option selected>সেন্ট্রাল মসজিদ </option>
            <option value="multi_image_offer_with_countdown">
              বিন্দাবন মসজিদ
            </option>
            <option value="2">প্রান্তিক পার্ক মসজিদ </option>
          </select>
        </div>
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
