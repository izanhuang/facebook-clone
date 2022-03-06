import React, { useState, useRef } from 'react'
import ReactModal from 'react-modal'
import { CenterElement } from '../styles/Wrapper'
import { DropDownHeader } from '../styles/DropDown'
import { ActiveButton, IconButton } from '../styles/Button'
import { GrClose } from 'react-icons/gr'
import { useData } from '../contexts/DataContext'
import { Avatar } from '../styles/Avatar'
import {
  EditProfileContent,
  EditProfileFooter,
  EditProfileHeader,
} from '../styles/ProfileStyling'
import { Select } from '../styles/Select'
import { ErrorMessage } from '../styles/Text'
import {
  updateUserDetails,
  updateUserDetailsOnLikesAndComments,
  updateUserDetailsOnUserPosts,
  updateUserProfileImg,
} from '../utils/firebaseUtils'

const EditProfileModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const { userDetails } = useData()
  const [newProfileImg, setNewProfileImg] = useState(userDetails.profileImg)
  const [error, setError] = useState(false)
  const newProfileImgRef = useRef(null)
  const editGenderRef = useRef()

  function handleOpenModal() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
    removeImage()
    setBtnDisabled(true)
  }

  const onImageUploadButtonClick = () => {
    newProfileImgRef.current.click()
  }

  const onImageChange = (event) => {
    const reader = new FileReader()
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
      setError(false)
      setBtnDisabled(false)
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
    var editedProfile = {
      ...userDetails,
      genderCode: editGenderRef.current.value,
    }
    var isSuccessful = false
    isSuccessful = await updateUserDetails(editedProfile)
    if (isSuccessful && newProfileImg !== userDetails.profileImg) {
      const profileImgURL = await updateUserProfileImg(
        userDetails.uid,
        newProfileImg,
      )
      editedProfile = {
        ...userDetails,
        profileImg: profileImgURL,
      }
      await updateUserDetailsOnUserPosts(editedProfile)
      await updateUserDetailsOnLikesAndComments(editedProfile)
      setError(false)
      setShowModal(false)
    } else if (isSuccessful) {
      setError(false)
      setShowModal(false)
    } else {
      setError(true)
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
            <p className="blue-link" onClick={onImageUploadButtonClick}>
              Upload Photo
            </p>
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
            noPointer
            src={newProfileImg}
            alt="profile image"
          />
          {error && (
            <ErrorMessage paddingLeft>* Image file size too large</ErrorMessage>
          )}
          <EditProfileHeader>
            <DropDownHeader noPadding>Gender</DropDownHeader>
          </EditProfileHeader>
          <Select
            editGender
            ref={editGenderRef}
            defaultValue={userDetails.genderCode}
            style={{ width: 'auto', margin: '16px 16px' }}
            onChange={() => {
              editGenderRef.current.value !== userDetails.genderCode
                ? setBtnDisabled(false)
                : setBtnDisabled(true)
            }}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Select>
        </EditProfileContent>
        <EditProfileFooter>
          <ActiveButton disabled={btnDisabled} onClick={saveProfile}>
            Save
          </ActiveButton>
        </EditProfileFooter>
      </ReactModal>
    </>
  )
}

export default EditProfileModal
