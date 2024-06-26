// "use client";
// import { Animate_Presence, MotionDiv } from "@/components/shared/MotionDiv";
// import { usePathname } from "next/navigation";
// // import { useRouter } from "next/router";
// import React from "react";

// const Template = ({ children }: { children: React.ReactNode }) => {
//   const path = usePathname();
//   console.log(path, "asdasdasdasd");

//   return (
//     <Animate_Presence mode='wait'>
//       <MotionDiv
//         key={path}
//         initial='initialState'
//         animate='animateState'
//         exit='exitState'
//         transition={{
//           duration: 0.75,
//         }}
//         variants={{
//           initialState: {
//             opacity: 0,
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//           },
//           animateState: {
//             opacity: 1,
//             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//           },
//           exitState: {
//             clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
//           },
//         }}
//         className=''
//       >
//         {children}
//       </MotionDiv>
//     </Animate_Presence>
//   );
// };

// export default Template;
