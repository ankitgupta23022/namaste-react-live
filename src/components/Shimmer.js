const Shimmer = () => {
  return (
    /*<div className="restaurant-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>*/

    //w-64 p-2 m-2

    <div className="mx-auto flex flex-wrap pt-8">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className="p-2 md:w-1/6 float-left" key={index}>
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
              <div className="p-6">
                <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                <div className="flex items-center flex-wrap "></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
