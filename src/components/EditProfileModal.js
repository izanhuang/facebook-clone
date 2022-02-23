import React, { useState, useRef, useEffect } from 'react'
import ReactModal from 'react-modal'
import { CenterElement } from '../styles/Wrapper'
import { DropDownHeader } from '../styles/DropDown'
import { ActiveButton, IconButton, SecondaryButton } from '../styles/Button'
import { GrClose } from 'react-icons/gr'
import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { Avatar } from '../styles/Avatar'
import {
  EditProfileContent,
  EditProfileFooter,
  EditProfileHeader,
} from '../styles/ProfileStyling'
import { Select } from '../styles/Select'
import { ErrorMessage } from '../styles/Text'
import { updateUserDetails } from '../utils/firebaseUtils'

const EditProfileModal = ({ showEditProfileModal }) => {
  const [showModal, setShowModal] = useState(showEditProfileModal)
  const { userDetails } = useData()
  const [newProfileImg, setNewProfileImg] = useState(userDetails.profileImg)
  const [error, setError] = useState(false)
  const { currentUser } = useAuth()
  const newProfileImgRef = useRef(null)
  const editGenderRef = useRef()

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
    console.log(editGenderRef.current.value)
    setShowModal(false)
    removeImage()
  }

  const onImageUploadButtonClick = () => {
    newProfileImgRef.current.click()
  }

  const onImageChange = (event) => {
    const reader = new FileReader()
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
      setError(false)
    }

    reader.onload = (readerEvent) => {
      setNewProfileImg(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setNewProfileImg(userDetails.profileImg)
  }

  const saveProfile = async (e) => {
    e.preventDefault()
    const editedProfile = {
      ...userDetails,
      profileImg: newProfileImg,
      genderCode: editGenderRef.current.value,
    }
    const isSuccessful = await updateUserDetails(editedProfile)
    if (isSuccessful === false) {
      setError(true)
    } else {
      handleCloseModal()
      setNewProfileImg(userDetails.profileImg)
      setError(false)
      window.location.reload()
    }
  }

  return (
    <>
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
        <EditProfileContent>
          <EditProfileHeader>
            <DropDownHeader noPadding>Profile Picture</DropDownHeader>
            <a onClick={onImageUploadButtonClick}>Upload Photo</a>
            <input
              accept="image/*"
              type="file"
              id="imgInput"
              ref={newProfileImgRef}
              onChange={onImageChange}
              style={{ display: 'none' }}
            />
          </EditProfileHeader>
          <Avatar
            className="center"
            large
            src={newProfileImg}
            alt="profile image"
          />
          {error && <ErrorMessage>* Image file size too large</ErrorMessage>}
          <EditProfileHeader>
            <DropDownHeader noPadding>Gender</DropDownHeader>
          </EditProfileHeader>
          <Select
            editGender
            ref={editGenderRef}
            defaultValue={userDetails.genderCode}
            style={{ width: 'auto', margin: '16px 16px' }}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Select>
        </EditProfileContent>
        <EditProfileFooter>
          <ActiveButton onClick={saveProfile}>Save</ActiveButton>
        </EditProfileFooter>
      </ReactModal>
    </>
  )
}

export default EditProfileModal
