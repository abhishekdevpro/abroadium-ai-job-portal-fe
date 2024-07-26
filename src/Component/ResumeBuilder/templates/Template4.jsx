
// import DOMPurify from 'dompurify';
// import React from 'react';
// const createMarkup = (html) => {
//   return {
//     __html: DOMPurify.sanitize(html, {
//       ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
//       ALLOWED_ATTR: ['href', 'target', 'class']
//     }).replace(/<ul>/g, '<ul class="list-disc-bold">')
//       .replace(/<ol>/g, '<ol class="list-decimal-custom">')
//   };
// };

// const Template4 = ({
//   data,
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
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

//   return (
//     <div
//       className={`border-2 border-gray-300 p-10 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font, backgroundColor: boxBgColor }}
//     >

//       {/* Rendering details */}
//       {details.map((del, index) => (
//         <div key={index}>
//           <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold text-cyan-600 ">{del.name || predefinedText.details.name}</h3>
//           <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-2">{del.Profession || predefinedText.details.Profession}</p>
//           <ul className="flex text-xs sm:text-sm md:text-xs lg:text-xs m-2">
//             <li>{del.address || predefinedText.details.address}</li>
//             <li className={`${del.phoneNumber ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.phoneNumber || predefinedText.details.phoneNumber}</li>
//             <li className={`${del.email ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.email || predefinedText.details.email}</li>
//             <li className={`${del.link ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>
//               <a href={del.link}>{del.link}</a>
//             </li>
//           </ul>
//         </div>
//       ))}

// {summary.map((sum, index) => (
//             <div key={`summary`} className="mb-6">
//             <div className="text-2xl font-semibold text-cyan-600 pb-1 mb-2">
//               Summary
//             </div>
//             <div
//               className="text-sm prose prose-sm max-w-none"
//               dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
//             />
//           </div>
//           ))}

//       {/* Rendering work experience */}
//       <div>
//         <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
//         {experiences.map((exp, index) => (
//           <div key={index}>
//             <div className="flex justify-between">
//               <h6 className="font-bold break-all">{exp.Company}</h6>
//               <p>{exp.month1} - {exp.month2}</p>
//             </div>
//             <h6>{exp.role}</h6>
//             <div
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(exp?.companydescription || predefinedText.sectionadd?.companydescription || "No description provided")}
//                     />
//             <br />
//           </div>
//         ))}
//       </div>

//       {/* Rendering education */}
//       <div className="page-break"></div>
//       <div className="flex items-center">
//         <h5 className="text-cyan-600 font-bold">EDUCATION</h5>
//         <div className="flex-grow align-super"></div>
//       </div>
//       {educations.map((edu, index) => (
//         <div key={index}>
//           <div className="flex justify-between">
//             <div className="flex gap-2">
//               <h4 className="font-bold">{edu.schoolname}</h4>
//               <h6>{edu.schoolplace}</h6>
//             </div>
//             <p>{edu.edmonth1} - {edu.edmonth2}</p>
//           </div>
//           <p>{edu.coursename}</p>
//         </div>
//       ))}

//       {/* Rendering skills */}
//       <div className="flex items-center">
//         <h5 className="text-cyan-600 font-bold">SKILLS</h5>
//         <div className="flex-grow "></div>
//       </div>
//       {skills.map((skill, index) => (
//         <div key={index} className="flex">
//           <span className="text-xs sm:text-sm w-32">{skill.skillname}</span>
//           {/* <h6 className="text-xs sm:text-sm">{skill.skilldetails}</h6> */}
//         </div>
//       ))}

//       {/* Rendering additional sections */}
//       {sectionadd.map((section, index) => (
//         <div key={index} className="mt-5">
//           <div className="page-break"></div>
//           <div className="flex items-center">
//             <h5 className="text-cyan-600 font-bold">{section.sectiontitle}</h5>
//             <div className="flex-grow  align-super"></div>
//           </div>
//           <span className="font-bold text-xs sm:text-sm w-32">{section.sectionname}</span>
//           <h6 className="text-xs sm:text-sm">{section.sectiondescription}</h6>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Template4;


import DOMPurify from 'dompurify';
import React, { useState } from 'react';

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const DraggableSection = ({ children, id, index, moveSection }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index);
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    moveSection(draggedIndex, index);
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={() => setIsDragging(false)}
      className={`cursor-move ${isDragging ? 'opacity-50' : ''}`}
    >
      {children}
    </div>
  );
};

const Template4 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  predefinedText = {},
}) => {
  const [sections, setSections] = useState([
    { type: 'details', data: data.details },
    { type: 'summary', data: data.summary },
    { type: 'experiences', data: data.experiences },
    { type: 'educations', data: data.educations },
    { type: 'skills', data: data.skills },
    ...data.sectionadd.map(section => ({ type: 'sectionadd', data: [section] }))
  ]);

  const moveSection = (fromIndex, toIndex) => {
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    newSections.splice(toIndex, 0, movedSection);
    setSections(newSections);
  };

  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'details':
        return (
          <DraggableSection key={`details-${index}`} index={index} moveSection={moveSection}>
            {section.data.map((del, idx) => (
              <div key={idx}>
                <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold text-cyan-600">{del.name || predefinedText.details.name}</h3>
                <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-2">{del.Profession || predefinedText.details.Profession}</p>
                <ul className="flex text-xs sm:text-sm md:text-xs lg:text-xs m-2">
                  <li>{del.address || predefinedText.details.address}</li>
                  <li className={`${del.phoneNumber ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.phoneNumber || predefinedText.details.phoneNumber}</li>
                  <li className={`${del.email ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.email || predefinedText.details.email}</li>
                  <li className={`${del.link ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>
                    <a href={del.link}>{del.link}</a>
                  </li>
                </ul>
              </div>
            ))}
          </DraggableSection>
        );
      case 'summary':
        return (
          <DraggableSection key={`summary-${index}`} index={index} moveSection={moveSection}>
            {section.data.map((sum, idx) => (
              <div key={`summary-${idx}`} className="mb-6">
                <div className="text-2xl font-semibold text-cyan-600 pb-1 mb-2">
                  Summary
                </div>
                <div
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                />
              </div>
            ))}
          </DraggableSection>
        );
      case 'experiences':
        return (
          <DraggableSection key={`experiences-${index}`} index={index} moveSection={moveSection}>
            <div>
              <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
              {section.data.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <h6 className="font-bold break-all">{exp.Company}</h6>
                    <p>{exp.month1} - {exp.month2}</p>
                  </div>
                  <h6>{exp.role}</h6>
                  <div
                    className="text-sm prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={createMarkup(exp?.companydescription || predefinedText.sectionadd?.companydescription || "No description provided")}
                  />
                  <br />
                </div>
              ))}
            </div>
          </DraggableSection>
        );
      case 'educations':
        return (
          <DraggableSection key={`educations-${index}`} index={index} moveSection={moveSection}>
            <div className="page-break"></div>
            <div className="flex items-center">
              <h5 className="text-cyan-600 font-bold">EDUCATION</h5>
              <div className="flex-grow align-super"></div>
            </div>
            {section.data.map((edu, idx) => (
              <div key={idx}>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <h4 className="font-bold">{edu.schoolname}</h4>
                    <h6>{edu.schoolplace}</h6>
                  </div>
                  <p>{edu.edmonth1} - {edu.edmonth2}</p>
                </div>
                <p>{edu.coursename}</p>
              </div>
            ))}
          </DraggableSection>
        );
      case 'skills':
        return (
          <DraggableSection key={`skills-${index}`} index={index} moveSection={moveSection}>
            <div className="flex items-center">
              <h5 className="text-cyan-600 font-bold">SKILLS</h5>
              <div className="flex-grow "></div>
            </div>
            {section.data.map((skill, idx) => (
              <div key={idx} className="flex">
                <span className="text-xs sm:text-sm w-32">{skill.skillname}</span>
              </div>
            ))}
          </DraggableSection>
        );
      case 'sectionadd':
        return (
          <DraggableSection key={`sectionadd-${index}`} index={index} moveSection={moveSection}>
            {section.data.map((add, idx) => (
              <div key={idx} className="mt-5">
                <div className="page-break"></div>
                <div className="flex items-center">
                  <h5 className="text-cyan-600 font-bold">{add.sectiontitle}</h5>
                  <div className="flex-grow align-super"></div>
                </div>
                <span className="font-bold text-xs sm:text-sm w-32">{add.sectionname}</span>
                <h6 className="text-xs sm:text-sm">{add.sectiondescription}</h6>
              </div>
            ))}
          </DraggableSection>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`border-2 border-gray-300 p-10 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font, backgroundColor: boxBgColor }}
    >
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default Template4;