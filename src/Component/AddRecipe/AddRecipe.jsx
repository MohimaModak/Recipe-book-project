import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { IoClose } from "react-icons/io5";
import { GiCook } from "react-icons/gi";

const AddRecipe = () => {
  const handleAddRecipe = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const description = e.target.description.value;
    const duration = e.target.duration.value;
    const addedRecipe = { name, photo, description, duration };
    console.log(addedRecipe);

    axios.post("http://localhost:4000/addRecipe", addedRecipe).then((data) => {
      console.log(data.data);
      Swal.fire({
        title: "Wow",
        text: "Successfully added",
        confirmButtonText: "Okay",
      });
    });
  };

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="m-10">
      <div onClick={handleShow()}>
        {show == true ? (
          <GiCook>
            {" "}
            <form
              onSubmit={handleAddRecipe}
              className=" font-semibold background"
            >
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-white">Recipe name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Duration</span>
                </label>
                <input
                  type="text"
                  placeholder="duration"
                  name="duration"
                  className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Submit</span>
                </label>
                <input
                  className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </GiCook>
        ) : (
          <IoClose></IoClose>
        )}
      </div>
    </div>
  );
};

export default AddRecipe;
