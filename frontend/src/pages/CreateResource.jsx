import { useState } from "react";
import { createResource } from "../api";

export function CreateResource(){
  const[name, setName] = useState("");
  const[type, setType] = useState("Clothing");
  const[description, setDescription] = useState("");

  async function handleSubmit(){
    let submitObject = {
      name: name,
      type: type,
      description: description
    };

    await createResource(submitObject);

  };

  return (
    <>
    <div className="min-h-screen bg-blue-50 px-4 py-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-xl mt-[-300px]">
        <h2 className="text-3xl font-semibold text-teal-700 text-center mb-6">
          Add A Resource
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Resource Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Resource Name"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
              <div>
                <label>Type:</label>
                  <select
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="type"
                    name="type"
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                      <option value="Clothing">Clothing</option>
                      <option value="Part-Time">Furniture</option>
                      <option value="Medical Equipment">Medical Equipment</option>
                      <option value="Home Goods">Home Goods</option>
                  </select>
              </div>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Description:
            </label>
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              required 
              name="description"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex justify-center">
            <button 
            type="submit"
            className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition-colors w-full max-w-xs"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
};