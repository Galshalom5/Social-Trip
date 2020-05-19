import React, { Component } from 'react'
import Resizer from 'react-image-file-resizer';
import { storage } from '../index'



 class FileInput extends Component {

checkAndResize = (e) =>
{
    console.log(e.target.files[0])
    const storageRef = storage.ref()
    const imagesRef = storageRef.child(`CaruselPhotos/${e.target.files[0].name}`)
    if(e.target.files[0].type !== 'image/png' && e.target.files[0].type !== 'image/jpeg' && e.target.files[0].type !== 'image/jpg')
    {
     return alert('Wrong file type\nAcceptable types:\npng, jpg, jpeg')
    }


}

    render() {
        return (
            <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01" style={{ cursor: 'pointer' }}>
                 Upload
                </span>
            </div>
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    style={{ cursor: 'pointer' }}
                    onChange={this.checkAndResize}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
                </label>
            </div>
        </div>
        )
    }
}


export default FileInput


