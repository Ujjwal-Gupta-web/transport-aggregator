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

export const get_bookings = async ()=>{
    const res=await fetch("http://localhost:5000/api/get_bookings",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    return ans;
  }

export const update_booking = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/update_booking",{
      method:"PUT",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    return ans;
  }