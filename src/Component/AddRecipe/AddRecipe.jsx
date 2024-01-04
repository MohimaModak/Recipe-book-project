import React from "react";
import video from "../../assets/Gallery/nodols.mp4";

const AddRecipe = () => {
  const handleAddRecipe = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const description = e.target.description.value;
    const duration = e.target.duration.value;
    const addedRecipe = { name, photo, description, duration };
    console.log(addedRecipe);
  };

  return (
    <div>
      <div className="video-container relative">
        <div>
          <video autoPlay loop muted playsInline className="video">
            <source src={video} className="video w-full" />
          </video>
          <div className="outline-violet-400"></div>
        </div>

        <div className="absolute flex justify-center items-center inset-0">
          <form
            onSubmit={handleAddRecipe}
            className=" font-semibold background"
          >
            <div className="flex justify-center items-center gap-5">
              <div>
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
                    className="input input-bordered "
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              {" "}
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    className="input input-bordered "
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
                    className="input input-bordered "
                    required
                  />
                </div>{" "}
              </div>
            </div>

            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Submit</span>
                </label>
                <input
                  className="input input-bordered"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
