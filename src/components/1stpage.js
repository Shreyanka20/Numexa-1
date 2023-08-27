// import React from 'react';
// import ShimmerButton from './shimmer/shimmer-button';
// import { ChevronRight } from "lucide-react";

// const FirstPage = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center" style={{ marginTop: '-80px' }}>
//       <div className="text-center p-6">
//         <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700">
//           Transparency and Cost Control
//         </h1>
//         <h1 className="text-black text-8xl font-semibold mb-4">FOR AI OPERATIONS</h1>
//         <h4 className="text-gray-600 text-lg font-medium" style={{ marginTop: '12px' }}>
//           NUMEXA is the ultimate AI-powered tool that brings transparency, control, and cost optimization to your AI/ML operations.
//         </h4>
//         <h4 className="text-gray-600 text-lg font-medium">
//           It is a sophisticated platform designed to streamline the use and management of large language models (LLMs) for developers and enterprises.
//         </h4>
//         <div className="grid md:grid-cols-1 place-items-center mt-20">
//           <ShimmerButton
//             className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px rgba(72, 187, 120, 0.5))]"
//             background="linear-gradient(to right, #48BB78, #81E6D9)"
//             onClick={() => {
//               // router.push("/login");
//             }}
//           >
//             <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-yelll dark:from-yellow dark:to-slate-900/10 dark:text-transparent z-10">
//               Get started for free
//             </span>
//             <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
//           </ShimmerButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstPage;
import React from 'react';
import ShimmerButton from './shimmer/shimmer-button';
import { ChevronRight } from "lucide-react";

const FirstPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center" style={{ marginTop: '-80px' }}>
      <div className="text-center p-6">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700">
          <span className="font-bold">Transparency and Cost Control</span>
        </h1>
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300">
          <span className="font-bold">For AI Operations</span>
        </h1>
        {/* <h1 className=" text-6xl font-semibold mb-4" style={{ color: '#333' }}>
           <span className="font-extrabold text-[#555]">FOR AI OPERATIONS</span>
        </h1> */}
        <h4 className="text-gray-600 text-lg font-medium" style={{ marginTop: '12px' }}>
          NUMEXA is the ultimate AI-powered tool that brings transparency, control, and cost optimization to your AI/ML operations.
        </h4>
        <h4 className="text-gray-600 text-lg font-medium">
          It is a sophisticated platform designed to streamline the use and management of large language models (LLMs) for developers and enterprises.
        </h4>
        <div className="grid md:grid-cols-1 place-items-center mt-20">
          <ShimmerButton
            className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px rgba(72, 187, 120, 0.5))]"
            background="linear-gradient(to right, #48BB78, #81E6D9)"
            onClick={() => {
              // router.push("/login");
            }}
          >
            <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-yelll dark:from-yellow dark:to-slate-900/10 dark:text-transparent z-10">
              Get started for free
            </span>
            <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
