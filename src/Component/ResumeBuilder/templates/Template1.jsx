
import DOMPurify from "dompurify";
import React, { useState, useEffect, useMemo } from "react";

const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: ['href', 'target', 'class']
    }).replace(/<ul>/g, '<ul class="list-disc-bold">')
      .replace(/<ol>/g, '<ol class="list-decimal-custom">')
  };
};

const Template1 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  predefinedText = {},
}) => {
  const textSizeClass =
    textSize === "small"
      ? "text-sm"
      : textSize === "medium"
      ? "text-base"
      : "text-lg";
  const sectionSpacingClass =
    sectionSpacing === "small"
      ? "space-y-2"
      : sectionSpacing === "medium"
      ? "space-y-4"
      : "space-y-6";
  const paragraphSpacingClass =
    paragraphSpacing === "small"
      ? "mb-2"
      : paragraphSpacing === "medium"
      ? "mb-4"
      : "mb-6";
  const lineHeightClass =
    lineSpacing === "1"
      ? "leading-tight"
      : lineSpacing === "1.5"
      ? "leading-snug"
      : "leading-relaxed";

  const [sections, setSections] = useState([]);

  const memoizedSections = useMemo(() => [
    { id: "details", content: data.details || [] },
    { id: "summary", content: data.summary || [] },
    { id: "experiences", content: data.experiences || [] },
    { id: "educations", content: data.educations || [] },
    { id: "skills", content: data.skills || [] },
    { id: "sectionadd", content: data.sectionadd || [] },
  ], [data]);

  useEffect(() => {
    setSections(memoizedSections);
  }, [memoizedSections]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("sectionIndex", index.toString());
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData("sectionIndex"), 10);
    if (dragIndex === dropIndex) return;

    const updatedSections = [...sections];
    const [draggedSection] = updatedSections.splice(dragIndex, 1);
    updatedSections.splice(dropIndex, 0, draggedSection);
    setSections(updatedSections);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font, backgroundColor: boxBgColor }}
    >
      <style jsx>{`
        .list-disc::marker,
        .list-decimal::marker {
          color: black;
          font-weight: bold;
        }
        li {
          padding-left: 0.5em;
        }
      `}</style>
      {sections.map((section, index) => (
        <div
          key={`${section.id}-${index}`}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          className="mb-6"
        >
          {section.id === "details" && (
            <div>
              {section.content && section.content.length > 0 ? (
                section.content.map((del, delIndex) => (
                  <div key={`details-${delIndex}`} className="flex flex-col mb-6">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl text-black font-bold border-b-2 border-gray-400 pb-1 mb-2">
                        {del?.name || predefinedText.details?.name || "Name not provided"}
                      </h3>
                      <p className="text-xl text-gray-700">
                        {del?.Profession || predefinedText.details?.profession || "Profession not provided"}
                      </p>
                    </div>
                    <div className="rounded-lg p-4 bg-white border border-gray-300 mb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center text-xs py-2 px-4">
                        {[
                          { text: del?.address || predefinedText.details?.address || "Address not provided" },
                          { text: del?.phoneNumber || predefinedText.details?.phoneNumber || "Phone number not provided" },
                          { text: del?.email || predefinedText.details?.email || "Email not provided" },
                          { text: del?.link || predefinedText.details?.link || "LinkedIn not provided", isLink: true, href: del?.linkedin },
                          { text: del?.github || predefinedText.details?.github || "GitHub not provided", isLink: true, href: del?.github },
                        ].map((item, itemIndex) => (
                          <div key={`detail-item-${itemIndex}`} className="flex items-center space-x-2">
                            <span className="text-black font-bold text-xl">•</span>
                            {item.isLink ? (
                              <a href={item.href} className="hover:underline text-xl text-gray-700">{item.text}</a>
                            ) : (
                              <span className="text-xl text-gray-700">{item.text}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No details provided</div>
              )}
            </div>
          )}

          {section.id === "summary" && (
            <div>
              {section.content && section.content.length > 0 ? (
                section.content.map((sum, sumIndex) => (
                  <div key={`summary-${sumIndex}`} className="mb-6">
                    <div className="font-bold text-lg text-black border-b-2 border-gray-400 pb-1 mb-2">
                      Summary
                    </div>
                    <div
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(sum?.summarydescription || "I am a journalist in a private company, I have been a journalist for 3 years. I am very happy in my work.")}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No summary provided</div>
              )}
            </div>
          )}

          {section.id === "experiences" && (
            <div className="mb-6">
              <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">
                WORK EXPERIENCE
              </h5>
              {section.content && section.content.length > 0 ? (
                section.content.map((exp, expIndex) => (
                  <div key={`exp-${expIndex}`} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h6 className="font-bold text-lg text-gray-800 break-all">
                        {exp?.Company || predefinedText.experiences?.Company || "Company not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {exp?.month1} - {exp?.month2}
                      </p>
                    </div>
                    <div className="flex justify-between mb-1">
                      <h6 className="text-sm text-gray-700">
                        {exp?.role || predefinedText.experiences?.role || "Role not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {exp?.companyplace || predefinedText.experiences?.companyplace || "Company place not provided"}
                      </p>
                    </div>
                    <div 
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(exp.companydescription)}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No experience provided</div>
              )}
            </div>
          )}

          {section.id === "educations" && (
            <div className="mb-6 page-break">
              <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">
                EDUCATION
              </h5>
              {section.content && section.content.length > 0 ? (
                section.content.map((edu, eduIndex) => (
                  <div key={`edu-${eduIndex}`} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h6 className="font-bold text-lg text-gray-800 break-all">
                        {edu?.schoolname || predefinedText.educations?.schoolname || "School name not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {edu?.edmonth1} - {edu?.edmonth2}
                      </p>
                    </div>
                    <div className="flex justify-between mb-1">
                      <h6 className="text-sm text-gray-700">
                        {edu?.coursename || predefinedText.educations?.coursename || "Degree not provided"}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {edu?.schoolplace || predefinedText.educations?.schoolplace || "Education place not provided"}
                      </p>
                    </div>
                    {/* <div 
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(edu.description)}
                    /> */}
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No education provided</div>
              )}
            </div>
          )}

          {section.id === "skills" && (
            <div className="mb-6">
              <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">
                SKILLS
              </h5>
              {section.content && section.content.length > 0 ? (
                section.content.map((skill, skillIndex) => (
                  <div key={`skill-${skillIndex}`} className="mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-700">
                        {skill?.skillname || predefinedText.skills?.skillname || "Skill not provided"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No skills provided</div>
              )}
            </div>
          )}

          {section.id === "sectionadd" && (
            <div className="mb-6">
              {section.content && section.content.length > 0 ? (
                section.content.map((sec, secIndex) => (
                  <div key={`sectionadd-${secIndex}`} className="mb-4">
                    <h5 className="font-bold text-lg text-gray-800">
                      {sec?.sectiontitle || predefinedText.sectionadd?.sectiontitle || "Title not provided"}
                    </h5>
                    <div
                      className="text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={createMarkup(sec?.sectiondescription || predefinedText.sectionadd?.sectiondescription || "No description provided")}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-400 italic">No additional sections provided</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Template1;