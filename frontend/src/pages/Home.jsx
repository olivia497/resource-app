
export function Home(){
  return (
    <>
    {/* Background and Padding for the entire section */}
    <div className="bg-blue-50 px-4 py-10 min-h-screen">
      <div className="container-xl lg:container m-auto">

        {/* Information Section - Card Style */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-semibold text-teal-700 mb-4 text-center">Information</h1>
          <p className="text-gray-600 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto aliquid at maxime. Sequi dicta assumenda inventore id animi, officia autem voluptatum magni velit sunt quod odio maxime repellat exercitationem?
          </p>
        </div>

        {/* Layout Container for Staff and Recently Added */}
        <div className="flex justify-between gap-8">

          {/* Staff Section - Left side */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Staff</h2>
              <span className="text-gray-600 ml-10">Email:</span>
              <div className="text-gray-600">
                  <input 
                    placeholder={"email@example.com"} 
                    // onChange={handleChange} 
                    name="email" 
                    required
                    className="p-2 m-2 ml-10 mb-2 w-5/6 rounded-lg border-solid outline outline-offset-2"
                  />
              </div>
              <span className="text-gray-600 ml-10">Password:</span>
              <div>
                  <input 
                    placeholder={"Password"} 
                    // onChange={handleChange} 
                    name="password" 
                    required
                    type="password"
                    className="p-2 m-2 ml-10 w-5/6 rounded-lg border-solid outline outline-offset-2"
                  />
                  <br></br>
                  <button type="submit" className="text-white text-center mx-auto px-6 py-2 mt-2 bg-teal-600 rounded-md hover:bg-teal-500 transition-colors w-max">
                    Login
                  </button>
              </div>
            </div>
          </div>

          {/* Recently Added Section - Right side */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Recently Added</h2>
              <h3 className="text-lg text-gray-600 mb-4">Resource Name</h3>
              <p className="text-gray-500 mb-4">Resource Image</p>
              <p>Read More</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
