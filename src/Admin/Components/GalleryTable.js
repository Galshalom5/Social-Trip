import React from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBBtn,
  MDBModalFooter,
  MDBModalHeader,
  MDBModal,
  MDBRow,
} from "mdbreact";
import { useEffect, useState, useRef } from "react";
import { storage } from "../../index";
import UploadPicture from "../UploadPicture.js";
import ModalLoader from "./LoaderModal";
import Resizer from "react-image-file-resizer";

const GalleryTable = () => {
  const [open, setopen] = useState(false);
  const [isReady, setisReady] = useState(false);
  const pictureNameRef = useRef(null);
  const [pictures, setPictures] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState({ index: 1 });
  const [disabledContainer, setDisabled] = useState(false);
  const data = {
    columns: [
      {
        label: "שם",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "תמונה",
        field: "picture",
        sort: "asc",
        width: 270,
      },
      {
        label: "מחק תמונה",
        field: "delete",
        sort: "asc",
        width: 100,
      },
    ],
    rows: pictures,
  };

  const areYouSure = (picture) => {
    pictureNameRef.current = picture.target.id;
    setopen(true);
  };

  const deleteHandler = () => {
    setisReady(true);
    setDisabled(true);
  };

  const addPictureHandle = async (pictureFiles) => {
    setisReady(true);
    setDisabled(true);
    const storageRef = storage.ref();
    const start = async (item, thumbnailsRef) => {
      Resizer.imageFileResizer(
        item,
        350,
        250,
        "JPEG",
        55,
        0,
        async (uri) => {
          await thumbnailsRef.put(uri).then((snapshot) => {});
        },
        "blob"
      );
    };
    await Promise.all(
      pictureFiles.map(async (item) => {
        if (item) {
          var imagesRef = storageRef.child(`CaruselPhotos/${item.name}`);
          var thumbnailsRef = storageRef.child(
            `CaruselPhotos/thumbnails/${item.name}`
          );
          await imagesRef.put(item).then(async (snapshot) => {
            await start(item, thumbnailsRef);
          });
        }
      })
    );
    setisReady(false);
    setDisabled(false);
  };

  useEffect(() => {
    if (!isReady) {
      setPictures((state) => [state.pictures]);
      const storageRef = storage.ref();
      const imagesRef = storageRef.child("CaruselPhotos");
      imagesRef.listAll().then((res) => {
        res.items.forEach(async (element) => {
          await element.getDownloadURL().then((url) => {
            setPictures((oldArray) => [
              ...oldArray,
              {
                name: element.name,
                picture: <img src={url} width="150" height="100" />,
                delete: (
                  <MDBBtn
                    size="sm"
                    outline
                    color="danger"
                    id={`${element.name}`}
                    onClick={areYouSure}
                  >
                    מחק
                  </MDBBtn>
                ),
              },
            ]);
          });
        });
        setisReady(false);
        setDisabled(false);
      }).catch = (err) => {
        console.log(err);
      };
    } else if (pictureNameRef.current) {
      setopen(false);
      const storageRef = storage.ref();
      const imageRef = storageRef.child(
        `CaruselPhotos/${pictureNameRef.current}`
      );
      const thumbnailsRef = storageRef.child(
        `CaruselPhotos/thumbnails/${pictureNameRef.current}`
      );
      imageRef
        .delete()
        .then(() => {
          thumbnailsRef
            .delete()
            .then(() => {
              setisReady(false);
              setDisabled(false);
              pictureNameRef.current = null;
            })
            .catch(function (error) {
              console.error("Error removing document: ", error);
            });
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    }
  }, [isReady]);

  return (
    <MDBContainer style={{ backgroundColor: "white" }}>
      <MDBDataTable
        style={
          disabledContainer ? { pointerEvents: "none", opacity: "0.4" } : {}
        }
        entriesLabel="מספר הערכים בטבלה"
        paginationLabel={["הקודם", "הבא"]}
        infoLabel={["מראה", "עד", "מתוך", "ערכים"]}
        className="text-right justify-content-center"
        searchLabel="חיפוש"
        btn
        scrollY
        maxHeight="65vh"
        striped
        bordered
        small
        data={data}
      />
      {isReady ? <ModalLoader /> : null}
      <MDBModal
        isOpen={open}
        toggle={() => setopen(false)}
        backdrop={true}
        size="sm"
      >
        <MDBModalHeader
          style={{ backgroundColor: "#ff4444" }}
          className="text-white justify-content-center"
        >
          האם למחוק את התמונה?
        </MDBModalHeader>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="danger" onClick={() => setopen(false)}>
            ביטול
          </MDBBtn>
          <MDBBtn outline color="danger" onClick={deleteHandler}>
            מחק
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <MDBRow className="text-center">
        <UploadPicture
          disabled={disabledContainer}
          addPictureHandle={addPictureHandle}
          value={(i) => setmodalIsOpen({ index: i })}
        />
      </MDBRow>
    </MDBContainer>
  );
};

export default GalleryTable;
