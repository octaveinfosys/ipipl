import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb(props) {
  return (
   <>
     <div className="ttm-page-title-row">
                <div className="ttm-page-title-row-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title">{props.tag}</h2>
                                </div>
                                <div className="breadcrumb-wrapper">
                                    <div className="container">
                                        <div className="breadcrumb-wrapper-inner">
                                            <span>
                                            <Link to="/"><i className="themifyicon ti-home"></i>&nbsp;&nbsp;Home</Link>
                                            </span>
                                            <span className="ttm-bread-sep">&nbsp; / &nbsp;</span>
                                            <span>{props.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
   </>
  )
}

export default Breadcrumb
