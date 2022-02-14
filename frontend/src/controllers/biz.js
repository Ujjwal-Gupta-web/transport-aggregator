export const register_biz = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/biz/signup",{
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
  
export const login_biz = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/biz/login",{
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


export const get_biz = async (id)=>{
    const res=await fetch("http://localhost:5000/api/biz/getUser",{
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
export const get_all_biz = async ()=>{
    const res=await fetch("http://localhost:5000/api/biz/getAll",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const ans=await res.json();
    // console.log(ans);

    return ans;
    
  }

  export const get_biz_login_otp = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/biz/get_otp",{
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

  export const verify_biz_login_otp = async (obj)=>{
    const res=await fetch("http://localhost:5000/api/biz/verify_otp",{
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