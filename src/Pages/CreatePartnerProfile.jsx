import axios from 'axios';
import React, { use, } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';
import { useNavigate } from 'react-router';

const CreatePartnerProfile = () => {
  const {user} = use(AuthContext)
  const navigate = useNavigate()

  const handleCreate= async(e)=>{
          e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const subject = e.target.subject.value;
    const studymode = e.target.studymode.value;
    const time = e.target.time.value;
    const experience = e.target.experience.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const rating = Number(e.target.rating.value);
    const partner = Number(e.target.partner.value);
    const email = e.target.email.value;
    const newPartner = {     
name : name,
profileimage: photo,
subject:subject,
studyMode:studymode,
availabilityTime:time,
location: location,
description:description,
experienceLevel:experience,
rating:rating,
patnerCount:partner,
email:email
    }


    try{
       const res = await axios.post("http://localhost:3000/partner",newPartner) 
       if(res.data.insertedId){
        Swal.fire({
  title: "Good job!",
  text: "Created Partner Profile Successfully!",
  icon: "success"
});
e.target.reset()
navigate("/")

       }
    }
    catch(error){
       console.log(error)
       Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
});
    }

  }
  return (
    <div  className=''>
    <div className="py-12 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className='text-2xl font-bold text-center mt-5'>Create Partner Profile</h1>
      <div className="card-body">
        <form onSubmit={handleCreate} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input type="text" className="input w-full" name='name' placeholder="Your Name" required />
          {/* photoURL  */}
          <label className="label">photoURL </label>
          <input type="text" className="input w-full" name='photo' placeholder="photoURL" required />
          {/* subject */}
          <label className="label">Subject </label>
          <input type="text" className="input w-full" name='subject' placeholder="Subject" required />
          {/* studyMood */}
          <label className="label">StudyMode </label>
<select defaultValue="" name='studymode' className="select w-full">
  <option disabled={true}>Select StudyMode</option>
  <option>Online</option>
  <option>Offline</option>
</select>
          {/* Availability Time */}
          <label className="label">Availability Time </label>
<select defaultValue="" name='time' className="select w-full">
  <option disabled={true}>Select Your Time</option>
  <option>Evening 6–9 PM</option>
  <option>Morning 7–9 AM</option>
</select>
          {/* Experience Level */}
          <label className="label">Experience Level </label>
<select defaultValue="" name='experience' className="select w-full">
  <option disabled={true}>Select Experience</option>
  <option>Advanced</option>
  <option>Intermediate</option>
  <option>Beginner</option>
</select>
{/* location */}
          <label className="label">Location </label>
          <input type="text" className="input w-full" name='location' placeholder="Location" required />
{/* rating */}
          <label className="label">Rating </label>
          <input type='number' className="input w-full" name='rating' defaultValue={0} max={5} min={1} required />
{/* Partner Count */}
          <label className="label">Partner Count </label>
          <input type='number' className="input w-full" name='partner' defaultValue={0} required />
{/* Description */}
          <label className="label">Description </label>
          {/* <input type='number' className="input w-full" name='partner' defaultValue={0} required /> */}
          <textarea name="description" placeholder='Write some about your partner...' className="w-full px-3 py-2 border-2 border-gray-300" rows="5"></textarea>
          

          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input w-full" defaultValue={user.email} name='email' placeholder="Email" readOnly />
          {/* <p className='text-red-500'>{err && err}</p> */}

          <button type='submit' className="btn btn-neutral mt-4 mb-2">Create Partner</button>


        </form>
      </div>
    </div>
  </div>
</div> 

    </div>
  )
}

export default CreatePartnerProfile