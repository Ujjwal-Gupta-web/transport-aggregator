export const set_booking = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/set_booking",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    return ans;
  }

export const get_bookings = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/get_booking",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    return ans;
  }