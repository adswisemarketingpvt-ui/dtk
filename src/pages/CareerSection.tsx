import React from 'react';

const CareerSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-stone-100 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-3 mb-8">
            <div className="w-1 h-24 bg-amber-900 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build your career<br />with <span className='text-amber-900'>DTK</span> 
            </h1>
          </div>
        </div>

        {/* Image Collage */}
        <div className="relative mb-12">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-12 w-12 h-12 bg-yellow-400 rounded-full opacity-80"></div>
          <div className="absolute top-24 right-0 w-8 h-8 bg-green-300 rounded-lg opacity-70"></div>
          <div className="absolute top-12 left-1/3 w-6 h-6 bg-orange-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 left-12 w-10 h-10 bg-orange-400 rounded-lg opacity-70"></div>
          
          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-4 relative">
            {/* Row 1 */}
            <div className="col-span-3 row-span-2">
              <div className="bg-gray-200  overflow-hidden h-48 shadow-md">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5clSJrSwI_R9Ow2UfOBXlSwSQBImwSVXVg&s?w=400&h=500&fit=crop" 
                  alt="Professional working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-4 col-start-4">
              <div className="bg-gray-200  overflow-hidden h-40 shadow-md">
                <img 
                  src="https://i.pinimg.com/1200x/c4/cd/cd/c4cdcd7906bb13b7e92b1f4c7a480a26.jpg?w=500&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-5 col-start-8 row-span-2">
              <div className="bg-gray-200  overflow-hidden h-48 shadow-md">
                <img 
                  src="https://i.pinimg.com/736x/60/08/b8/6008b8278e5a133bc00387bbedf2ce86.jpg?w=600&h=500&fit=crop" 
                  alt="Woman working on laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="col-span-4 col-start-4 row-start-2">
              <div className="bg-gray-200 overflow-hidden h-40 shadow-md">
                <img 
                  src="https://i.pinimg.com/1200x/5b/a1/83/5ba183396633a3ff46b58a406283be70.jpg?w=500&h=400&fit=crop" 
                  alt="Computer workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="col-span-3 col-start-3 row-start-3">
              <div className="bg-gray-200  overflow-hidden h-44 shadow-md">
                <img 
                  src="https://i.pinimg.com/736x/64/ad/a3/64ada39337de263fd07aa902c83a9d43.jpg?w=400&h=500&fit=crop" 
                  alt="Person with headphones" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-3 col-start-6 row-start-3">
              <div className="bg-gray-200  overflow-hidden h-44 shadow-md">
                <img 
                  src="https://i.pinimg.com/1200x/24/26/be/2426be726ac03c16ae2bed27c4af219d.jpg?w=400&h=500&fit=crop" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-4 col-start-9 row-start-3">
              <div className="bg-gray-200  overflow-hidden h-44 shadow-md">
                <img 
                  src="https://i.pinimg.com/1200x/18/92/aa/1892aa8c1a978edfbd393c8373c1e68e.jpg?w=500&h=500&fit=crop" 
                  alt="Person with laptop relaxing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-4xl">
          <p className="text-gray-600 text-base leading-relaxed">
            Are you passionate about shaping the future of footwear and fashion? DTK Footwear opens doors for talented professionals, fresh graduates, and ambitious students seeking internships, industry training, and full-time opportunities! Become a part of our legacy, learn from industry leaders, and accelerate your professional journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;