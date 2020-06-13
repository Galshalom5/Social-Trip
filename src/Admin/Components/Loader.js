import React, { Component } from 'react'

class Loader extends Component {
    render() {
        return (
            <div className="spinner-border text-info ml-5" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

export default Loader
