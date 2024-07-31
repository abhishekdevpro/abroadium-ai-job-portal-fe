// import React from 'react';
// import { useState } from 'react';
// import profilephoto from '../images/profilephoto.png';

// const Template10 = ({
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
//   console.log('imageee', image)
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
//         console.log("Uploaded image data:", reader.result);
//         const updatedImages = [...images];
//         updatedImages[index] = reader.result;
//         setImages(updatedImages);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  

//   return (
//     <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
//       {/* {!isPreviewScreen &&  (
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
//         <div className="md:w-1/ ps-4 pt-5 bg-gray-800 text-white overflow-auto justify-center break-all" >
//           <div>
          
//           <div className='flex'>
//           <div className="w-32 h-40 b bg-white  border-8 text-center break-all">
//               <img src={image || profilephoto} alt="" style={{height:'143px'}}/>
//               </div>

              
//           <div className='w-7  h-28 mt-7 bg-yellow-300'></div>
//           </div>
//             <h5 className=' text-sm pt-5'>CONTACT </h5>
//             <div className="flex-grow  border-t border-white align-super mt-3"></div>
//             <ul className=" text-xs md:text-xs lg:text-xs mt-2 break-all w-28">
//               {details.map((del, index) => (
//                 <React.Fragment key={index} >
//                   <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
//                   <li className='text-xs md:text-xs lg:text-xs'>
//                     <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all'>
//                     <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all'>
//                     <span className="m-2">&#8226;</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
//                   </li>
//                   <img src={del.image} alt="" />
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div><br />
//           <h5 className='text-sm'>EDUCATION </h5>
//           <div className="flex-grow border-t border-white align-super break-all mt-3"></div>
//           {educations.map((edu, index) => (
//             <div key={index} className='ms-3'>
//               <ul className=" text-xs md:text-xs lg:text-xs mt-2 break-all w-28">
//                 <li className='font-bold break-all '>{edu.coursename || predefinedText.educations.coursename}</li>
//                 <li className='text-xs md:text-xs lg:text-xs mt-2 break-all'>{edu.schoolname || predefinedText.educations.schoolname}</li>
//                 <li className='text-xs md:text-xs lg:text-xs mt-2 break-all'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
//               </ul>
//               </div>
//           ))} <br />
//           <h5 className='text-sm '>SKILLS  </h5>
//           <div className="flex-grow border-t border-white align-super mt-2"></div>
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <ul className=" text-xs md:text-xs lg:text-xs mt-2">
//                 <li>
//                   {skill.skillname || predefinedText.skills.skillname}
//                 </li>
//                 {/* <li className='text-xs md:text-xs lg:text-xs'>
//                   {skill.skilldetails || predefinedText.skills.skilldetails}
//                 </li> */}
//               </ul>
//             </div>
//           ))}

//           {details.map((del, index) => (
//             <div key={index} className='text-xs mt-4'>
//               <h5 className='text-sm '>Github  </h5>
//               <ul>
//                 <li className={`${del.github ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
//                   <a href={del.github}>{del.github}</a>
//                 </li>
//               </ul>
//             </div>
//           ))}
          
//           <div>
//             {sectionadd.map((section, index) => (
//               <div key={index} className="mt-5">
//                 <h5 className="text-blue-800  break-all">{section.sectiontitle}</h5>
//                 <div className="flex-grow border-t border-white align-super my-2 "></div>
//                 <span className="font-bold text-xs w-32">{section.sectionname}</span>
//                 <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription}</h6>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='md:w-2/3 md:p white'>
//           {details.map((del, index) => (
//             <div key={index} className='bg-yellow-300  h-28 mt-12'><br />
//               <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 font-bold ms-10">{del.name || predefinedText.details.name}</h3>
//               <p className='text-sm md:text-sm lg:text-sm mt-2 ms-10'> {del.Profession || predefinedText.details.profession}</p> <br /> <br />
//             </div>
//           ))} <br /><br />
//           <h5 className='font-extrabold mb-2 ms-7'>Experience </h5>
//           <div className="flex-grow border-t-2 border-yellow-300 align-super ms-7"></div>
//           {experiences.map((exp, index) => (
//             <div key={index} className='ms-10'>
//               <div> </div>
//               <div>
//                 <p className='text-xs mt-3 mb-2'>{exp.month1 || "2024/01"}- {exp.month2 || "2024/05"}</p>
//                 <div className='flex'>
//                   <h6 className='font-semibold text-sm'>{exp.Company || "Resume World company Inc."} </h6>
//                   <h6 className=' text-sm ps-1'>{exp.companyplace}</h6>
//                 </div>
//                 <h6 className='text-sm'>{exp.role || "Software Developer"}</h6>
//                 <ul className='m-2 text-xs'>
//                   <li>{exp.companydescription || predefinedText.experiences.companydescription}</li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template10;


// import React from 'react';
// import { useState } from 'react';
// import profilephoto from '../images/profilephoto.png';
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

// const Template10 = ({
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
//   console.log('imageee', image)
  
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

//   const areAllFieldsFilled = (item, fields) => {
//     return fields.every(field => item[field] && item[field].trim() !== '');
//   };

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
//         console.log("Uploaded image data:", reader.result);
//         const updatedImages = [...images];
//         updatedImages[index] = reader.result;
//         setImages(updatedImages);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
//       <div className='flex break-all'>
//         <div className="md:w-1/ ps-4 pt-5 bg-gray-800 text-white overflow-auto justify-center break-all" >
//           <div>
//             <div className='flex'>
//               <div className="w-32 h-40 b bg-white border-8 text-center break-all">
//                 <img src={image || profilephoto} alt="" style={{ height: '143px' }} />
//               </div>
//               <div className='w-7 h-28 mt-7 bg-yellow-300'></div>
//             </div>
//             <h5 className='text-sm pt-5'>CONTACT </h5>
//             <div className="flex-grow border-t border-white align-super mt-3"></div>
//             <ul className="text-xs md:text-xs lg:text-xs mt-2 break-all w-28">
//               {details.map((del, index) => (
//                 <React.Fragment key={index}>
//                   <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
//                   <li className='text-xs md:text-xs lg:text-xs'>
//                     <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all'>
//                     <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
//                   </li>
//                   <li className='text-xs md:text-xs lg:text-xs break-all'>
//                     <span className="m-2">&#8226;</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
//                   </li>
//                   {del.image && <img src={del.image} alt="" />}
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div><br />
//           <h5 className='text-sm'>EDUCATION </h5>
//           <div className="flex-grow border-t border-white align-super break-all mt-3"></div>
//           {educations.map((edu, index) => (
//             <div key={index} className='ms-3'>
//               <ul className="text-xs md:text-xs lg:text-xs mt-2 break-all w-28">
//                 <li className='font-bold break-all'>{edu.coursename || predefinedText.educations.coursename}</li>
//                 <li className='text-xs md:text-xs lg:text-xs mt-2 break-all'>{edu.schoolname || predefinedText.educations.schoolname}</li>
//                 <li className='text-xs md:text-xs lg:text-xs mt-2 break-all'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
//               </ul>
//             </div>
//           ))} <br />
//           <h5 className='text-sm '>SKILLS  </h5>
//           <div className="flex-grow border-t border-white align-super mt-2"></div>
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <ul className="text-xs md:text-xs lg:text-xs mt-2">
//                 <li>
//                   {skill.skillname || predefinedText.skills.skillname}
//                 </li>
//               </ul>
//             </div>
//           ))}

//           {details.map((del , index) => (
//             <div key={index} className='text-xs mt-4'>
//               <h5 className='text-sm '>Github  </h5>
//               <ul>
//                 <li className={`${del.github ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
//                   <a href={del.github}>{del.github}</a>
//                 </li>
//               </ul>
//             </div>
//           ))}
          
//           <div>
//             {sectionadd.map((section, index) => (
//               <div key={index} className="mt-5">
//                 <h5 className="text-blue-800 break-all">{section.sectiontitle}</h5>
//                 <div className="flex-grow border-t border-white align-super my-2"></div>
//                 <span className="font-bold text-xs w-32">{section.sectionname}</span>
//                 <h6 className={`${paragraphSpacingClass} text-xs break-all`}>{section.sectiondescription}</h6>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='md:w-2/3 md:p white'>
//           {details.map((del, index) => (
//             <div key={index} className='bg-yellow-300 h-28 mt-12'><br />
//               <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 font-bold ms-10">{del.name || predefinedText.details.name}</h3>
//               <p className='text-sm md:text-sm lg:text-sm mt-2 ms-10'> {del.Profession || predefinedText.details.profession}</p> <br /> <br />
//             </div>
//           ))} <br /><br />
//             <div>
              
//               {  summary.map((sum, sumIndex) => (
//                   <div key={`summary-${sumIndex}`} className="mb-6">
//                     <div className="font-bold text-lg text-black border-b-2 border-gray-400 pb-1 mb-2">
//                       Summary
//                     </div>
//                     <div
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
//                     />
//                   </div>
//                 ))}
//                 </div>

//           <h5 className='font-extrabold mb-2 ms-7'>Experience </h5>
//           <div className="flex-grow border-t-2 border-yellow-300 align-super ms-7"></div>
//           {experiences.map((exp, index) => (
//             <div key={index} className='ms-10'>
//               <div> </div>
//               <div>
//                 <p className='text-xs mt-3 mb-2'>{exp.month1 || "2024/01"}- {exp.month2 || "2024/05"}</p>
//                 <div className='flex'>
//                   <h6 className='font-semibold text-sm'>{exp.Company || "Resume World company Inc."} </h6>
//                   <h6 className='text-sm ps-1'>{exp.companyplace}</h6>
//                 </div>
//                 <h6 className='text-sm'>{exp.role || "Software Developer"}</h6>
//                 <div 
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
//                     />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template10;


import React, { useState } from 'react';
import profilephoto from '../images/profilephoto.png';
import DOMPurify from 'dompurify';

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const Template10 = ({
  image,
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isTemplate1Previewing,
  isPreviewScreen,
  predefinedText = {},
}) => {
  const [sections, setSections] = useState([
    { id: 'contact', column: 'left' },
    { id: 'education', column: 'left' },
    { id: 'skills', column: 'left' },
    { id: 'github', column: 'left' },
    { id: 'sectionadd', column: 'left' },
    { id: 'summary', column: 'right' },
    { id: 'experience', column: 'right' }
  ]);
  const [dragging, setDragging] = useState(null);

  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

  const handleDragStart = (e, index) => {
    setDragging(index);
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex, targetColumn) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (draggedIndex === targetIndex) return;

    const newSections = [...sections];
    const [removed] = newSections.splice(draggedIndex, 1);
    removed.column = targetColumn;
    newSections.splice(targetIndex, 0, removed);

    setSections(newSections);
    setDragging(null);
  };

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'contact':
        return (
          <div>
            <h5 className='text-sm font-bold mb-2'>CONTACT</h5>
            <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
            <ul className="text-xs space-y-1 break-all w-full">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center"><span className="mr-2 text-yellow-300">&#8226;</span>{del.address || predefinedText.details.address}</li>
                  <li className="flex items-center"><span className="mr-2 text-yellow-300">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}</li>
                  <li className="flex items-center break-all"><span className="mr-2 text-yellow-300">&#8226;</span>{del.email || predefinedText.details.email}</li>
                  <li className="flex items-center break-all"><span className="mr-2 text-yellow-300">&#8226;</span><a href={del.link || '#'} className="hover:text-yellow-300 transition-colors">{del.link || predefinedText.details.link}</a></li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        );
      case 'education':
        return (
          <div>
            <h5 className='text-sm font-bold mb-2'>EDUCATION</h5>
            <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
            {educations.map((edu, index) => (
              <div key={index} className='mb-3'>
                <p className='font-bold'>{edu.coursename || predefinedText.educations.coursename}</p>
                <p className='text-xs'>{edu.schoolname || predefinedText.educations.schoolname}</p>
                <p className='text-xs'>{edu.schoolplace || predefinedText.educations.schoolplace}</p>
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div>
            <h5 className='text-sm font-bold mb-2'>SKILLS</h5>
            <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
            <ul className="text-xs space-y-1">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-yellow-300">&#8226;</span>{skill.skillname || predefinedText.skills.skillname}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'github':
        return (
          <div>
            <h5 className='text-sm font-bold mb-2'>GITHUB</h5>
            <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
            <ul className="text-xs space-y-1">
              {details.map((del, index) => (
                <li key={index} className="flex items-center break-all">
                  <span className="mr-2 text-yellow-300">&#8226;</span>
                  <a href={del.github} className="hover:text-yellow-300 transition-colors">{del.github}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'sectionadd':
        return (
          <div>
            {sectionadd.map((section, index) => (
              <div key={index} className="mt-5">
                <h5 className="text-sm font-bold mb-2">{section.sectiontitle}</h5>
                <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
                <p className={`${paragraphSpacingClass} text-xs`}>{section.sectiondescription}</p>
              </div>
            ))}
          </div>
        );
      case 'summary':
        return (
          <div className="mb-6">
            <h5 className='font-bold text-lg mb-2'>Summary</h5>
            <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
            {summary.map((sum, sumIndex) => (
              <div key={`summary-${sumIndex}`}>
                <div
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                />
              </div>
            ))}
          </div>
        );
      case 'experience':
        return (
          <div>
            <h5 className='font-bold text-lg mb-2'>Experience</h5>
            <div className="flex-grow border-t-2 border-yellow-300 mb-3"></div>
            {experiences.map((exp, index) => (
              <div key={index} className='mb-4'>
                <p className='text-xs mb-1'>{exp.month1 || "2024/01"} - {exp.month2 || "2024/05"}</p>
                <h6 className='font-semibold text-sm'>{exp.Company || "Resume World company Inc."} {exp.companyplace && `- ${exp.companyplace}`}</h6>
                <h6 className='text-sm mb-1'>{exp.role || "Software Developer"}</h6>
                <div 
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`border ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
      <div className='flex'>
        <div className="w-1/3 p-4 bg-gray-800 text-white overflow-auto" >
          <div className='flex mb-4'>
            <div className="w-32 h-40 bg-white border-8 border-gray-800">
              <img src={image || profilephoto} alt="" className="w-full h-full object-cover" />
            </div>
            {/* <div className='w-7 h-28 mt-7 bg-yellow-300'></div> */}
          </div>
          {sections.filter(section => section.column === 'left').map((section, index) => (
            <div
              key={section.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index, 'left')}
              className={`cursor-move ${dragging === index ? 'opacity-50' : ''} mb-6`}
            >
              {renderSection(section.id)}
            </div>
          ))}
        </div>

        <div className='w-2/3 bg-white'>
          {details.map((del, index) => (
            <div key={index} className='bg-yellow-300 h-28 mt-12 mb-8'>
              <div className="h-full flex flex-col justify-center px-10">
                <h3 className="text-2xl text-gray-800 font-bold">{del.name || predefinedText.details.name}</h3>
                <p className='text-sm text-gray-700 mt-2'>{del.Profession || predefinedText.details.profession}</p>
              </div>
            </div>
          ))}
          <div className="px-10">
            {sections.filter(section => section.column === 'right').map((section, index) => (
              <div
                key={section.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index + sections.filter(s => s.column === 'left').length)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index + sections.filter(s => s.column === 'left').length, 'right')}
                className={`cursor-move ${dragging === index + sections.filter(s => s.column === 'left').length ? 'opacity-50' : ''} mb-6`}
              >
                {renderSection(section.id)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template10;