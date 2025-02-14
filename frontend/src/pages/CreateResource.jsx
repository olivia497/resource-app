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
      <form onSubmit={handleSubmit}>
        <h2>Add A Resource</h2>
        <label>Resource Name:</label>
        <input onChange={(e) => setName(e.target.value)} required name="name"/>
        <div>
        <label>Type:</label>
          <select
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

        <label>Description:</label>
        <textarea onChange={(e) => setDescription(e.target.value)} required name="description"/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
};