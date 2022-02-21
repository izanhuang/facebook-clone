import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { CenterElement } from '../styles/Wrapper'
import { DropDownHeader } from '../styles/DropDown'
import { IconButton } from '../styles/Button'
import { GrClose } from 'react-icons/gr'

const EditProfileModal = ({ showEditProfileModal }) => {
  const [showModal, setShowModal] = useState(showEditProfileModal)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  function handleOpenModal() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  return (
    <>
      {/* <button onClick={handleOpenModal}>Trigger Modal</button> */}
      <button onClick={handleOpenModal} className="secondaryButton">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png"
          alt="edit profile icon"
        />
        <span>Edit Profile</span>
      </button>
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        // style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <CenterElement createPostDivider>
          <DropDownHeader padding>Edit profile</DropDownHeader>
          <IconButton close onClick={handleCloseModal}>
            <GrClose />
          </IconButton>
        </CenterElement>
        <DropDownHeader noPadding>Profile Picture</DropDownHeader>
        <button>Upload Photo</button>
        <DropDownHeader noPadding>Customize Your Intro</DropDownHeader>
        <button>Edit</button>
        <button>Save</button>
      </ReactModal>
    </>
  )
}

export default EditProfileModal
