import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { CitySearchFilters } from "@/constants/filters";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Jobs | Dev Overflow",
};

const page = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Job Title, Company, or Keywords"
          otherClasses="flex-1"
        />

        <Filter
          filters={CitySearchFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
    </>
  );
};

export default page;
