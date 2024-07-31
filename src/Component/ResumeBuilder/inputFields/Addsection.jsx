// // import React from 'react';


// // const Addsection = ({ Addsection = [], handleInputChange, Addsectionclick, deletesection ,selectedTemplate,setSelectedTemplate}) => {
// //   return (
// //     <div className="mt-10 text-xs sm:text-xs md:text-xs lg:text-xs">
      
// //       {Addsection.map((Addsection1, index) => (
// //         <div key={index} className=" relative mt-4">
         
// //          <div className="flex gap-6">
// //   <div className="w-3/4">

// //   <label htmlFor="sectionname" className="block text-sm font-medium text-gray-700 mb-2">
// //   Skill name: 
// //         </label>
// //         <input 
// //           type="text" 
// //           name="sectionname" 
// //          value={Addsection1.sectionname}
// //               onChange={(e) => handleInputChange(e, index, 'Addsection')}
// //           placeholder="skill name " 
// //           className="w-full p-3 mb-4 border border-black rounded-lg"
// //         />
// //   </div>

// //   <div className="w-3/4">

// //   <label htmlFor="sectiondescription" className="block text-sm font-medium text-gray-700 mb-2">
// //   Skill details: 
// //         </label>
// //         <input 
// //           type="text" 
// //           name="sectiondescription" 
// //           value={Addsection1.sectiondescription}
// //               onChange={(e) => handleInputChange(e, index, 'Addsection')}
// //           placeholder="skill details " 
// //           className="w-full p-3 mb-4 border border-black rounded-lg"
// //         />
       
        
// //   </div>


// // </div>
// // <div className=''>
// //    {(selectedTemplate === 'Template3' || selectedTemplate === 'Template6') && (
// //           <div className='flex gap-6'>
// //              <div className="w-3/4">

// // <label htmlFor="sectionname" className="block text-sm font-medium text-gray-700 mb-2">
// // Skill name: 
// //       </label>
// //       <input 
// //         type="text" 
// //         name="sectionname" 
// //        value={Addsection1.sectionname}
// //             onChange={(e) => handleInputChange(e, index, 'Addsection')}
// //         placeholder="skill name " 
// //         className="w-full p-3 mb-4 border border-black rounded-lg"
// //       />
// // </div>


// // <div className="w-3/4">

// // <label htmlFor="sectiondescription" className="block text-sm font-medium text-gray-700 mb-2">
// // Skill details: 
// //       </label>
// //       <input 
// //         type="text" 
// //         name="sectiondescription" 
// //         value={Addsection1.sectiondescription}
// //             onChange={(e) => handleInputChange(e, index, 'Addsection')}
// //         placeholder="skill details " 
// //         className="w-full p-3 mb-4 border border-black rounded-lg"
// //       />
     
      
// // </div>
            
// //           </div>
// //         )}

// //    </div>

// //             <button
// //               type="button"
// //               onClick={() => deletesection(index)}
// //               className="mt-2 text-red-500"
// //             >
// //               Delete Skill
// //             </button>
          
// //         </div>
// //       ))}
// //     <button className="font-bold text-lg flex items-center" onClick={Addsectionclick}>
// //   <h3>Add Items</h3>
// //   <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
// //     <path fill="none" d="M0 0h24v24H0z"/>
// //     <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
// //     <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
// //   </svg>
// // </button>

// //     </div>
// //   );
// // };

// // export default Addsection;


// import React, { useState } from 'react';

// const Addsection = ({ Addsection = [], handleInputChange, Addsectionclick, deletesection, selectedTemplate, setSelectedTemplate }) => {
//   const [activeIndex, setActiveIndex] = useState(null); // State to control which form is visible

//   const handleToggleForm = (index) => {
//     // Toggle the visibility of the form
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="mt-10 text-xs sm:text-xs md:text-xs lg:text-xs">
//       {/* Button to toggle form visibility */}
//       <button
//         type="button"
//         onClick={() => handleToggleForm(null)} // Close all forms
//         className="font-bold text-lg flex items-center mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
//       >
//         <h3>Add Items</h3>
//         <svg
//           className="h-5 w-5 ml-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <path fill="none" d="M0 0h24v24H0z" />
//           <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" />
//           <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" />
//         </svg>
//       </button>

//       {Addsection.map((Addsection1, index) => (
//         <div key={index} className="relative mt-4 p-4 border border-gray-300 rounded-lg shadow-sm">
//           {/* Button to toggle individual form visibility */}
//           <button
//             type="button"
//             onClick={() => handleToggleForm(index)}
//             className="font-bold text-lg flex items-center mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
//           >
//             <h3>{activeIndex === index ? 'Collapse Item' : 'Edit Item'}</h3>
//             <svg
//               className={`h-5 w-5 ml-2 transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path fill="none" d="M0 0h24v24H0z" />
//               <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" />
//               <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" />
//             </svg>
//           </button>

//           {activeIndex === index && (
//             <>
//               <div className="flex gap-6">
//                 <div className="w-full lg:w-1/2">
//                   <label htmlFor={`sectionname-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
//                     Skill name:
//                   </label>
//                   <input
//                     type="text"
//                     id={`sectionname-${index}`}
//                     name="sectionname"
//                     value={Addsection1.sectionname}
//                     onChange={(e) => handleInputChange(e, index, 'Addsection')}
//                     placeholder="Skill name"
//                     className="w-full p-3 border border-gray-300 rounded-lg"
//                   />
//                 </div>

//                 <div className="w-full lg:w-1/2">
//                   <label htmlFor={`sectiondescription-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
//                     Skill details:
//                   </label>
//                   <input
//                     type="text"
//                     id={`sectiondescription-${index}`}
//                     name="sectiondescription"
//                     value={Addsection1.sectiondescription}
//                     onChange={(e) => handleInputChange(e, index, 'Addsection')}
//                     placeholder="Skill details"
//                     className="w-full p-3 border border-gray-300 rounded-lg"
//                   />
//                 </div>
//               </div>

//               {(selectedTemplate === 'Template3' || selectedTemplate === 'Template6') && (
//                 <div className="flex gap-6 mt-4">
//                   <div className="w-full lg:w-1/2">
//                     <label htmlFor={`sectionname-${index}-extra`} className="block text-sm font-medium text-gray-700 mb-2">
//                       Skill name:
//                     </label>
//                     <input
//                       type="text"
//                       id={`sectionname-${index}-extra`}
//                       name="sectionname"
//                       value={Addsection1.sectionname}
//                       onChange={(e) => handleInputChange(e, index, 'Addsection')}
//                       placeholder="Skill name"
//                       className="w-full p-3 border border-gray-300 rounded-lg"
//                     />
//                   </div>

//                   <div className="w-full lg:w-1/2">
//                     <label htmlFor={`sectiondescription-${index}-extra`} className="block text-sm font-medium text-gray-700 mb-2">
//                       Skill details:
//                     </label>
//                     <input
//                       type="text"
//                       id={`sectiondescription-${index}-extra`}
//                       name="sectiondescription"
//                       value={Addsection1.sectiondescription}
//                       onChange={(e) => handleInputChange(e, index, 'Addsection')}
//                       placeholder="Skill details"
//                       className="w-full p-3 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 onClick={() => deletesection(index)}
//                 className="mt-2 text-red-500 hover:text-red-700 transition"
//               >
//                 Delete Skill
//               </button>
//             </>
//           )}
//         </div>
//       ))}

//       <button
//         className="font-bold text-lg flex items-center mt-4 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
//         onClick={() => handleToggleForm(null)} // Open a new form
//       >
//         <h3>Add New Item</h3>
//         <svg
//           className="h-5 w-5 ml-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <path fill="none" d="M0 0h24v24H0z" />
//           <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" />
//           <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Addsection;


import React, { useState } from 'react';

const AddSection = ({
  sections = [],
  handleInputChange,
  addSection,
  deleteSection,
  sectionNamePlaceholder,
  sectionDetailPlaceholder,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleEditClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleAddSection = () => {
    addSection();
    setExpandedIndex(sections.length); // Set the new item as expanded
  };

  return (
    <div className="mt-10 px-5 md:px-20 text-xs">
      <h3 className="flex justify-between font-bold text-lg mt-4">
        Add Sections:
      </h3>
      <div className="font-normal mb-8">
        Include all relevant sections with names and details. You can add more sections, edit existing ones, or delete them as needed.
      </div>
      <h6 className="font-bold text-xs my-6">* indicates a required field</h6>

      {sections.map((section, index) => (
        <div key={index} className="mt-4 p-4 bg-gray-50 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">
              {section.name || sectionNamePlaceholder}
            </h4>
            <div>
              {expandedIndex === index ? (
                <button
                  type="button"
                  onClick={() => handleEditClick(index)}
                  className="text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition duration-300"
                >
                  Collapse
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleEditClick(index)}
                  className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300"
                >
                  Edit
                </button>
              )}
              <button
                type="button"
                onClick={() => deleteSection(index)}
                className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>

          {expandedIndex === index && (
            <>
              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor={`sectionname-${index}`} className="block text-sm text-gray-700 mb-2 font-bold">
                    Section Name *
                  </label>
                  <input
                    type="text"
                    id={`sectionname-${index}`}
                    name="sectionname"
                    required
                    value={section.name || sectionNamePlaceholder}
                    onChange={(e) => handleInputChange(e, index, 'sections')}
                    placeholder="e.g. Work Experience"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor={`sectiondetail-${index}`} className="block text-sm text-gray-700 mb-2 font-bold">
                    Section Details
                  </label>
                  <input
                    type="text"
                    id={`sectiondetail-${index}`}
                    name="sectiondetail"
                    value={section.detail || sectionDetailPlaceholder}
                    onChange={(e) => handleInputChange(e, index, 'sections')}
                    placeholder="e.g. Job responsibilities"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      <button
        className="mt-4 font-bold text-lg flex items-center bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
        onClick={handleAddSection}
      >
        <span>Add Section</span>
        <svg
          className="h-5 w-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
};

export default AddSection;
