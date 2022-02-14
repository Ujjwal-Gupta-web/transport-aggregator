export const register_transporter = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/transporter/signup",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }
  
export const login_transporter = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/transporter/login",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }

  export const get_transporter = async (id)=>{
    const res=await fetch("http://localhost:5000/api/transporter/getUser",{
      method:"POST",
      body:JSON.stringify({"id":id}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }


  export const get_transporters = async ()=>{
    const res=await fetch("http://localhost:5000/api/transporter/getAll",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }

  export const get_transporter_login_otp = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/transporter/get_otp",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }

  export const verify_transporter_login_otp = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/transporter/verify_otp",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }


  