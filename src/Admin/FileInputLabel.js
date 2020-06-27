
import React, { Component } from 'react'

const FileInputLabel = (props) => {
    const { fileName } = props
    if (fileName === undefined) {
      return (
        <label
          className="custom-file-label"
          htmlFor="inputGroupFile01"
        >
          Choose image
        </label>
      )
    }
    return (
      <label
        className="custom-file-label"
        htmlFor="inputGroupFile01"
      >
        changed
      </label>
    )
  }

  export default FileInputLabel