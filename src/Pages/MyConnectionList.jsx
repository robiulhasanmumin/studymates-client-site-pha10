import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const MyConnectionList = ({ connection, handleUIDelete, handleUIUpdate }) => {
  const { _id, name, profileimage, subject, studyMode } = connection;
  const [pName, setPName] = useState(name);
  const [photo, setPhoto] = useState(profileimage);
  const [editSubject, setEditSubject] = useState(subject);
  const [editMode, SetEditMode] = useState(studyMode);

  const mode =
    studyMode === "Online"
      ? "text-green-500 bg-green-100"
      : "text-red-500 bg-red-100";

  const handleUpdate = async () => {

   try{
     const updateData = {
      name: pName,
      profileimage: photo,
      subject: editSubject,
      studyMode: editMode,
    };
    const res = await axios.put(
      `http://localhost:3000/connection/${_id}`,
      updateData
    );

    if (res.data.modified > 0) {
      document.getElementById(`my_modal_${_id}`).close();
      handleUIUpdate(_id, updateData);

    }

   }
   catch(err){
    Swal.fire({
      title: "Update Failed!",
      icon: "error",
    });
   }
  }


  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete your partner?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "green",
      confirmButtonColor: "red",
      confirmButtonText: "Delete",
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `http://localhost:3000/connection/${_id}`
          );
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Removed Successfully!",
              icon: "success",
            });
            handleUIDelete(_id);
          }
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mt-3 bg-white p-3 rounded-md border-2 border-gray-300 shadow">
      <div className="flex gap-5 items-center">
        <img
          src={profileimage}
          className="w-[60px] h-[50px] rounded-lg"
          alt=""
        />
        <div>
          <p className="text-xl font-bold">
            {name}{" "}
            <span
              className={`text-[12px] font-medium ${mode} rounded-2xl px-2 ml-2`}
            >
              {studyMode}
            </span>
          </p>
          <p className="text-[#4F959D] text-[17px] font-bold">{subject}</p>
          <div className="flex gap-5 items-center"></div>
        </div>
      </div>
      <div>
        <button
          className="bg-[#4F959D] btn text-white px-5 py-2 rounded-md font-semibold mr-4"
          onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
        >
          Update
        </button>
        <dialog
          id={`my_modal_${_id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-2xl">Update Partner Information!</h3>
            <div className="modal-action flex flex-col">
              <form onSubmit={(e)=>{
                e.preventDefault
                handleUpdate()
                }} >
                <label className="label">Name</label>
                <input
                  type="text"
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                  className="input w-full"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                {/* photoURL  */}
                <label className="label">photoURL </label>
                <input
                  type="text"
                  className="input w-full"
                  name="photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="photoURL"
                  required
                />
                {/* subject */}
                <label className="label">Subject </label>
                <input
                  type="text"
                  className="input w-full"
                  name="subject"
                  value={editSubject}
                  onChange={(e) => setEditSubject(e.target.value)}
                  placeholder="Subject"
                  required
                />
                {/* studyMood */}
                <label className="label">StudyMode </label>
                <select
                  defaultValue=""
                  value={editMode}
                  onChange={(e) => SetEditMode(e.target.value)}
                  name="studymode"
                  className="select w-full"
                >
                  <option disabled={true}>Select StudyMode</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              <div className="flex justify-end items-center mt-4 gap-3">
                <button
                  type="submit"
                  // onClick={handleUpdate}
                  className="bg-[#4F959D] btn text-white"
                >
                  Update
                </button>
                  <button onClick={() => document.getElementById(`my_modal_${_id}`).close()} className="btn bg-red-500 text-white">Close</button>
                {/* <form method="dialog">
                </form> */}
              </div>
              </form>

            </div>
          </div>
        </dialog>

        {/* <button onClick={handleUpdate} className='bg-[#4F959D] btn text-white px-5 py-2 rounded-md font-semibold mr-4'>Update</button> */}

        <button
          className="bg-red-500 btn text-white px-5 py-2 rounded-md font-semibold"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyConnectionList;
