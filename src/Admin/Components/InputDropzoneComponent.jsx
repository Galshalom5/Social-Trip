import React, { Component } from "react";
import DropzoneComponent from "react-dropzone-component";
import EXIF from "exif-js";
import "dropzone/dist/dropzone.css";
import "react-dropzone-component/styles/filepicker.css";
import '../../css/Admin.css'

window.EXIF = EXIF;

class InputDropzoneComponent extends Component {
  constructor(props) {
    super(props);

    this.djsConfig = {
      addRemoveLinks: true,
      autoProcessQueue:false,
<<<<<<< HEAD
=======
      dictDefaultMessage: 'גרור תמונות לכאן או לחץ לבחירה',
>>>>>>> origin
      acceptedFiles: "image/jpeg,image/jpg,image/png,image/gif"
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif", ".jpeg"],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };


    this.removedfile = file => {
       this.props.onRemoveFile(file);
    };

    this.addedfile = (file) => {
      this.props.onAddFile(file);
  }
    this.dropzone = null;
  }

  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;
    const eventHandlers = {
      init: dz => (this.dropzone = dz),
      removedfile: this.removedfile,
      addedfile :this.addedfile,
    };

    return (
      <div className="dropzone-wrapper">
        <DropzoneComponent
          config={config}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
      </div>
    );
  }
}

export default InputDropzoneComponent;
