// import React, { useState, useEffect } from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
// import profilephoto from '../images/profilephoto.png';

// const Template15 = ({
//     image,
//     data = {},
//     boxBgColor,
//     font,
//     textSize,
//     sectionSpacing,
//     paragraphSpacing,
//     lineSpacing,
//     isPreviewScreen,
//     isTemplate1Previewing,
//     predefinedText = {},
//     skillsfromapi
// }) => {
//   // Define classes based on props
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   // Provide default values for data properties
//   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data;

//   // Debug logs to trace the data flow
//   useEffect(() => {
//     console.log("data: ", data);
//     console.log("details: ", details);
//     console.log("experiences: ", experiences);
//     console.log("educations: ", educations);
//     console.log("skills: ", skills);
//     console.log("sectionadd: ", sectionadd);
//     console.log("summary: ", summary);
//   }, [data]);

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

//   const allDetailsFilled5 = sectionadd.some(section => areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription']));

//   const allDetailsFilled6 = summary.some(summar => summar.summarydescription.trim() !== '');

//   const truncate = (str, maxLength) => {
//     if (!str) return '';
//     return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
//   };

//   return (
//     <div
//       className={`border-2 border-gray-300 p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font }}
//     >
//       <div className="flex items-center">
//         <div className='flex items-center'>
//           <div className="w-24 h-24 bg-white border-4 text-center mr-3 overflow-hidden">
//             <img src={image || profilephoto} alt="Profile" className="w-full h-full object-cover"/>
//           </div>
//         </div>
//         <div className="w-3/4">
//           {details.map((del, index) => (
//             <div key={index}>
//               <h3 className="text-3xl text-blue-700 font-bold">{truncate(del.name || predefinedText.details?.name, 20)}</h3>
//               <ul className="flex flex-col mt-2 gap-1 text-sm">
//                 <li><FaMapMarkerAlt className="inline-block align-text-top mr-1" />{truncate(del.address || predefinedText.details?.address, 25)}</li>
//                 <li><FaPhoneAlt className="inline-block align-text-top mr-1" />{truncate(del.phoneNumber || predefinedText.details?.phoneNumber, 15)}</li>
//                 <li><FaEnvelope className="inline-block align-text-top mr-1" />{truncate(del.email || predefinedText.details?.email, 25)}</li>
//                 <li><FaLinkedin className="inline-block align-text-top mr-1" /><a href={del.link || '#'} target="_blank" rel="noopener noreferrer">{truncate(del.link || predefinedText.details?.link, 15)}</a></li>
//                 <li><FaGithub className="inline-block align-text-top mr-1" /><a href={del.github || '#'} target="_blank" rel="noopener noreferrer">{truncate(del.github || predefinedText.details?.github, 15)}</a></li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-4">
//         <h5 className="text-blue-700 font-bold">SUMMARY</h5>
//         <div className="border-t border-gray-300 mt-1 mb-2"></div>
//         {summary.map((sum, index) => (
//           <div
//           className="text-sm prose prose-sm max-w-none"
//           dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
//         />
//         ))}
//       </div>

//       <div className="mt-4">
//         <h5 className="text-blue-700 font-bold">WORK EXPERIENCE</h5>
//         <div className="border-t border-gray-300 mt-1 mb-2"></div>
//         {experiences.map((exp, index) => (
//           <div key={index} className="mt-2">
//             <div className="flex justify-between">
//               <div>
//                 <h6 className="font-bold">{exp.Company || predefinedText.experiences?.company}</h6>
//                 <p className="text-sm">{exp.role || predefinedText.experiences?.role}</p>
//               </div>
//               <p className="text-sm">{exp.month1} - {exp.month2}</p>
//             </div>
//             <div 
//                       className="text-sm prose prose-sm max-w-none"
//                       dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
//                     />
//           </div>
//         ))}
//       </div>

//       <div className="mt-4">
//         <h5 className="text-blue-700 font-bold">EDUCATION</h5>
//         <div className="border-t border-gray-300 mt-1 mb-2"></div>
//         {educations.map((edu, index) => (
//           <div key={index} className="mt-2">
//             <div className="flex justify-between">
//               <div>
//                 <h6 className="font-bold">{edu.schoolname || predefinedText.educations?.schoolname}</h6>
//                 <p className="text-sm">{edu.coursename || predefinedText.educations?.coursename}</p>
//               </div>
//               <p className="text-sm">{edu.edmonth1} - {edu.edmonth2}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4">
//         <h5 className="text-blue-700 font-bold">SKILLS</h5>
//         <div className="border-t border-gray-300 mt-1 mb-2"></div>
//         <ul className="text-sm  pl-4">
//           {skills.map((skill, index) => (
//             <li key={index}>{skill.skillname || predefinedText.skills?.skillname}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-4">
//         <h5 className="text-blue-700 font-bold">ADDITIONAL SECTIONS</h5>
//         <div className="border-t border-gray-300 mt-1 mb-2"></div>
//         {sectionadd.map((section, index) => (
//           <div key={index} className="mt-2">
//             <h6 className="font-bold">{section.sectiontitle || predefinedText.sectionadd?.sectiontitle}</h6>
//             <p className="text-sm mt-1">{section.sectiondescription || predefinedText.sectionadd?.sectiondescription}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Template15;



import React, { useState, useEffect, useCallback } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilephoto from '../images/profilephoto.png';

const Template15 = ({
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
    skillsfromapi
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data;

  const [sections, setSections] = useState([
    { id: 'summary', title: 'SUMMARY' },
    { id: 'experience', title: 'WORK EXPERIENCE' },
    { id: 'education', title: 'EDUCATION' },
    { id: 'skills', title: 'SKILLS' },
    { id: 'additional', title: 'ADDITIONAL SECTIONS' }
  ]);

  const [draggingSection, setDraggingSection] = useState(null);

  // Debug logs to trace the data flow
  useEffect(() => {
    console.log("data: ", data);
    console.log("details: ", details);
    console.log("experiences: ", experiences);
    console.log("educations: ", educations);
    console.log("skills: ", skills);
    console.log("sectionadd: ", sectionadd);
    console.log("summary: ", summary);
  }, [data]);

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };

  // Check if all details are filled
  const allDetailsFilled = details.every(detail =>
    areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
  );

  const allDetailsFilled2 = experiences.every(experience =>
    areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
  );

  const allDetailsFilled3 = educations.every(education =>
    areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
  );

  const allDetailsFilled4 = skills.every(skill =>
    areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
  );

  const allDetailsFilled5 = sectionadd.some(section => areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription']));

  const allDetailsFilled6 = summary.some(summar => summar.summarydescription.trim() !== '');

  const truncate = (str, maxLength) => {
    if (!str) return '';
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  const handleDragStart = (e, sectionId) => {
    setDraggingSection(sectionId);
    e.dataTransfer.setData('text/plain', sectionId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, targetId) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('text');
    
    setSections(prevSections => {
      const newSections = [...prevSections];
      const sourceIndex = newSections.findIndex(section => section.id === sourceId);
      const targetIndex = newSections.findIndex(section => section.id === targetId);
      
      const [removed] = newSections.splice(sourceIndex, 1);
      newSections.splice(targetIndex, 0, removed);
      
      return newSections;
    });

    setDraggingSection(null);
  }, []);

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        return (
          <div>
            {summary.map((sum, index) => (
              <div
                key={index}
                className="text-sm prose prose-sm max-w-none"
                dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
              />
            ))}
          </div>
        );
      case 'experience':
        return (
          <div>
            {experiences.map((exp, index) => (
              <div key={index} className="mt-2">
                <div className="flex justify-between">
                  <div>
                    <h6 className="font-bold">{exp.Company || predefinedText.experiences?.company}</h6>
                    <p className="text-sm">{exp.role || predefinedText.experiences?.role}</p>
                  </div>
                  <p className="text-sm">{exp.month1} - {exp.month2}</p>
                </div>
                <div 
                  className="text-sm prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                />
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div>
            {educations.map((edu, index) => (
              <div key={index} className="mt-2">
                <div className="flex justify-between">
                  <div>
                    <h6 className="font-bold">{edu.schoolname || predefinedText.educations?.schoolname}</h6>
                    <p className="text-sm">{edu.coursename || predefinedText.educations?.coursename}</p>
                  </div>
                  <p className="text-sm">{edu.edmonth1} - {edu.edmonth2}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <ul className="text-sm pl-4">
            {skills.map((skill, index) => (
              <li key={index}>{skill.skillname || predefinedText.skills?.skillname}</li>
            ))}
          </ul>
        );
      case 'additional':
        return (
          <div>
            {sectionadd.map((section, index) => (
              <div key={index} className="mt-2">
                <h6 className="font-bold">{section.sectiontitle || predefinedText.sectionadd?.sectiontitle}</h6>
                <p className="text-sm mt-1">{section.sectiondescription || predefinedText.sectionadd?.sectiondescription}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`border-2 border-gray-300 p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      <div className="flex items-center">
        <div className='flex items-center'>
          <div className="w-24 h-24 bg-white border-4 text-center mr-3 overflow-hidden">
            <img src={image || profilephoto} alt="Profile" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="w-3/4">
          {details.map((del, index) => (
            <div key={index}>
              <h3 className="text-3xl text-blue-700 font-bold">{truncate(del.name || predefinedText.details?.name, 20)}</h3>
              <ul className="flex flex-col mt-2 gap-1 text-sm">
                <li><FaMapMarkerAlt className="inline-block align-text-top mr-1" />{truncate(del.address || predefinedText.details?.address, 25)}</li>
                <li><FaPhoneAlt className="inline-block align-text-top mr-1" />{truncate(del.phoneNumber || predefinedText.details?.phoneNumber, 15)}</li>
                <li><FaEnvelope className="inline-block align-text-top mr-1" />{truncate(del.email || predefinedText.details?.email, 25)}</li>
                <li><FaLinkedin className="inline-block align-text-top mr-1" /><a href={del.link || '#'} target="_blank" rel="noopener noreferrer">{truncate(del.link || predefinedText.details?.link, 15)}</a></li>
                <li><FaGithub className="inline-block align-text-top mr-1" /><a href={del.github || '#'} target="_blank" rel="noopener noreferrer">{truncate(del.github || predefinedText.details?.github, 15)}</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Draggable Sections */}
      {sections.map((section) => (
        <div
          key={section.id}
          draggable
          onDragStart={(e) => handleDragStart(e, section.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, section.id)}
          className={`mt-4 ${draggingSection === section.id ? 'opacity-50' : ''}`}
        >
          <h5 className="text-blue-700 font-bold">{section.title}</h5>
          <div className="border-t border-gray-300 mt-1 mb-2"></div>
          {renderSection(section.id)}
        </div>
      ))}
    </div>
  );
};

export default Template15;