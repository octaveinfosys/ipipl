import React from 'react'
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <>
    <div
      style={{
      width: "100%",
      height: "100",
       display: "flex",
        justifyContent: "center",
       alignItems: "center"
     }}
   >
     <ThreeDots type="ThreeDots" color="gray" height="100" width="100" />
    </div>
    </>
  )
}

export default Loader
