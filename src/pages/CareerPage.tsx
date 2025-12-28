// // src/pages/CareerPage.tsx
// import React, { useState } from "react";
// import CareerSection from "./CareerSection";
// import { 
//   ChevronDown, 
//   MapPin, 
//   Briefcase, 
//   Clock, 
//   Zap, 
//   CheckCircle2, 
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// interface JobOpening {
//   title: string;
//   department: string;
//   type: "Internship" | "Full-time" | "Training";
//   duration: string;
//   description: string;
// }

// const CareerPage = () => {
//   const [activeJob, setActiveJob] = useState<number | null>(null);
//   const navigate = useNavigate();

//   const jobOpenings: JobOpening[] = [
//     {
//       title: "Manufacturing Intern",
//       department: "Manufacturing",
//       type: "Internship",
//       duration: "1-6 months",
//       description:
//         "Work in real manufacturing units and learn core industry skills from production to quality checks. Gain hands-on experience in our luxury footwear production line.",
//     },
//     {
//       title: "Design Intern",
//       department: "Design",
//       type: "Internship",
//       duration: "1-6 months",
//       description:
//         "Get exposure to advanced technologies and creative problem solving in our design labs. Assist in the conceptualization and development of new footwear styles.",
//     },
//     {
//       title: "Quality Control Specialist",
//       department: "Quality Assurance",
//       type: "Full-time",
//       duration: "Permanent",
//       description:
//         "Ensure quality in products and processes while working closely with our expert QA teams. Conduct rigorous testing and implement quality standards.",
//     },
//     {
//       title: "Retail Management Trainee",
//       department: "Retail",
//       type: "Training",
//       duration: "3-6 months",
//       description:
//         "Understand the real challenges and rewards of retail operations and management in the footwear industry. Learn inventory management, sales strategy, and customer service.",
//     },
//   ];

//   const toggleJobDetails = (index: number) => {
//     setActiveJob(activeJob === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-800 w-full overflow-x-hidden">
//       {/* Hero Section */}
//       <CareerSection />
      
//       {/* Main Content */}
//       <main className="w-full py-6 md:py-10">
//         <div className="w-full space-y-16 md:space-y-24">
          
//           {/* College Partnerships */}
//           <section className="w-full py-8">
//             <div className="w-full px-4 sm:px-8 lg:px-12">
//               {/* Heading */}
//               <h2 className="text-3xl font-serif font-bold text-amber-900">
//                 College, University Partnerships &amp; Student Opportunities
//               </h2>

//               {/* Intro text */}
//               <p className="mt-4 max-w-4xl text-sm sm:text-base leading-relaxed text-[#444444]">
//                 DTK Footwear actively collaborates with top colleges and
//                 universities to provide:
//               </p>

//               {/* Cards grid - Expanded Width */}
//               <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//                 {/* Card 1 */}
//                 <div className="flex h-full border border-[#ded8cf] bg-[#fbf6ee] shadow-sm">
//                   <div className="w-1 bg-amber-900" />
//                   <div className="flex-1 px-6 py-5">
//                     <h3 className="text-lg font-semibold text-[#222222]">
//                       Internships for college students and recent graduates
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-[#555555]">
//                       Opportunities in manufacturing, design, quality assurance,
//                       retail, HR, and customer service.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="flex h-full border border-[#ded8cf] bg-[#fbf6ee] shadow-sm">
//                   <div className="w-1 bg-amber-900" />
//                   <div className="flex-1 px-6 py-5">
//                     <h3 className="text-lg font-semibold text-[#222222]">
//                       Industrial Training Programs
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-[#555555]">
//                       Aligned with academic curriculum, giving hands-on experience
//                       on real-time projects.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="flex h-full border border-[#ded8cf] bg-[#fbf6ee] shadow-sm">
//                   <div className="w-1 bg-amber-900" />
//                   <div className="flex-1 px-6 py-5">
//                     <h3 className="text-lg font-semibold text-[#222222]">
//                       Campus Drives and Recruitment Programs
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-[#555555]">
//                       Across Maharashtra and India.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Card 4 */}
//                 <div className="flex h-full border border-[#ded8cf] bg-[#fbf6ee] shadow-sm">
//                   <div className="w-1 bg-amber-900" />
//                   <div className="flex-1 px-6 py-5">
//                     <h3 className="text-lg font-semibold text-[#222222]">
//                       Skill Development Workshops
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-[#555555]">
//                       By industry veterans including Mr. Kamble.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom text */}
//               <p className="mt-10 max-w-5xl text-sm sm:text-base leading-relaxed text-[#444444]">
//                 We encourage colleges and universities to connect with us for
//                 customized student development programs, tailored industrial visits,
//                 and collaborative research projects.
//               </p>
//             </div>
//           </section>

//           {/* Benefits & Perks */}
//           <section className="w-full mt-2">
//             <div className="w-full px-4 sm:px-8 lg:px-12">
//               {/* Heading */}
//               <h2 className="text-3xl font-serif font-bold text-amber-900">
//                 Benefits &amp; Perks (For Interns &amp; Employees)
//               </h2>

//               {/* Cards - Expanded Layout */}
//               <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//                 {/* Card 1 */}
//                 <div className="flex flex-col justify-between bg-[#ebe2d3] px-6 py-6 shadow-sm">
//                   <div className="mb-4 flex items-center justify-start">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-white text-xl">
//                       💰
//                     </div>
//                   </div>
//                   <p className="text-base font-medium text-[#333333]">
//                     Stipends for select programs
//                   </p>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="flex flex-col justify-between bg-[#ebe2d3] px-6 py-6 shadow-sm">
//                   <div className="mb-4 flex items-center justify-start">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-white text-xl">
//                       🏅
//                     </div>
//                   </div>
//                   <p className="text-base font-medium text-[#333333]">
//                     Certificates of training and internship
//                   </p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="flex flex-col justify-between bg-[#ebe2d3] px-6 py-6 shadow-sm">
//                   <div className="mb-4 flex items-center justify-start">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-white text-xl">
//                       💼
//                     </div>
//                   </div>
//                   <p className="text-base font-medium text-[#333333]">
//                     Placement Assistance for outstanding performers
//                   </p>
//                 </div>

//                 {/* Card 4 */}
//                 <div className="flex flex-col justify-between bg-[#ebe2d3] px-6 py-6 shadow-sm">
//                   <div className="mb-4 flex items-center justify-start">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-white text-xl">
//                       🕒
//                     </div>
//                   </div>
//                   <p className="text-base font-medium text-[#333333]">
//                     Flexible timings during academic exams
//                   </p>
//                 </div>

//                 {/* Card 5 */}
//                 <div className="flex flex-col justify-between bg-[#ebe2d3] px-6 py-6 shadow-sm">
//                   <div className="mb-4 flex items-center justify-start">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-white text-xl">
//                       📚
//                     </div>
//                   </div>
//                   <p className="text-base font-medium text-[#333333]">
//                     Skill development resources
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Current Vacancies */}
//           <section className="w-full space-y-8 animate-fade-in delay-200 px-4 sm:px-8 lg:px-12">
//             <div className="text-center space-y-4">
//               <h3 className="text-3xl font-serif font-bold text-amber-900">
//                 <span>👞</span> Current Open Positions
//               </h3>
//               <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
//                 Internship duration typically ranges from 1 to 6 months, with
//                 flexible start dates based on academic schedules.
//               </p>
//             </div>

//             <div className="space-y-4 w-full">
//               {jobOpenings.map((job, index) => (
//                 <div
//                   key={index}
//                   className="bg-white border border-gray-200 rounded-xl md:rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-lg hover:border-amber-200"
//                 >
//                   <button
//                     className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left p-5 md:p-6 hover:bg-amber-50/50 transition-colors"
//                     onClick={() => toggleJobDetails(index)}
//                   >
//                     <div className="flex-1">
//                       <h4 className="text-lg md:text-2xl font-bold text-amber-900 mb-2">
//                         {job.title}
//                       </h4>
//                       <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
//                         <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold">
//                           {job.department}
//                         </span>
//                         <span
//                           className={`px-3 py-1 rounded-full font-semibold ${
//                             job.type === "Full-time"
//                               ? "bg-emerald-100 text-emerald-800"
//                               : job.type === "Internship"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : "bg-blue-100 text-blue-800"
//                           }`}
//                         >
//                           {job.type}
//                         </span>
//                         <span className="text-gray-500 flex items-center bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
//                           <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-amber-600" />
//                           Pune • {job.duration}
//                         </span>
//                       </div>
//                     </div>
//                     <ChevronDown
//                       className={`w-6 h-6 transform transition-transform duration-300 text-amber-700 flex-shrink-0 self-start md:self-center mt-1 md:mt-0 ${
//                         activeJob === index ? "rotate-180" : "rotate-0"
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`transition-all duration-500 ease-in-out overflow-hidden bg-gray-50 ${
//                       activeJob === index
//                         ? "max-h-96 opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="p-5 md:p-6 border-t border-gray-100 text-gray-700">
//                       <p className="leading-relaxed">{job.description}</p>
//                       <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                         <p className="text-sm italic text-gray-500">
//                           * Certificate provided upon completion.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Eligibility */}
//           <section className="w-full space-y-8 animate-slide-in-left delay-600 px-4 sm:px-8 lg:px-12">
//             <div className="text-center">
//               <h3 className="text-3xl font-serif font-bold text-amber-900 mb-4">
//                 📚 Eligibility for Internships
//               </h3>
//               <p className="text-base md:text-lg text-gray-600 italic">
//                 We welcome students and graduates from the following backgrounds:
//               </p>
//             </div>
            
//             <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm w-full">
//               <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//                 {[
//                   "B.Sc Footwear Technology",
//                   "B.Tech / Diploma in Leather Technology",
//                   "Fashion Technology Backgrounds",
//                   "Business Management Students",
//                   "Commerce Streams (Retail Roles)",
//                   "Science Streams (QA Roles)"
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3 text-gray-700">
//                     <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
//                     <span className="font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           {/* Application Process */}
//           <section className="w-full bg-amber-50 p-6 md:p-12 space-y-10 shadow-md animate-fade-in delay-800 mb-2">
//             <div className="text-center">
//               <h3 className="text-3xl font-serif font-bold text-amber-900">
//                 ➡️ Easy Application Process
//               </h3>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 w-full relative">
//               {/* Connector Line for Desktop */}
//               <div className="hidden md:block absolute top-7 left-0 w-full h-0.5 bg-amber-200 -z-0 transform scale-x-90"></div>
//               {/* Animated Progress Line */}
//               <div className="hidden md:block absolute top-7 left-0 h-0.5 bg-amber-700 -z-0 transform scale-x-90 animate-[progressLine_5s_ease-in-out_infinite]" style={{ width: '100%', transformOrigin: 'left' }}></div>

//               {[
//                 { step: "01", title: "Explore", detail: "Check jobs section." },
//                 { step: "02", title: "Apply", detail: "Fill form & resume." },
//                 { step: "03", title: "Review", detail: "HR screening." },
//                 { step: "04", title: "Interview", detail: "Online/Offline meet." },
//                 { step: "05", title: "Join", detail: "Welcome aboard!" },
//               ].map((item, index) => (
//                 <div key={item.step} className="text-center group relative z-10 bg-amber-50 md:bg-transparent">
//                   <div 
//                     className="w-14 h-14 bg-white border-2 border-amber-700 text-amber-800 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3 shadow-md group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300"
//                     style={{
//                       animation: `stepPulse 5s ease-in-out infinite`,
//                       animationDelay: `${index * 1}s`
//                     }}
//                   >
//                     {item.step}
//                   </div>
//                   <h4 className="text-lg font-bold text-gray-800">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {item.detail}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <p className="text-center text-sm italic text-gray-500">
//               We ensure a transparent selection process with timely feedback.
//             </p>

//              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
//               <button
//               onClick={() => navigate("/contact")}
//               className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white font-extrabold px-10 py-4  shadow-xl transition-transform duration-300 transform hover:scale-[1.02]">
//                 Apply Now
//               </button>
//             </div>
            
//             <style jsx>{`
//               @keyframes progressLine {
//                 0% { transform: scaleX(0); }
//                 100% { transform: scaleX(0.9); }
//               }
              
//               @keyframes stepPulse {
//                 0%, 80%, 100% { 
//                   background-color: white; 
//                   color: rgb(146, 64, 14);
//                   border-color: rgb(146, 64, 14);
//                 }
//                 16%, 20% { 
//                   background-color: rgb(146, 64, 14); 
//                   color: white;
//                   border-color: rgb(146, 64, 14);
//                   transform: scale(1.1);
//                 }
//               }
//             `}</style>
//           </section>

//           {/* Why Choose DTK */}
//           <section className="w-full py-12 md:py-16 px-4 sm:px-8 lg:px-12 animate-fade-in delay-400">
//             <div className="w-full space-y-10">
//               <div className="text-center">
//                 <h3 className="text-3xl font-serif font-extrabold text-amber-900 pb-3">
//                   Why Choose DTK Footwear?
//                 </h3>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {[
//                   { icon: Briefcase, title: "Expert Guidance", desc: "Learn directly from industry leaders." },
//                   { icon: Zap, title: "Live Projects", desc: "Real manufacturing & design projects." },
//                   { icon: Clock, title: "Certification", desc: "Industry-recognized completion certificate." },
//                   { icon: MapPin, title: "Career Path", desc: "Top performers may get full-time offers." }
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4 bg-amber-50  shadow-sm border border-amber-300 h-full">
//                     <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white shadow-md mb-2">
//                       <item.icon className="w-6 h-6" />
//                     </div>
//                     <h4 className="font-bold text-lg text-amber-900 leading-tight">
//                       {item.title}
//                     </h4>
//                     <p className="text-sm text-gray-600 leading-snug">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>  

//           {/* Image Gallery */}
//           <section className="mt-20 w-full px-4 sm:px-8 lg:px-12 animate-slide-in-right">
//             <h3 className="text-3xl font-serif font-extrabold text-amber-900 mb-8 text-center">
//               Life at DTK Footwear
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
//               {[
//                 "https://i.pinimg.com/1200x/61/2e/99/612e996bbf799b9485e3469cdbd372cf.jpg?w=600&h=400&fit=crop",
//                 "https://i.pinimg.com/736x/1d/34/a8/1d34a89b9d8500709e538b3136bee9a0.jpg?w=600&h=400&fit=crop",
//                 "https://i.pinimg.com/736x/e4/f8/26/e4f826598bf367563b56aca9ca3140a9.jpg?w=600&h=400&fit=crop",
//                 "https://i.pinimg.com/1200x/e9/23/13/e9231375be334798f31b7f211327f63d.jpg?w=600&h=400&fit=crop"
//               ].map((src, i) => (
//                 <img
//                   key={i}
//                   src={src}
//                   alt="Office Culture"
//                   className="w-full h-48 md:h-64 object-cover shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer"
//                 />
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* Core Values */}
//       <section className="bg-gradient-to-r from-amber-100 to-stone-100 py-16 px-6 mt-12 w-full">
//         <div className="w-full px-4 sm:px-8 lg:px-12">
//           <h3 className="text-3xl font-serif font-extrabold text-amber-900 mb-12 border-b border-amber-800 text-amber-900 pb-6">
//             🌟 Our Core Values
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//             <div className="space-y-4">
//               <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
//                 <span className="text-3xl">👞</span>
//               </div>
//               <h4 className="text-xl font-bold">Craftsmanship</h4>
//               <p className="text-amber-700 text-sm leading-relaxed">
//                 Driven by innovation and committed to quality manufacturing.
//               </p>
//             </div>
//             <div className="space-y-4">
//               <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
//                 <span className="text-3xl">🤝</span>
//               </div>
//               <h4 className="text-xl font-bold">Quality First</h4>
//               <p className="text-amber-700 text-sm leading-relaxed">
//                 Excellence in every stage, from design to delivery.
//               </p>
//             </div>
//             <div className="space-y-4">
//               <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
//                 <span className="text-3xl">🌱</span>
//               </div>
//               <h4 className="text-xl font-bold">Continuous Growth</h4>
//               <p className="text-amber-700 text-sm leading-relaxed">
//                 Nurturing new talent and development for all team members.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Animations */}
//       <style>{`
//         @keyframes fade-in { 
//           from { opacity: 0; } 
//           to { opacity: 1; } 
//         }
//         @keyframes fade-in-up { 
//           from { opacity: 0; transform: translateY(20px); } 
//           to { opacity: 1; transform: translateY(0); } 
//         }
//         @keyframes slide-in-left { 
//           from { opacity: 0; transform: translateX(-20px); } 
//           to { opacity: 1; transform: translateX(0); } 
//         }
//         @keyframes slide-in-right { 
//           from { opacity: 0; transform: translateX(20px); } 
//           to { opacity: 1; transform: translateX(0); } 
//         }

//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
//         .animate-slide-in-left { animation: slide-in-left 0.8s ease-out both; }
//         .animate-slide-in-right { animation: slide-in-right 0.8s ease-out both; }
//         .animate-fade-in { animation: fade-in 1s ease-out both; }

//         .delay-200 { animation-delay: 0.2s; }
//         .delay-400 { animation-delay: 0.4s; }
//         .delay-600 { animation-delay: 0.6s; }
//         .delay-800 { animation-delay: 0.8s; }
//         .delay-1000 { animation-delay: 1.0s; }
//         .delay-1200 { animation-delay: 1.2s; }
//       `}</style>
//     </div>
//   );
// };

// export default CareerPage;