// // import React from 'react';
// // import profilephoto from '../images/profilephoto.png';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEnvelope,faGlobe } from '@fortawesome/free-solid-svg-icons';

// // const Template8 = ({
// //   image,
// //   data = {},
// //   boxBgColor,
// //   font,
// //   textSize,
// //   sectionSpacing,
// //   paragraphSpacing,
// //   lineSpacing,
// //   isPreviewScreen,
// //   isTemplate1Previewing,
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

// //   return (
// //     <div className={`border bg-[#333456] p-7 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font,    }}>
// //      {/* {!isPreviewScreen && !isTemplate1Previewing && (
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
// //       <div className='bg-white  rounded-3xl h-full'>
// //         <div className='bg-stone-300 flex justify-between px-5 rounded-3xl '>
        
// //           <div className='w-2/4'>
// //             <h5 className='font-extrabold  m-3'><FontAwesomeIcon icon={faGlobe}  /> ABOUT ME </h5>
// //             {summary.map((sum, index) => (
// //               <div key={index}>
// //               <p
// //                 className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
// //                 dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }}
// //               />
// //               <br />
// //             </div>
// //             ))}
// //           </div>
// //           <div className='text-center  pt-10 w-1/2'>
// //             {details.map((del, index) => (
// //               <div key={index}>
// //                 <h3 className="text-lg md:text-xl lg:text-1xl font-bold ">{del.name || "John Doe"}</h3>
// //                 <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession || "Software Engineer"}</p>
// //               </div>
// //             ))}
// //           </div>

// //         </div>

// //         <div className='flex flex-col md:flex-row  rounded-t-none'>
// //           <div className='md:w-2/4 md:px-5 pt-4 ms-4'>

// //             <h5 className='font-extrabold text-sm  mb-3'> <FontAwesomeIcon icon={faEnvelope} className='' /> 
// //             JOBS EXPERIENCE </h5>

// //             {experiences.map((exp, index) => (
// //               <div key={index}>
// //                 <p className='text-xs'>{exp.month1 || "2024/01"}- {exp.month2 || "2024/05"}</p>
// //                 <h6 className='font-bold text-sm my-2'>{exp.Company || "ABC Inc."}</h6>
// //                 <ul className='m-1 text-xs'>
// //                   <li>{exp.companydescription || "Description of job experience Lorem Ipsum is simply dummy text of thees, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</li>
// //                 </ul>
// //                 <h6 className='font-semibold text-xs'>{exp.role || "Software Developer"}</h6>
                
// //               </div> 
// //             ))} <br />

// //             <h5 className='font-extrabold text-sm  ' > <i class="fas fa-cog"></i>SKILLS  </h5>
// //             {skills.map((skill, index) => (
// //               <div key={index}>
// //                 <ul className="text-xs md:text-xs lg:text-xs mt-2">
// //                   <li>
// //                     <span className="m-2">&#8226;</span>{skill.skillname || "Skill Name"}
// //                   </li>
// //                   {/* <li>
// //                     <span className="m-2">&#8226;</span>{skill.skilldetails || "Skill Details"}
// //                   </li> */}
// //                 </ul>
// //               </div>
// //             ))} <br />
// //             <h5 className='font-extrabold text-sm mb-2'>Language  </h5>
// //             {details.map((del, index) => (
// //               <div key={index}>
// //                 <ul>
// //                   <li className={`${del.Language ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all text-xs ms-4`}>
// //                   <a href={del.Language || "#"}>{del.Language || "English"}</a>
// //                   </li>
// //                 </ul>
// //               </div>
// //             ))} <br />

// //             <h5 className='font-extrabold '>Github  </h5>
// //             {details.map((del, index) => (
// //               <div key={index}>
// //                 <ul>
// //                   <li className={`${del.github ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all ms-4 text-xs`}>
// //                     <a href={del.github || "#"}>{del.github || "https://github.com/example"}</a>
// //                   </li>
// //                 </ul>
// //               </div>
// //             ))}

// //           </div>
// //           <div className="md:w-1/3 ms-10 h-full pb-40 bg-[#333456]  border-white mx-1 " >

// //             <div className='w-11/12 h-5/6 ms-2 bg-black border-white rounded-full border-8 text-center'>
// //             <img src= {image || profilephoto} alt=""  className=' ms-4 rounded-full h-5/6 w-5/6'/></div>


// //             <div  className='px-5 h-full bg-[#333456]'>
// //               <div >
// //                 <h6 className='font-extrabold text-white  pt-5 text-sm '>CONTACT ME</h6>
// //                 <ul className="text-xs md:text-xs lg:text-xs text-white">
// //                   {details.map((del, index) => (
// //                     <React.Fragment key={index}>
// //                       <li><span className="m-2">&#8226;</span>{del.address || "123 Main St"}</li>
// //                       <li>
// //                         <span className="m-2">&#8226;</span>{del.phoneNumber || "123-456-7890"}
// //                       </li>
// //                       <li className='break-all'>
// //                         <span className="m-2">&#8226;</span>{del.email || "example@.com"}
// //                       </li>
// //                     </React.Fragment>
// //                   ))}
// //                 </ul>
// //               </div><br />
// //               <h5 className='font-extrabold text-white text-sm'>EDUCATION </h5>
// //               {educations.map((edu, index) => (
// //                 <div key={index}>
// //                   <ul className="text-xs md:text-xs lg:text-xs text-white mt-2">
// //                     <li className='font-bold'>{edu.coursename || "ComputerScience"}</li>
// //                     <li className='my-1'>{edu.schoolname || "ABC University"}</li>
// //                     <li>{edu.schoolplace || "City, Country"}</li>
// //                     <p className='text-slate-400'>{edu.edmonth1} - {edu.edmonth2}</p>
// //                   </ul>
// //                 </div>
// //               ))}

// //               <div>
// //                 {sectionadd.map((section, index) => (
// //                   <div key={index} className="mt-5 bg-blue-600">
// //                     <h5 className="font-extrabold text-black">{section.sectiontitle}</h5>
// //                     <span className="text-black w-32">{section.sectionname}</span>
// //                     <h6 className={`${paragraphSpacingClass} text-black break-all`}>{section.sectiondescription }</h6>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Template8;


// // import React from 'react';
// // import profilephoto from '../images/profilephoto.png';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

// // const Template8 = ({
// //   image,
// //   data = {},
// //   boxBgColor,
// //   font,
// //   textSize,
// //   sectionSpacing,
// //   paragraphSpacing,
// //   lineSpacing,
// //   isPreviewScreen,
// //   isTemplate1Previewing,
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

// //   return (
// //     <div className={`border bg-[#333456] p-7 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
// //       <div className="bg-white rounded-3xl h-full px-2 py-2  ">
// //         <div className="bg-stone-300 flex justify-between px-5 py-4 rounded-3xl border-2 border-red-500">
// //           <div className="w-2/4">
// //             <h5 className="font-extrabold m-3 text-lg"><FontAwesomeIcon icon={faGlobe} /> ABOUT ME</h5>
// //             {summary.map((sum, index) => (
// //               <div key={index}>
// //                 <p className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 break-all`} dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }} />
// //               </div>
// //             ))}
// //           </div>
// //           <div className="text-center pt-10 w-1/2">
// //             {details.map((del, index) => (
// //               <div key={index}>
// //                 <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{del.name || "John Doe"}</h3>
// //                 <p className="text-lg md:text-xl lg:text-lg mt-2">{del.Profession || "Software Engineer"}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="flex flex-col md:flex-row rounded-t-none">
// //           <div className="md:w-2/4 md:px-5 pt-4 ms-4">
// //             <h5 className="font-extrabold text-sm mb-3"><FontAwesomeIcon icon={faEnvelope} /> JOBS EXPERIENCE</h5>
// //             {experiences.map((exp, index) => (
// //               <div key={index}>
// //                 <p className="text-xs">{exp.month1 || "2024/01"} - {exp.month2 || "2024/05"}</p>
// //                 <h6 className="font-bold text-sm my-2">{exp.Company || "ABC Inc."}</h6>
// //                 <ul className="m-1 text-xs">
// //                   <li>{exp.companydescription || "Description of job experience Lorem Ipsum is simply dummy text of thees, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</li>
// //                 </ul>
// //                 <h6 className="font-semibold text-xs">{exp.role || "Software Developer"}</h6>
// //               </div>
// //             ))}
// //             <br />
// //             <h5 className="font-extrabold text-sm mb-3">SKILLS</h5>
// //             {skills.map((skill, index) => (
// //               <div key={index}>
// //                 <ul className="text-xs md:text-xs lg:text-xs mt-2">
// //                   <li><span className="m-2">&#8226;</span>{skill.skillname || "Skill Name"}</li>
// //                 </ul>
// //               </div>
// //             ))}
// //             <br />
// //             <h5 className="font-extrabold text-sm mb-2">Language</h5>
// //             {details.map((del, index) => (
// //               <div key={index}>
// //                 <ul>
// //                   <li className="w-2/2 break-all text-xs ms-4">{del.Language || "English"}</li>
// //                 </ul>
// //               </div>
// //             ))}
// //             <br />
// //             <h5 className="font-extrabold text-sm mb-2">Github</h5>
// //             {details.map((del, index) => (
// //               <div key={index}>
// //                 <ul>
// //                   <li className="w-2/2 break-all ms-4 text-xs"><a href={del.github || "#"}>{del.github || "https://github.com/example"}</a></li>
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="md:w-1/3 ms-10 h-full pb-40 bg-[#333456] border-white mx-1">
// //             <div className="w-11/12 h-5/6 ms-2 bg-black border-white rounded-full border-8 text-center">
// //               <img src={image || profilephoto} alt="" className="ms-4 rounded-full h-5/6 w-5/6" />
// //             </div>
// //             <div className="px-5 h-full bg-[#333456]">
// //               <div>
// //                 <h6 className="font-extrabold text-white pt-5 text-sm">CONTACT ME</h6>
// //                 <ul className="text-xs md:text-xs lg:text-xs text-white">
// //                   {details.map((del, index) => (
// //                     <React.Fragment key={index}>
// //                       <li><span className="m-2">&#8226;</span>{del.address || "123 Main St"}</li>
// //                       <li><span className="m-2">&#8226;</span>{del.phoneNumber || "123-456-7890"}</li>
// //                       <li className="break-all"><span className="m-2">&#8226;</span>{del.email || "example@.com"}</li>
// //                     </React.Fragment>
// //                   ))}
// //                 </ul>
// //               </div>
// //               <br />
// //               <h5 className="font-extrabold text-white text-sm">EDUCATION</h5>
// //               {educations.map((edu, index) => (
// //                 <div key={index}>
// //                   <ul className="text-xs md:text-xs lg:text-xs text-white mt-2">
// //                     <li className="font-bold">{edu.coursename || "Computer Science"}</li>
// //                     <li className="my-1">{edu.schoolname || "ABC University"}</li>
// //                     <li>{edu.schoolplace || "City, Country"}</li>
// //                     <p className="text-slate-400">{edu.edmonth1} - {edu.edmonth2}</p>
// //                   </ul>
// //                 </div>
// //               ))}
// //               <div>
// //                 {sectionadd.map((section, index) => (
// //                   <div key={index} className="mt-5 p-3 rounded-lg">
// //                     <h5 className="font-extrabold text-white">{section.sectiontitle}</h5>
// //                     <span className="text-white w-32">{section.sectionname}</span>
// //                     <h6 className={`${paragraphSpacingClass} text-black break-all`}>{section.sectiondescription}</h6>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Template8;

// import React from 'react';
// import profilephoto from '../images/profilephoto.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import DOMPurify from 'dompurify';

// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };

// const Template8 = ({
//   image,
//   data = {},
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isPreviewScreen,
//   isTemplate1Previewing,
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

//   return (
//     <div className={`border bg-[#333456] p-7 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
//       <div className="bg-white rounded-3xl h-full px-2 py-2">
//         <div className="bg-stone-300 flex justify-between px-5 py-4 rounded-3xl ">
//           <div className="w-2/4">
//             <h5 className="font-extrabold m-3 text-lg"><FontAwesomeIcon icon={faGlobe} /> ABOUT ME</h5>
//             {summary.map((sum, index) => (
//               <div key={index}>
//                 <p className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 break-all`} dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }} />
//               </div>
//             ))}
//           </div>
//           <div className="text-center pt-10 w-1/2">
//             {details.map((del, index) => (
//               <div key={index}>
//                 <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{del.name || "John Doe"}</h3>
//                 <p className="text-lg md:text-xl lg:text-lg mt-2">{del.Profession || "Software Engineer"}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row rounded-t-none">
//           <div className="md:w-2/4 md:px-5 pt-4 ms-4">
//             <h5 className="font-extrabold text-sm mb-3"><FontAwesomeIcon icon={faEnvelope} /> JOBS EXPERIENCE</h5>
//             {experiences.map((exp, index) => (
//               <div key={index}>
//                 <p className="text-xs">{exp.month1 || "2024/01"} - {exp.month2 || "2024/05"}</p>
//                 <h6 className="font-bold text-sm my-2">{exp.Company || "ABC Inc."}</h6>
//                 <div 
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
//                     />
//                 <h6 className="font-semibold text-xs">{exp.role || "Software Developer"}</h6>
//               </div>
//             ))}
//             <br />
//             <h5 className="font-extrabold text-sm mb-3">SKILLS</h5>
//             {skills.map((skill, index) => (
//               <div key={index}>
//                 <ul className="text-xs md:text-xs lg:text-xs mt-2">
//                   <li><span className="m-2">&#8226;</span>{skill.skillname || "Skill Name"}</li>
//                 </ul>
//               </div>
//             ))}
//             <br />
//             <h5 className="font-extrabold text-sm mb-2">Language</h5>
//             {details.map((del, index) => (
//               <div key={index}>
//                 <ul>
//                   <li className="w-2/2 break-all text-xs ms-4">{del.Language || "English"}</li>
//                 </ul>
//               </div>
//             ))}
//             <br />
//             <h5 className="font-extrabold text-sm mb-2">Github</h5>
//             {details.map((del, index) => (
//               <div key={index}>
//                 <ul>
//                   <li className="w-2/2 break-all ms-4 text-xs"><a href={del.github || "#"}>{del.github || "https://github.com/example"}</a></li>
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="md:w-1/3 ms-10 h-full pb-40 bg-[#333456]  mx-1 mt-2 rounded-md">
//             <div className="w-11/12 h-5/6 ms-2 bg-black border-white rounded-full border-8 text-center mt-4">
//               <img src={image || profilephoto} alt="" className="ms-4 rounded-full h-5/6 w-5/6" />
//             </div>
//             <div className="px-5 h-full bg-[#333456]">
//               <div>
//                 <h6 className="font-extrabold text-white pt-5 text-sm">CONTACT ME</h6>
//                 <ul className="text-xs md:text-xs lg:text-xs text-white">
//                   {details.map((del, index) => (
//                     <React.Fragment key={index}>
//                       <li><span className="m-2">&#8226;</span>{del.address || "123 Main St"}</li>
//                       <li><span className="m-2">&#8226;</span>{del.phoneNumber || "123-456-7890"}</li>
//                       <li className="break-all"><span className="m-2">&#8226;</span>{del.email || "example@.com"}</li>
//                     </React.Fragment>
//                   ))}
//                 </ul>
//               </div>
//               <br />
//               <h5 className="font-extrabold text-white text-sm">EDUCATION</h5>
//               {educations.map((edu, index) => (
//                 <div key={index}>
//                   <ul className="text-xs md:text-xs lg:text-xs text-white mt-2">
//                     <li className="font-bold">{edu.coursename || "Computer Science"}</li>
//                     <li className="my-1">{edu.schoolname || "ABC University"}</li>
//                     <li>{edu.schoolplace || "City, Country"}</li>
//                     <p className="text-slate-400">{edu.edmonth1} - {edu.edmonth2}</p>
//                   </ul>
//                 </div>
//               ))}
//               <div>
//                 {sectionadd.map((section, index) => (
//                   <div key={index} className="mt-5 p-3 rounded-lg">
//                     <h5 className="font-extrabold text-white">{section.sectiontitle}</h5>
//                     <span className="text-white w-32">{section.sectionname}</span>
//                     <h6 className={`${paragraphSpacingClass} text-black break-all`} dangerouslySetInnerHTML={{ __html: section.sectiondescription }} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template8;


import React from 'react';
import profilephoto from '../images/profilephoto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import DOMPurify from 'dompurify';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const Template8 = ({
  image,
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
}) => {
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

  return (
    <div className={`border bg-gradient-to-br from-indigo-600 to-purple-700 p-7 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass} shadow-2xl`} style={{ fontFamily: font }}>
      <div className="bg-white rounded-3xl h-full px-6 py-8 shadow-inner">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 flex justify-between items-center px-8 py-6 rounded-3xl shadow-md">
          <div className="w-2/4">
            <h5 className="font-extrabold text-xl text-indigo-700"><FontAwesomeIcon icon={faGlobe} className="mr-2" /> ABOUT ME</h5>
            {summary.map((sum, index) => (
              <div key={index}>
                <p className={`${paragraphSpacingClass} text-sm sm:text-base md:text-base lg:text-base m-2 break-all text-gray-700`} dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }} />
              </div>
            ))}
          </div>
          <div className="text-center pt-10 w-1/2">
            {details.map((del, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-800">{del.name || "John Doe"}</h3>
                <p className="text-xl md:text-2xl lg:text-2xl mt-2 text-purple-600">{del.Profession || "Software Engineer"}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row rounded-t-none mt-8">
          <div className="md:w-2/4 md:px-5 pt-4">
            <h5 className="font-extrabold text-lg mb-4 text-indigo-700"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> EXPERIENCE</h5>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <p className="text-sm text-purple-600">{exp.month1 || "2024/01"} - {exp.month2 || "2024/05"}</p>
                <h6 className="font-bold text-lg my-2 text-indigo-800">{exp.Company || "ABC Inc."}</h6>
                <div 
                  className="text-base prose prose-sm max-w-none text-gray-700"
                  dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                />
                <h6 className="font-semibold text-sm mt-2 text-purple-600">{exp.role || "Software Developer"}</h6>
              </div>
            ))}
            <h5 className="font-extrabold text-lg mb-4 mt-8 text-indigo-700">SKILLS</h5>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {skill.skillname || "Skill Name"}
                </div>
              ))}
            </div>
            <h5 className="font-extrabold text-lg mb-4 mt-8 text-indigo-700">LANGUAGE</h5>
            {details.map((del, index) => (
              <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 inline-block">
                {del.Language || "English"}
              </div>
            ))}
            <h5 className="font-extrabold text-lg mb-4 mt-8 text-indigo-700">GITHUB</h5>
            {details.map((del, index) => (
              <div key={index}>
                <a href={del.github || "#"} className="text-purple-600 hover:text-purple-800 transition duration-300">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  {del.github || "https://github.com/example"}
                </a>
              </div>
            ))}
          </div>
          <div className="md:w-1/3 ms-10 h-full pb-40 bg-gradient-to-b from-indigo-600 to-purple-700 mx-1 mt-2 rounded-2xl shadow-lg">
            <div className="w-11/12 h-5/6 ms-2 bg-white border-white rounded-full border-8 text-center mt-4 shadow-xl overflow-hidden">
              <img src={image || profilephoto} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="px-5 h-full text-white">
              <div>
                <h6 className="font-extrabold pt-5 text-lg mb-4">CONTACT ME</h6>
                <ul className="space-y-2">
                  {details.map((del, index) => (
                    <React.Fragment key={index}>
                      <li className="flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{del.address || "123 Main St"}</li>
                      <li className="flex items-center"><FontAwesomeIcon icon={faPhone} className="mr-2" />{del.phoneNumber || "123-456-7890"}</li>
                      <li className="flex items-center break-all"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />{del.email || "example@.com"}</li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              <h5 className="font-extrabold text-lg mt-8 mb-4">EDUCATION</h5>
              {educations.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h6 className="font-bold text-lg">{edu.coursename || "Computer Science"}</h6>
                  <p className="text-sm">{edu.schoolname || "ABC University"}</p>
                  <p className="text-sm">{edu.schoolplace || "City, Country"}</p>
                  <p className="text-sm text-purple-300">{edu.edmonth1} - {edu.edmonth2}</p>
                </div>
              ))}
              <div>
                {sectionadd.map((section, index) => (
                  <div key={index} className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
                    <h5 className="font-extrabold text-lg mb-2">{section.sectiontitle}</h5>
                    <span className="text-sm">{section.sectionname}</span>
                    <div className={`${paragraphSpacingClass} text-sm break-all`} dangerouslySetInnerHTML={{ __html: section.sectiondescription }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template8;