import React from "react";

const Notices = () => {
  const NoticeCard = ({ text }: { text: string }) => {
    return (
      <div className="flex flex-row gap-1">
        <div className="p-[2px] rounded-md bg-teal-400 min-h-min" />
        <span className="text-slate-500 leading-6 font-normal text-base text-justify py-2">
          {text}
        </span>
      </div>
    );
  };

  return (
    <div className="mt-10">
      <span className="text-slate-500 leading-6 font-semibold text-xl mb-6 md:mb-0">
        নোটিশ
      </span>
      <div className="space-y-6 mt-2">
        <NoticeCard
          text="সকলের অবগতি এর জন্য জানানো. যাচ্ছে যে দোয়া করে কেউ ওজুর 
সময় পানি নষ্ট করবেন না"
        />
        <NoticeCard text="আগামী শুক্রবার আসরের নামাজের পরে ইসলামিক কুইজ হবে" />
        <NoticeCard text="রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন: 'আসরের সময় সূর্য হলুদ হওয়া পর্যন্ত স্থায়ী হয়।' আমরা জানি যে, যোহরের সময় শেষ হলেই আছরের সময় শুরু হয়, অর্থাৎ যখন কোনো বস্তুর ছায়ার দৈর্ঘ্য বস্তুর দৈর্ঘ্যের সমান হয়ে যায়।" />
      </div>
    </div>
  );
};

export default Notices;
