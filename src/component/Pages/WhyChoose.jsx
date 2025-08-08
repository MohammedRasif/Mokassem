import React from 'react';
import image from "../../image/Vector (2).png"

import { Database, MapPin, Brain, Globe, XCircle, CheckCircle } from 'lucide-react';

function WhyChoose() {
const features = [
  {
    icon: <Database className="w-12 h-12 text-white lg:mt-2" />,
    title: 'Multi-source Intelligence',
    description: 'Real-time data from NASA, UN, World Bank, and other authoritative sources',
  },
  {
    icon: <MapPin className="w-12 h-12 text-white lg:mt-2" />,
    title: 'Geo-aware Context',
    description: 'Unlike traditional AI, our platform understands geographical and temporal context',
  },
  {
    icon: <Brain className="w-12 h-12 text-white lg:mt-2" />,
    title: 'GPT-powered Synthesis',
    description: 'Advanced AI models process and synthesize complex data relationships',
  },
  {
    icon: <Globe className="w-12 h-12 text-white lg:mt-2" />,
    title: 'Global & Local Perspectives',
    description: 'Seamlessly blend global trends with hyper-local insights',
  },
];

const comparisonData = [
  { feature: 'REAL-TIME GLOBAL DATA', traditional: false, earthAiQ: true },
  { feature: 'GEO-SPATIAL AWARENESS', traditional: false, earthAiQ: true },
  { feature: 'PESTEL FRAMEWORK', traditional: false, earthAiQ: true },
  { feature: 'ADVANCE FORESIGHT CAPABILITIES', traditional: false, earthAiQ: true },
  { feature: 'DEEP INDUSTRY KNOWLEDGE', traditional: false, earthAiQ: true },
  { feature: 'CONTEXT-RICH ANALYSIS', traditional: false, earthAiQ: true },
  { feature: 'SATELLITE AUGMENTED INTELLIGENCE', traditional: false, earthAiQ: true },
];

return (
  <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      {/* Top Section: Tag, Heading, and Planet Image */}
      <div className="text-center mb-16 flex flex-col items-center relative">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-gray-700 text-gray-400 mb-4">
          why choose Earth Ai-Q
        </span>
        <h2 className="text-5xl font-semibold bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text pb-4  leading-tight">
          We combine real-time Earth data with AI to deliver smarter insights for confident planning
        </h2>
        <img
          src={image}
          alt="Planet with rings"
          width={250}
          height={250}
          className="absolute top-10 -right-20 mt-10 mr-10 hidden lg:block opacity-40"
        />
      </div>

      {/* Feature Blocks Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 p-4">
            <div className="flex-shrink-0 ">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-md">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table Section */}
       <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-white text-center mb-8">TRADITIONAL AI VS EARTH AI-Q</h3>
        <div className="grid grid-cols-3 gap-4 text-gray-300 text-sm font-medium border-b border-gray-700 pb-4 mb-4">
          <div className="col-span-1"></div> {/* Empty for the feature column header */}
          <div className="text-center pl-28">TRADITIONAL AI</div>
          <div className="text-center">EARTH AI-Q</div>
        </div>
        {comparisonData.map((row, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-700 last:border-b-0">
            <div className="col-span-1 text-white">{row.feature}</div>
            <div className="text-center  pl-24">
              {row.traditional ? (
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mx-auto" />
              )}
            </div>
            <div className="text-center">
              {row.earthAiQ ? (
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mx-auto" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default WhyChoose;
