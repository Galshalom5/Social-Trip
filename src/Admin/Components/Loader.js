import React, { Component } from 'react'
import '../../css/Loader.css'
class Loader extends Component {
    render() {
        const { isLightBox } = this.props
        return (
            <div className={`spinner-border text-info ${ isLightBox === null ? "ml-5" : "" }`} style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

export default Loader
