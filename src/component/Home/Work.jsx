import React from "react";
import backgroundimg from "../../image/Frame 1707483214.png";
import flowImg from "../../image/Group 2147225367.png";
import {
  FileText,
  Database,
  Globe,
  Briefcase,
  AlertTriangle,
  Building,
  Leaf,
  Map,
  CloudRain,
} from "lucide-react";

// Data for "How it work" steps
const howItWorkSteps = [
  {
    id: 1,
    icon: FileText,
    title: "Query Input",
    description:
      "Ask questions like 'Best location for solar energy in Asia?' or upload documents, maps, and satellite images.",
  },
  {
    id: 2,
    icon: Database,
    title: "AI + Data Fusion",
    description:
      "Advanced LLMs process your query with real-time Earth and space intelligence datasets for comprehensive insights and foresights",
  },
  {
    id: 3,
    icon: Globe,
    title: "360° Insights",
    description:
      "Receive structured P.E.S.T.E.L. analysis with maps, charts, and actionable recommendations",
  },
];

// Data for "Use cases" cards
const useCaseCards = [
  {
    icon: Briefcase,
    color: "text-blue-400", // #3B82F6
    title: "Business Setup",
    description:
      "Make informed business decisions using real-time geographic data.",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-400", // #F59E0B
    title: "Disaster Risk Analysis",
    description:
      "Assess the risk of natural disasters like floods, earthquakes, and more.",
  },
  {
    icon: Building,
    color: "text-cyan-400", // #06B6D4
    title: "Infrastructure Development",
    description:
      "Plan roads, utilities, or industrial zones using terrain, stability, and regulatory data.",
  },
  {
    icon: Leaf,
    color: "text-green-400", // #10B981
    title: "Environmental Analysis",
    description:
      "Track environmental impacts such as climate change or pollution.",
  },
  {
    icon: Map,
    color: "text-purple-400", // #8B5CF6
    title: "Urban Planning",
    description:
      "Plan smarter cities by leveraging satellite data for growth projections.",
  },
  {
    icon: CloudRain,
    color: "text-pink-400", // #EC4899
    title: "Climate Change & Impact Assessment",
    description:
      "Optimize crop planning with forecasts on rainfall, soil health, and temperature trends.",
  },
];

function Work() {
  return (
   <div className="bg-black text-white relative">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={backgroundimg}
      alt="Dark space background with a planet"
      className="w-full h-full object-cover opacity-50 "
    />
  </div>

      {/* How it work section */}
      <section className="relative z-10 py-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          {/* Header */}
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-gray-700 text-gray-400 mb-4">
              How it work
            </span>
            <h2 className="text-5xl font-semibold bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text pb-4 max-w-5xl">
              These simple steps unlock comprehensive insights from global data
              sources
            </h2>
          </div>

          {/* Flow section */}
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0 md:space-x-8 pt-16 md:pt-30 container mx-auto">
            {/* Flow Image */}
            <img
              src={flowImg}
              alt="Blue wavy line connecting steps"
              className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 lg:-ml-10"
              style={{ width: "95%", height: "auto" }}
            />

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center md:text-left md:items-start max-w-xs z-10 top-[40vh] ">
              <span className="absolute text-[10rem] font-bold text-white -top-10 md:relative md:top-auto md:left-auto md:text-[8rem] md:opacity-10"></span>
              <h3 className="text-[27px] font-semibold mb-2 relative z-10">
                Query Input
              </h3>
              <p className="text-white text-sm relative z-10">
                Ask questions like 'Best location for solar energy in Asia?' or
                upload documents, maps, and satellite images.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center md:text-left md:items-start max-w-xs z-10 top-[22vh] left-48">
              <span className="absolute text-[10rem] font-bold text-white/10 -top-10 md:relative md:top-auto md:left-auto md:text-[8rem] md:opacity-10"></span>
              <h3 className="text-[27px] font-semibold mb-2 relative z-10">
                AI + Data Fusion
              </h3>
              <p className="text-gray-300 text-sm relative z-10">
                Advanced LLMs process your query with real-time Earth and space
                intelligence datasets for comprehensive insights and foresights
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center md:text-left md:items-start max-w-xs z-10 -top-[31vh] left-[17vh]">
              <span className="absolute text-[10rem] font-bold text-white/10 -top-10 md:relative md:top-auto md:left-auto md:text-[8rem] md:opacity-10">
                3
              </span>
              <h3 className="text-[27px] font-semibold mb-2 relative z-10">
                360° Insights
              </h3>
              <p className="text-gray-300 text-sm relative z-10">
                Receive structured P.E.S.T.E.L. <br /> analysis with maps,
                charts, and actionable recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases section */}
      <section className="relative z-10 bg-black/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          {/* Header */}
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-gray-700 text-gray-400 mb-4">
              Use cases
            </span>
            <h2 className="text-5xl font-semibold bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text pb-4 max-w-7xl">
              Explore how our platform benefits businesses, environmentalists,
              disaster response, and other critical industries
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  border-gray-800">
            {/* Card 1 */}
            <div className=" p-6 flex flex-col items-start text-left border-r border-gray-400">
              <div className="flex items-center mb-4">
                <Briefcase className="w-12 h-12 mr-2 text-blue-400" />
                <h3 className="text-[24px] font-semibold text-blue-400">
                  Business Setup
                </h3>
              </div>
              <p className="text-gray-300 text-md">
                Make informed business decisions using real-time geographic
                data.
              </p>
            </div>

            {/* Card 2 */}
            <div className=" p-6 flex flex-col items-start text-left border-r border-gray-400">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-12 h-12 mr-2 text-orange-400" />
                <h3 className="text-[24px] font-semibold text-orange-400">
                  Disaster Risk Analysis
                </h3>
              </div>
              <p className="text-gray-300 text-md">
                Assess the risk of natural disasters like floods, earthquakes,
                and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className=" p-6 flex flex-col items-start text-left ">
              <div className="flex items-center mb-4">
                <Building className="w-12 h-12 mr-2 text-cyan-400" />
                <h3 className="text-[24px] font-semibold text-cyan-400">
                  Infrastructure Development
                </h3>
              </div>
              <p className="text-gray-300 text-md">
                Plan roads, utilities, or industrial zones using terrain,
                stability, and regulatory data.
              </p>
            </div>

            {/* Card 4 */}
            <div className=" p-6 flex flex-col items-start text-left border-r border-gray-400">
              <div className="flex items-center mb-4">
                <Leaf className="w-12 h-12 mr-2 text-green-400" />
                <h3 className="text-[24px] font-semibold text-green-400">
                  Environmental Analysis
                </h3>
              </div>
              <p className="text-gray-300 text-md">
                Track environmental impacts such as climate change or pollution.
              </p>
            </div>

            {/* Card 5 */}
            <div className=" p-6 flex flex-col items-start text-left border-r border-gray-400">
              <div className="flex items-center mb-4">
                <Map className="w-12 h-12 mr-2 text-purple-400" />
                <h3 className="text-[24px] font-semibold text-purple-400">
                  Urban Planning
                </h3>
              </div>
              <p className="text-gray-300 text-md">
                Plan smarter cities by leveraging satellite data for growth
                projections.
              </p>
            </div>

            {/* Card 6 */}
            <div className=" p-6 flex flex-col items-start text-left">
              <div className="flex items-center mb-4">
                <CloudRain className="w-12 h-12 mr-2 text-pink-400" />
                <h3 className="text-[24px] font-semibold text-pink-400">
                  Climate Change & Impact Assessment
                </h3>
              </div>
              <p className="text-gray-300 text-md">
                Optimize crop planning with forecasts on rainfall, soil health,
                and temperature trends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
