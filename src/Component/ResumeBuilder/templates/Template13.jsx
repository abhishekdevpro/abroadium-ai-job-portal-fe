// // import React, { useState } from 'react';
// // import profilephoto from '../images/profilephoto.png';

// // const Template11 = ({
// //   image,
// //   data,
// //   boxBgColor,
// //   font,
// //   textSize,
// //   sectionSpacing,
// //   paragraphSpacing,
// //   lineSpacing,
// //   isTemplate1Previewing,
// //   isPreviewScreen,
// //   predefinedText = {},
// // }) => {
// //   // Define classes based on props
// //   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
// //   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
// //   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
// //   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

// //   // Provide default values for data properties
// //   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

// //   // Generic function to check if all required fields are filled
// //   const areAllFieldsFilled = (item, fields) => {
// //     return fields.every(field => item[field] && item[field].trim() !== '');
// //   };

// //   // Check if all details are filled
// //   const allDetailsFilled = details.every(detail =>
// //     areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
// //   );

// //   const allDetailsFilled2 = experiences.every(experience =>
// //     areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
// //   );

// //   const allDetailsFilled3 = educations.every(education =>
// //     areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
// //   );

// //   const allDetailsFilled4 = skills.every(skill =>
// //     areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
// //   );

// //   const allDetailsFilled5 = sectionadd.every(section =>
// //     areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
// //   );

// //   const allDetailsFilled6 = summary.every(summar =>
// //     areAllFieldsFilled(summar, ['summarydescription'])
// //   );

// //   const [images, setImages] = useState(() => {
// //     if (details && details.length > 0) {
// //       return details.map(() => null);
// //     }
// //     return [];
// //   });

// //   const handleFileChange = (e, index) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const updatedImages = [...images];
// //         updatedImages[index] = reader.result;
// //         setImages(updatedImages);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   return (
// //     <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
// //       {/* {!isPreviewScreen && (
// //         <div className="">
// //           {allDetailsFilled && (
// //             <div className="w-7 h-7 ps-2.5 mt-1.5 bg-white rounded-2xl absolute top-48 left-1 font-bold">1</div>
// //           )}
// //           {allDetailsFilled2 && (
// //             <div className="w-7 h-8 ps-2.5 pt-0.5  mt-3.5 bg-white rounded-2xl absolute top-56 left-1 font-bold">2</div>
// //           )}
// //           {allDetailsFilled3 && (
// //             <div className="w-7 h-8 ps-2.5 pt-0.5 mt-11  bg-white rounded-2xl absolute top-60 left-1 font-bold">3</div>
// //           )}
// //           {allDetailsFilled4 && (
// //             <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-80 left-1 font-bold">4</div>
// //           )}
// //           {allDetailsFilled5 && (
// //             <div className="w-7 h-7 ps-2.5 mt-8 bg-white rounded-2xl absolute top-96 left-1 font-bold">6</div>
// //           )}
// //           {allDetailsFilled6 && (
// //             <div className="w-7 h-8 ps-2.5 pt-1 mt-28 bg-white rounded-2xl absolute top-64 left-1 font-bold">5</div>
// //           )}
// //         </div>
// //       )} */}
// //       <div className='flex break-all'>
// //         <div className="md:w-1/4 p-4 bg-sky-200 text-black overflow-auto justify-center break-all" >
// //           <div>
// //             <div className='flex items-center'>
// //               <div className="w-24 h-24 bg-white border-4 border-sky-400 text-center rounded-full overflow-hidden">
// //                 <img src={image || profilephoto} alt="Profile" className="w-full h-full object-cover"/>
// //               </div>
// //             </div>
// //             {/* {details.map((del, index) => (
// //               <div key={index} className='mt-4'>
// //                 <h2 className="text-lg font-bold">{del.name || predefinedText.details.name}</h2>
// //                 <p className="text-sm">{del.Profession || predefinedText.details.profession}</p>
// //               </div>
// //             ))} */}
// //           </div>
// //           <div className='mt-6'>
// //             <h5 className='font-bold text-blue-950 text-sm'>CONTACT</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             <ul className="text-xs mt-2">
// //               {details.map((del, index) => (
// //                 <React.Fragment key={index}>
// //                   <li className='flex items-center mt-2'>
// //                     <span className="material-icons text-base mr-2">phone</span>{del.phoneNumber || predefinedText.details.phoneNumber}
// //                   </li>
// //                   <li className='flex items-center mt-2'>
// //                     <span className="material-icons text-base mr-2">email</span>{del.email || predefinedText.details.email}
// //                   </li>
// //                   <li className='flex items-center mt-2'>
// //                     <span className="material-icons text-base mr-2">location</span>{del.address || predefinedText.details.address}
// //                   </li>
// //                   <li className='flex items-center mt-2'>
// //                     <span className="material-icons text-base mr-2">link</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
// //                   </li>
// //                 </React.Fragment>
// //               ))}
// //             </ul>
// //           </div>
// //           <div className='mt-6'>
// //             <h5 className='font-bold text-blue-950 text-sm'>SKILLS</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             {skills.map((skill, index) => (
// //               <div key={index} className='mt-2'>
// //                 <p className='text-xs'>{skill.skillname || predefinedText.skills.skillname}</p>
// //                 {/* <div className='w-full h-1 bg-gray-300'>
// //                   <div className='h-1 bg-yellow-400' style={{ width: `${skill.skilldetails || 50}%` }}></div>
// //                 </div> */}
// //               </div>
// //             ))}
// //           </div>
// //           {/* <div className='mt-6'>
// //             <h5 className='font-bold text-sm'>LANGUAGE</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             <div className='flex mt-2'>
// //               <div className='w-1/2 text-center'>
// //                 <p className='text-xs'>French</p>
// //                  <div className='w-16 h-16 bg-gray-300 mx-auto rounded-full'>
// //                   <div className='w-10 h-10 bg-yellow-400 rounded-full mt-3 mx-auto'></div>
// //                 </div>
// //               </div>
// //               <div className='w-1/2 text-center'>
// //                 <p className='text-xs'>English</p>
// //                 <div className='w-16 h-16 bg-gray-300 mx-auto rounded-full'>
// //                   <div className='w-10 h-10 bg-yellow-400 rounded-full mt-3 mx-auto'></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>  */}
// //           <div className='mt-6'>
// //             <h5 className='font-bold text-blue-950 text-sm'>REFERENCES</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             <div className='text-xs mt-2'>
// //               <p>Olivia Wilson</p>
// //               <p>Graphic Designer, Faucet Company</p>
// //               <p>+123-456-7890</p>
// //             </div>
// //             <div className='text-xs mt-4'>
// //               <p>Juliana Silva</p>
// //               <p>Graphic Designer, Larana Company</p>
// //               <p>+123-456-7890</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="md:w-3/4 bg-gray-100 p-6 break-all">
// //           <div>
// //             <div className='flex justify-between items-center'>
// //               {details.map((del, index) => (
// //                 <div key={index} className='w-2/5'>
// //                   <p className="text-sm">{del.Profession || predefinedText.details.profession}</p>
// //                   <h2 className="text-2xl text-blue-950 font-bold">{del.name || predefinedText.details.name}</h2>
// //                   {/* <p className="text-sm">{del.Profession || predefinedText.details.profession}</p> */}
// //                 </div>
// //               ))}
// //               {/* <div className='w-1/4 text-right'>
// //                 {details.map((del, index) => (
// //                   <div key={index}>
// //                     <p className="text-sm">{del.address || predefinedText.details.address}</p>
// //                     <p className="text-sm">{del.phoneNumber || predefinedText.details.phoneNumber}</p>
// //                     <p className="text-sm">{del.email || predefinedText.details.email}</p>
// //                   </div>
// //                 ))}
// //               </div> */}
// //             </div>
// //           </div>
// //           <div className='mt-6 bg-gray-100'>
// //             {/* <h5 className='font-bold text-lg'>PROFESSIONAL SUMMARY</h5> */}
// //             <div className="border-t border-black mt-2"></div>
// //             {summary.map((summar, index) => (
// //               <p key={index} className='text-sm mt-2'>{summar.summarydescription || predefinedText.summary.summarydescription}</p>
// //             ))}
// //           </div>
// //           <div className='mt-6'>
// //             <h5 className='font-bold text-blue-950 text-lg'>EXPERIENCE</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             {experiences.map((exp, index) => (
// //               <div key={index} className='mt-2'>
// //                 <div className='flex justify-between'>
// //                   <div className='w-3/4'>
// //                     <h3 className='text-md font-bold'>{exp.role || predefinedText.experiences.role}</h3>
// //                     <p className='text-sm'>{exp.Company || predefinedText.experiences.Company}</p>
// //                   </div>
// //                   <div className='w-1/4 text-right'>
// //                     <p className='text-sm'>{exp.month1 || predefinedText.experiences.month1} - {exp.month2 || predefinedText.experiences.month2}</p>
// //                   </div>
// //                 </div>
// //                 <p className='text-sm mt-1'>{exp.companydescription || predefinedText.experiences.companydescription}</p>
// //               </div>
// //             ))}
// //           </div>
// //           <div className='mt-6'>
// //             <h5 className='font-bold text-blue-950 text-lg'>EDUCATION</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             {educations.map((edu, index) => (
// //               <div key={index} className='mt-2'>
// //                 <div className='flex justify-between'>
// //                   <div className='w-3/4'>
// //                     <h3 className='text-md font-bold'>{edu.coursename || predefinedText.educations.coursename}</h3>
// //                     <p className='text-sm'>{edu.schoolname || predefinedText.educations.schoolname}</p>
// //                   </div>
// //                   <div className='w-1/4 text-right'>
// //                     <p className='text-sm'>{edu.edmonth1 || predefinedText.educations.edmonth1} - {edu.edmonth2 || predefinedText.educations.edmonth2}</p>
// //                   </div>
// //                 </div>
// //                 <p className='text-sm mt-1'>{edu.edescription || predefinedText.educations.edescription}</p>
// //               </div>
// //             ))}
// //           </div>
// //           <div className='mt-6'>
// //             <h5 className='font-bold text-blue-950 text-lg'>ADDITIONAL SECTIONS</h5>
// //             <div className="border-t border-black mt-2"></div>
// //             {sectionadd.map((section, index) => (
// //               <div key={index} className='mt-2'>
// //                 <h3 className='text-md font-bold'>{section.sectiontitle || predefinedText.sectionadd.sectiontitle}</h3>
// //                 <p className='text-sm mt-1'>{section.sectiondescription || predefinedText.sectionadd.sectiondescription}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Template11;

// import React, { useState } from 'react';
// import profilephoto from '../images/profilephoto.png';

// const Template11 = ({
//   image,
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isTemplate1Previewing,
//   isPreviewScreen,
//   predefinedText = {},
// }) => {
//   // Define classes based on props
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   // Provide default values for data properties
//   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

//   // Generic function to check if all required fields are filled
//   const areAllFieldsFilled = (item, fields) => {
//     return fields.every(field => item[field] && item[field].trim() !== '');
//   };

//   // Check if all details are filled
//   const allDetailsFilled = details.every(detail =>
//     areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
//   );

//   const allDetailsFilled2 = experiences.every(experience =>
//     areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
//   );

//   const allDetailsFilled3 = educations.every(education =>
//     areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
//   );

//   const allDetailsFilled4 = skills.every(skill =>
//     areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
//   );

//   const allDetailsFilled5 = sectionadd.every(section =>
//     areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
//   );

//   const allDetailsFilled6 = summary.every(summar =>
//     areAllFieldsFilled(summar, ['summarydescription'])
//   );

//   const [images, setImages] = useState(() => {
//     if (details && details.length > 0) {
//       return details.map(() => null);
//     }
//     return [];
//   });

//   const handleFileChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const updatedImages = [...images];
//         updatedImages[index] = reader.result;
//         setImages(updatedImages);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
//       {/* {!isPreviewScreen && (
//         <div className="">
//           {allDetailsFilled && (
//             <div className="w-7 h-7 ps-2.5 mt-1.5 bg-white rounded-2xl absolute top-48 left-1 font-bold">1</div>
//           )}
//           {allDetailsFilled2 && (
//             <div className="w-7 h-8 ps-2.5 pt-0.5  mt-3.5 bg-white rounded-2xl absolute top-56 left-1 font-bold">2</div>
//           )}
//           {allDetailsFilled3 && (
//             <div className="w-7 h-8 ps-2.5 pt-0.5 mt-11  bg-white rounded-2xl absolute top-60 left-1 font-bold">3</div>
//           )}
//           {allDetailsFilled4 && (
//             <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-80 left-1 font-bold">4</div>
//           )}
//           {allDetailsFilled5 && (
//             <div className="w-7 h-7 ps-2.5 mt-8 bg-white rounded-2xl absolute top-96 left-1 font-bold">6</div>
//           )}
//           {allDetailsFilled6 && (
//             <div className="w-7 h-8 ps-2.5 pt-1 mt-28 bg-white rounded-2xl absolute top-64 left-1 font-bold">5</div>
//           )}
//         </div>
//       )} */}
//       <div className='flex break-all'>
//         <div className="md:w-1/4 p-4 bg-sky-200 text-black overflow-auto justify-center break-all" >
//           <div>
//             <div className='flex items-center'>
//               <div className="w-24 h-24 bg-white border-4 border-sky-400 text-center rounded-full overflow-hidden">
//                 <img src={image || profilephoto} alt="Profile" className="w-full h-full object-cover"/>
//               </div>
//             </div>
//             {/* {details.map((del, index) => (
//               <div key={index} className='mt-4'>
//                 <h2 className="text-lg font-bold">{del.name || predefinedText.details.name}</h2>
//                 <p className="text-sm">{del.Profession || predefinedText.details.profession}</p>
//               </div>
//             ))} */}
//           </div>
//           <div className='mt-6'>
//             <h5 className='font-bold text-blue-950 text-sm'>CONTACT</h5>
//             <div className="border-t border-black mt-2"></div>
//             <ul className="text-xs mt-2">
//               {details.map((del, index) => (
//                 <React.Fragment key={index}>
//                   <li className='flex items-center mt-2'>
//                     <span className="material-icons text-base mr-2">phone</span>{del.phoneNumber || predefinedText.details?.phoneNumber || 'N/A'}
//                   </li>
//                   <li className='flex items-center mt-2'>
//                     <span className="material-icons text-base mr-2">email</span>{del.email || predefinedText.details?.email || 'N/A'}
//                   </li>
//                   <li className='flex items-center mt-2'>
//                     <span className="material-icons text-base mr-2">location</span>{del.address || predefinedText.details?.address || 'N/A'}
//                   </li>
//                   <li className='flex items-center mt-2'>
//                     <span className="material-icons text-base mr-2">link</span><a href={del.link || '#'}>{del.link || predefinedText.details?.link || 'N/A'}</a>
//                   </li>
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>
//           <div className='mt-6'>
//             <h5 className='font-bold text-blue-950 text-sm'>SKILLS</h5>
//             <div className="border-t border-black mt-2"></div>
//             {skills.map((skill, index) => (
//               <div key={index} className='mt-2'>
//                 <p className='text-xs'>{skill.skillname || predefinedText.skills?.skillname || 'N/A'}</p>
//                 {/* <div className='w-full h-1 bg-gray-300'>
//                   <div className='h-1 bg-yellow-400' style={{ width: `${skill.skilldetails || 50}%` }}></div>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//           {/* <div className='mt-6'>
//             <h5 className='font-bold text-sm'>LANGUAGE</h5>
//             <div className="border-t border-black mt-2"></div>
//             <div className='flex mt-2'>
//               <div className='w-1/2 text-center'>
//                 <p className='text-xs'>French</p>
//                  <div className='w-16 h-16 bg-gray-300 mx-auto rounded-full'>
//                   <div className='w-10 h-10 bg-yellow-400 rounded-full mt-3 mx-auto'></div>
//                 </div>
//               </div>
//               <div className='w-1/2 text-center'>
//                 <p className='text-xs'>English</p>
//                 <div className='w-16 h-16 bg-gray-300 mx-auto rounded-full'>
//                   <div className='w-10 h-10 bg-yellow-400 rounded-full mt-3 mx-auto'></div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//         <div className='md:w-3/4 p-4 overflow-auto'>
//           <div>
//             <h1 className='text-2xl font-bold'>{details[0]?.name || predefinedText.details?.name || 'Your Name'}</h1>
//             <p className='text-xl'>{details[0]?.Profession || predefinedText.details?.profession || 'Your Profession'}</p>
//           </div>
//           <div className='mt-6'>
//             <h5 className='font-bold text-blue-950 text-sm'>SUMMARY</h5>
//             <div className="border-t border-black mt-2"></div>
//             <p className='text-xs mt-2'>{summary[0]?.summarydescription || predefinedText.summary?.summarydescription || 'Your Summary'}</p>
//           </div>
//           {/* Add Experience, Education sections with similar checks */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template11;
import React, { useState, useRef } from "react";
import DOMPurify from "dompurify";

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc pl-5">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-5">')
  };
};

const Template11 = ({
  image,
  data,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  predefinedText = {},
}) => {
  const [sections, setSections] = useState([
    { id: "summary", title: "SUMMARY" },
    { id: "experience", title: "EXPERIENCE" },
    { id: "education", title: "EDUCATION" },
    { id: "additional", title: "ADDITIONAL SECTIONS" },
  ]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    e.target.style.opacity = 0.5;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    e.target.style.backgroundColor = "#f0f0f0";
  };

  const drop = (e) => {
    const copyListItems = [...sections];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setSections(copyListItems);
    e.target.style.opacity = "";
    e.target.style.backgroundColor = "";
  };

  const textSizeClass = `text-${textSize === "small" ? "sm" : textSize === "medium" ? "base" : "lg"}`;
  const sectionSpacingClass = `space-y-${sectionSpacing === "small" ? "2" : sectionSpacing === "medium" ? "4" : "6"}`;
  const paragraphSpacingClass = `mb-${paragraphSpacing === "small" ? "2" : paragraphSpacing === "medium" ? "4" : "6"}`;
  const lineHeightClass = `leading-${lineSpacing === "1" ? "tight" : lineSpacing === "1.5" ? "snug" : "relaxed"}`;

  const {
    details = [],
    experiences = [],
    educations = [],
    skills = [],
    sectionadd = [],
    summary = [],
  } = data || {};

  return (
    <div
      className={`border rounded-lg shadow-lg overflow-hidden ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 p-6 bg-gradient-to-b from-sky-200 to-sky-300 text-black">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white border-4 border-sky-400 rounded-full overflow-hidden mb-4">
              <img
                src={image || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {details.map((del, index) => (
              <div key={index} className="text-center">
                <h2 className="text-xl font-bold">{del.name || predefinedText.details.name}</h2>
                <p className="text-sm text-gray-700">{del.Profession || predefinedText.details.profession}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h5 className="font-bold text-blue-950 text-sm mb-2">CONTACT</h5>
            <div className="border-t border-blue-900 mb-4"></div>
            <ul className="space-y-3">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-900 mr-3">phone</span>
                    <span>{del.phoneNumber || predefinedText.details?.phoneNumber || 'N/A'}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-900 mr-3">email</span>
                    <span>{del.email || predefinedText.details?.email || 'N/A'}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-900 mr-3">location_on</span>
                    <span>{del.address || predefinedText.details?.address || 'N/A'}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-900 mr-3">link</span>
                    <a href={del.link || '#'} className="text-blue-600 hover:underline">
                      {del.link || predefinedText.details?.link || 'N/A'}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-blue-900 mr-3">link</span>
                    <a href={del.github || '#'} className="text-blue-600 hover:underline">
                      {del.github || predefinedText.details?.link || 'N/A'}
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h5 className="font-bold text-blue-950 text-sm mb-2">SKILLS</h5>
            <div className="border-t border-blue-900 mb-4"></div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <p className="text-sm font-medium">
                  {skill.skillname || predefinedText.skills?.skillname || "N/A"}
                </p>
                <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${skill.skilldetails || 50}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 p-6 bg-white">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="mb-8 cursor-move"
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
            >
              <h5 className="font-bold text-blue-950 text-lg mb-2">{section.title}</h5>
              <div className="border-t border-gray-300 mb-4"></div>
              {section.id === "summary" && (
                <div
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(summary.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                />
              )}
              {section.id === "experience" && experiences.map((exp, index) => (
                <div key={index} className={`${paragraphSpacingClass}`}>
                  <h3 className="text-base font-semibold text-blue-800">
                    {exp.Company || predefinedText.experiences?.Company || "Company Name"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {exp.month1 || predefinedText.experiences?.month1 || "Month"}
                  </p>
                  <p className="text-sm font-medium">
                    {exp.role || predefinedText.experiences?.role || "Role"}
                  </p>
                  <div 
                    className="text-sm prose prose-sm max-w-none mt-2"
                    dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                  />
                </div>
              ))}
              {section.id === "education" && educations.map((edu, index) => (
                <div key={index} className={`${paragraphSpacingClass}`}>
                  <h3 className="text-base font-semibold text-blue-800">
                    {edu.schoolname || predefinedText.educations?.schoolname || "School Name"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {edu.edmonth1 || predefinedText.educations?.edmonth1 || "Start Month"} - 
                    {edu.edmonth2 || predefinedText.educations?.edmonth2 || "End Month"}
                  </p>
                  <p className="text-sm">
                    {edu.coursename || predefinedText.educations?.coursename || "Course Name"}
                  </p>
                </div>
              ))}
              {section.id === "additional" && sectionadd.map((sec, index) => (
                <div key={index} className={`${paragraphSpacingClass}`}>
                  <h3 className="text-base font-semibold text-blue-800">
                    {sec.sectiontitle || predefinedText.sectionadd?.sectiontitle || "Section Title"}
                  </h3>
                  <p className="text-sm">
                    {sec.sectiondescription || predefinedText.sectionadd?.sectiondescription || "Section Description"}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template11;