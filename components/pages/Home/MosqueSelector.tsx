"use client";
import axiosInstance from "@/requests/client";
import React from "react";
import useSWR from "swr";

type Props = {};

export default function MosqueSelector({}: Props) {
  const {
    data: mosques,
    error,
    isLoading,
  } = useSWR("/api/mosque", async (url) => {
    try {
      const res = await axiosInstance.get("mosque");
      return res?.data;
    } catch (error) {
      console.log("error", error);
    }
  });
  if (isLoading) {
    return (
      <div role="status" className="max-w-sm animate-pulse flex justify-center items-center gap-2">
        <div className="h-3 bg-gray-200 rounded-full w-[160px] mb-2.5"></div>
        <div className="h-5 bg-gray-200 rounded w-20 mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center gap-1">
      <label
        htmlFor="template"
        className="text-xs font-bold uppercase tracking-widest text-slate-500"
      >
        মসজিদ সিলেক্ট করুন
      </label>
      {Array.isArray(mosques) && mosques.length > 0 ? (
        <select
          className="form-select border py-2 px-1 rounded"
          aria-label="Default select example"
        >
          {mosques.map((mosque, index) => (
            <option value="multi_image_offer_with_countdown" key={index}>
              {mosque?.name}
            </option>
          ))}
        </select>
      ) : (
        <>
          <p>no mosque found</p>
        </>
      )}
    </div>
  );
}
