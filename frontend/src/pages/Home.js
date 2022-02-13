import React from 'react'


const Home = () => {
  return (
    <>
      <>
        <div style={{ background: "#F3F3F3", boxShadow: "rgb(0 0 0 / 25%) 2px 4px 4px" }}>
          <div className="container p-5 flex-wrap-reverse d-flex align-items-center justify-content-between">

            <div className='p-2'>
              No hassle <br />
              Find the best suited transproters here for your transportation needs.
              <br />
              <br />

              Signup/Login here now
              <hr />

              <div className="d-flex justify-content-start">
                <button className='btn border border-dark fw-bold' style={{ background: "#2fb8ff42" }}>For Biz</button>
                <button className='btn border border-dark fw-bold mx-2' style={{ background: "#2fb8ff42" }}>For Transproters</button>
              </div>

            </div>
            <div className='p-2'>
              <img src="https://5.imimg.com/data5/HU/ED/MY-33987375/goods-transport-services-500x500.jpg" alt="transport_img" style={{ borderRadius: "110px 110px 110px 110px", maxHeight:"100%", maxWidth:"100%" }} />
            </div>

          </div>
        </div>

        
        <div className='container my-5'>
        <h3 className='text-center'>Heading</h3>
        <div className="container p-5 flex-wrap-reverse d-flex align-items-center justify-content-between">
        <div>Card-1</div>
        <div>Card-2</div>
        <div>Card-3</div>
        <div>Card-4</div>
        </div>
        </div>

      </>

    </>
  )
}

export default Home