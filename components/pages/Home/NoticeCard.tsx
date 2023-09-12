import React from "react";

const NoticeCard = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row space-x-2 border border-teal-400 rounded bg-teal-50 pr-2">
      <div className="p-[2px] bg-teal-400 min-h-min" />
      <span className="text-slate-500 leading-6 font-normal text-base text-justify py-2">
        {text}
      </span>
    </div>
  );
};

export default NoticeCard;
