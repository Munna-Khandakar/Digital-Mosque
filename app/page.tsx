export default function Home() {
  const Card = ({ name, time }: { name: string; time: string }) => {
    return (
      <div className="flex justify-between border rounded px-2 py-5 shadow">
        <span className="text-slate-400 leading-6 font-semibold text-lg">
          {name}
        </span>
        <span className="text-slate-400 leading-6 font-semibold text-lg">
          {time}
        </span>
      </div>
    );
  };
  return (
  
      <div className="container mx-auto p-2 md:p-0">
        <div className="py-5 flex  flex-col md:flex-row justify-center md:justify-between items-center">
          <span className="text-slate-500 leading-6 font-semibold text-xl mb-6 md:mb-0">
            নামাজের সূচি
          </span>

          <div className="flex flex-row items-center gap-2">
            <label
              htmlFor="template"
              className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500"
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
          <Card name="ফজর" time="5.20 am" />
          <Card name="জোহর" time="5.20 am" />
          <Card name="আসর" time="5.20 am" />
          <Card name="মাগরিব" time="5.20 am" />
          <Card name="ইশা" time="5.20 am" />
        </div>
      </div>
   
  );
}
