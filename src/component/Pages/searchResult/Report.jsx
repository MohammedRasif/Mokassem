import React from "react";
import { FcOk } from "react-icons/fc";

const Report = () => {
  return (
    <div className="text-gray-50 bg-black py-10 px-4 ">
      {/* Header */}
      <div className=" container mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          AVOIDING THE MOST COMMON MISTAKES IN DATA ANALYSIS FOR BUSINESS REPORTS
        </h1>
        <p className="mt-3 text-sm text-gray-500 uppercase">
          Lessons I learned the hard way (so you don’t have to)
        </p>

        {/* Intro */}
        <p className="mt-6">
          There’s something both exciting and scary about building your first
          business report. You’ve got all the data, the charts are looking great,
          and then someone from the business side asks:
        </p>
        <blockquote className="border-l-4 border-green-500 pl-4 italic my-4">
          “Why is the revenue number so low here?”
        </blockquote>
        <p>
          That one question can unravel hours of effort if your analysis isn’t
          solid. As someone who daily works with data, I’ve seen how small
          mistakes can lead to big business misreadings. So here’s a breakdown of
          the most common mistakes I’ve made (and seen) in data analysis — and how
          to avoid them.
        </p>

        {/* Sections */}
        <div className="mt-12 space-y-8">
          {/* Section 1 */}
          <div >
            <h2 className="text-2xl font-bold">
              1. Not Understanding the Business Question
            </h2>
            <p className="mt-4">
              You can have the cleanest data and still produce the wrong answer if
              you don’t know what question you’re answering. The real danger is
              bosses only to find out later they didn’t help the decision-makers at
              all.
            </p>
            <div className="mt-4">
              <h3 className="flex items-center gap-1"> <FcOk/> FIX: Ask before analyzing data questions</h3>
              <p>
                What decision will this report support? What metric matters the
                most?
              </p>
            </div>
          </div>
          {/* Section 2 */}
          <div >
            <h2 className="text-2xl font-bold">
             2. Using the Wrong Data
            </h2>
            <p className="mt-4">
            One time, I pulled sales data from a test table instead of the
              production one. The numbers looked real — until we realized we were
              reporting fake transactions to leadership. Not fun.
            </p>
            <div className="mt-4">
              <h3 className="flex items-center gap-1"> <FcOk/> Always validate your data source</h3>
              <p>
                Double-check the freshness, completeness, and correctness of the
                data you’re using.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div >
            <h2 className="text-2xl font-bold">
              3. Ignoring Missing or Incomplete Data
            </h2>
            <p className="mt-4">
            A few missing values might not seem like a big deal, but they can
              shift your analysis totals. And yet I’ve seen big monthly reports go
              out before just because of a few blank rows.
            </p>
            <div className="mt-4">
              <h3 className="flex items-center gap-1"> <FcOk/> Run missing value checks</h3>
              <p>
                Handle smartly, code carefully, and always explain what you’ve
                done.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div >
            <h2 className="text-2xl font-bold">
              4. Misinterpreting Correlation and Causation
            </h2>
            <p className="mt-4">
            I once spotted numbers move together in one analysis where increased
              rainfall was “causing” customer drop-off. It looked convincing — the
              graphs lined up perfectly — but I forgot to consider the seasonal
              dip that happens every year.
            </p>
            <div className="mt-4">
              <h3 className="flex items-center gap-1"> <FcOk/> Dig deeper before drawing conclusions</h3>
              <p>
              Use timelines, context, and other variables to verify your
                story.
              </p>
            </div>
          </div>

         
         
         
        </div>

        {/* Footer */}
        <div className="mt-10">
          <a
            href="#"
            className="text-green-600 font-semibold hover:underline"
          >
            View report
          </a>
        </div>
      </div>
    </div>
  );
};

export default Report;
