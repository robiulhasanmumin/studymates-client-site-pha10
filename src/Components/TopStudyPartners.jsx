import React from 'react'


const TopStudyPartners = () => {
  
  const partners = fetch("http://localhost:3000/partner").then(res=>res.json())

  console.log(partners);
  
  return (
    <div>
      <h1>Top Study Partners</h1>
       
    </div>
  )
}

export default TopStudyPartners