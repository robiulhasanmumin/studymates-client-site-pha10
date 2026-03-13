import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt, FaUser, FaLink, FaBook, FaGlobe } from "react-icons/fa";

const MyConnectionList = ({ connection, handleUIDelete, handleUIUpdate }) => {
  const { _id, name, profileimage, subject, studyMode } = connection;
  const [pName, setPName] = useState(name);
  const [photo, setPhoto] = useState(profileimage);
  const [editSubject, setEditSubject] = useState(subject);
  const [editMode, SetEditMode] = useState(studyMode);

  const modeBadge =
    studyMode === "Online"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-red-100 text-red-700 border-red-200";

  const handleUpdate = async () => {
    try {
      const updateData = {
        name: pName,
        profileimage: photo,
        subject: editSubject,
        studyMode: editMode,
      };
      const res = await axios.put(
        `https://study-mates-server-site.vercel.app/connection/${_id}`,
        updateData
      );

      if (res.data.modifiedCount > 0) {
        document.getElementById(`my_modal_${_id}`).close();
        handleUIUpdate(_id, updateData);

        await Swal.fire({
          title: "Success!",
          text: "Partner information updated.",
          icon: "success",
          confirmButtonColor: "#4F959D",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Update Failed!",
        icon: "error",
        text: `${err.message}`,
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This partner will be removed from your list.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#4F959D",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `https://study-mates-server-site.vercel.app/connection/${_id}`
          );
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Partner has been removed.",
              icon: "success",
            });
            handleUIDelete(_id);
          }
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-4 p-4 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow">
      {/* Partner Info Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto text-center sm:text-left">
        <div className="relative">
          <img
            src={profileimage}
            className="w-16 h-16 rounded-xl object-cover ring-2 ring-[#4F959D]/20"
            alt={name}
          />
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-lg font-bold text-base-content">{name}</h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${modeBadge}`}>
              {studyMode}
            </span>
          </div>
          <p className="text-[#4F959D] font-semibold text-sm">{subject}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 w-full md:w-auto">
        <button
          className="flex-1 md:flex-none btn btn-sm bg-[#4F959D] hover:bg-[#3d757b] text-white border-none rounded-lg"
          onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
        >
          <FaEdit /> Update
        </button>
        <button
          className="flex-1 md:flex-none btn btn-sm bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-lg"
          onClick={handleDelete}
        >
          <FaTrashAlt /> Delete
        </button>
      </div>

      {/* Update Modal */}
      <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-3xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-2xl">Edit Information</h3>
            <button 
              onClick={() => document.getElementById(`my_modal_${_id}`).close()}
              className="btn btn-sm btn-circle btn-ghost"
            >✕</button>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="space-y-4">
            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2"><FaUser className="text-[#4F959D]" /> Name</label>
              <input
                type="text"
                value={pName}
                onChange={(e) => setPName(e.target.value)}
                className="input input-bordered bg-base-200 border-none rounded-xl"
                placeholder="Partner Name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2"><FaLink className="text-[#4F959D]" /> Photo URL</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered bg-base-200 border-none rounded-xl"
                placeholder="Image URL"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2"><FaBook className="text-[#4F959D]" /> Subject</label>
              <input
                type="text"
                value={editSubject}
                onChange={(e) => setEditSubject(e.target.value)}
                className="input input-bordered bg-base-200 border-none rounded-xl"
                placeholder="Topic"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-bold text-sm flex gap-2"><FaGlobe className="text-[#4F959D]" /> Study Mode</label>
              <select
                value={editMode}
                onChange={(e) => SetEditMode(e.target.value)}
                className="select select-bordered bg-base-200 border-none rounded-xl"
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>

            <div className="modal-action gap-3 pt-4">
              <button type="submit" className="btn flex-1 bg-[#4F959D] hover:bg-[#3d757b] text-white border-none rounded-xl">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => document.getElementById(`my_modal_${_id}`).close()}
                className="btn flex-1 btn-ghost bg-base-200 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyConnectionList;