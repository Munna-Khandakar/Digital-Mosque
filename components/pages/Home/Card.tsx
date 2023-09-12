import React from "react";

const Card = ({
  primaryName,
  secondaryName,
  time,
}: {
  primaryName: string;
  secondaryName?: string;
  time: string;
}) => {
  return (
    <div className="flex justify-between items-center border rounded px-2 py-5 shadow min-h-[80px]">
      <div className="flex flex-col gap-1">
        <span className="text-slate-500 leading-6 font-semibold text-lg">
          {primaryName}
        </span>
        {secondaryName && (
          <span className="text-slate-400 leading-3 font-normal text-xs">
            {secondaryName}
          </span>
        )}
      </div>
      <div className="flex flex-col items-end">
        <span className="text-slate-500 leading-6 font-semibold text-lg">
          {time}
        </span>
        {/* <span className="text-slate-400 leading-3 font-normal text-xs">
          আর ২ মিনিট বাকি
        </span> */}
      </div>
    </div>
  );
};

export default Card;
