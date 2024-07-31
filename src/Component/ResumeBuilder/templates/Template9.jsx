

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

const Template9 = ({
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
  const [sections, setSections] = useState([
    { id: 'contact', column: 'left' },
    { id: 'education', column: 'left' },
    { id: 'experiences', column: 'right' },
    { id: 'skills', column: 'right' },
    { id: 'sectionadd', column: 'right' },
    { id: 'summary', column: 'right' }
  ]);
  const [dragging, setDragging] = useState(null);

  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  const { details = [{}], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

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
            <h5 className='text-sm pt-5'>CONTACT</h5>
            <ul className="text-xs md:text-xs lg:text-xs mt-2">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all'>
                    <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        );
      case 'education':
        return (
          <div>
            <h5 className='font-bold mb-2'>EDUCATION</h5>
            {educations.map((edu, index) => (
              <div key={index}>
                <ul className="text-xs md:text-xs lg:text-xs mt-2">
                  <li className='font-bold'>{edu.coursename || predefinedText.educations.coursename}</li>
                  <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname || predefinedText.educations.schoolname}</li>
                  <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
                </ul>
              </div>
            ))}
          </div>
        );
      case 'experiences':
        return (
          <div>
            <h5 className='font-bold mb-2'>Work Experience</h5>
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className='flex justify-between mt-4'>
                  <h6 className='font-bold'>{exp.Company || "ABC Inc."}</h6>
                  <p>{exp.month1} - {exp.month2}</p>
                </div>
                <h6>{exp.role || "Software Developer"}</h6>
                <div 
                    className="text-sm prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                />
                <br />
              </div>
            ))}
          </div>
        );
      case 'skills':
        return (
          <div>
            <h5 className='font-bold mb-2'>SKILLS</h5>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {skill.skillname || predefinedText.skills.skillname}
                </div>
              ))}
            </div>
          </div>
        );
      case 'sectionadd':
        return (
          <div>
            {sectionadd.map((section, index) => (
              <div key={index} className="mt-5">
                <h5 className="text-blue-800 break-all">{section.sectiontitle}</h5>
                <div className="flex-grow border-t border-white align-super my-2"></div>
                <span className="font-bold text-xs w-32">{section.sectionname}</span>
                <h6 className={`${paragraphSpacingClass} text-xs break-all`} dangerouslySetInnerHTML={{ __html: section.sectiondescription }} />
              </div>
            ))}
          </div>
        );
      case 'summary':
        return (
          <div className="w-2/4">
            <h5 className="font-extrabold text-xl text-indigo-700">About Me</h5>
            {summary.map((sum, index) => (
              <div key={index}>
                <div
                    className="text-sm prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                />
                <br />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
      <div className='flex'>
        <div className="md:w-1/3 md:p-4 bg-[#333456] text-white overflow-auto justify-center">
          <div className="w-32 h-32 border-blue-950 bg-white rounded-full border-8 text-center break-all">
            <img src={image || profilephoto} alt="" style={{ height: '112px', width: '112px' }} className='rounded-full'/>
          </div>
          {sections.filter(section => section.column === 'left').map((section, index) => (
            <div
              key={section.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index, 'left')}
              className={`cursor-move ${dragging === index ? 'opacity-50' : ''}`}
            >
              {renderSection(section.id)}
            </div>
          ))}
        </div>
        <div className="md:w-2/3 md:p-4 bg-white">
          {sections.filter(section => section.column === 'right').map((section, index) => (
            <div
              key={section.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index + sections.filter(s => s.column === 'left').length)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index + sections.filter(s => s.column === 'left').length, 'right')}
              className={`cursor-move ${dragging === index + sections.filter(s => s.column === 'left').length ? 'opacity-50' : ''}`}
            >
              {renderSection(section.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template9;