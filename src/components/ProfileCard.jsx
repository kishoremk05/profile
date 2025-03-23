export default function ProfileCard() {
  return (
    <div className="relative flex items-center justify-center my-3">
    {/* Balanced Rotating Neon Ring */}
    <div className="absolute w-[300px] h-[300px] rounded-full bg-transparent border-[2px] border-gray-800 shadow-lg shadow-purple-900/40 animate-spin-slow 
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:via-indigo-500 before:to-blue-500 
    before:rounded-full before:opacity-40 before:blur-sm"></div>
  
    {/* Profile Image Card */}
    <div className="relative overflow-hidden w-[300px] h-[300px] rounded-full bg-[#0a0a0a] border-[2px] border-gray-700 shadow-2xl shadow-purple-900/40 flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50">
      <img
        src="/removebg.png"
        alt="Kishore's Profile"
        className="w-[100%] h-[100%] absolute -bottom-0.5 object-cover rounded-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
  
  );
}

// this one is nice too 

// export default function ProfileCard() {
//   return (
//     <div className="relative flex items-center justify-center">
//     {/* Balanced Rotating Neon Ring */}
//     <div className="absolute w-[300px] h-[300px] rounded-full bg-transparent border-[2px] border-gray-800 shadow-lg shadow-purple-900/40 animate-spin-slow 
//     before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:via-indigo-500 before:to-blue-500 
//     before:rounded-full before:opacity-40 before:blur-sm"></div>
  
//     {/* Profile Image Card */}
//     <div className="relative overflow-hidden w-[350px] h-[350px] rounded-full bg-[#0a0a0a] border-[2px] border-gray-700 shadow-2xl shadow-purple-900/40 flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50">
//       <img
//         src="/kishore_logo.jpg"
//         alt="Kishore's Profile"
//         className="w-[100%] h-[100%] absolute -bottom-0.5 object-cover rounded-full transition-transform duration-300 hover:scale-105"
//       />
//     </div>
//   </div>
  
//   );
// }