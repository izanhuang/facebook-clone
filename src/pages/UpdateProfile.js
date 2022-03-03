import React, { useState, useRef } from 'react'
import { AuthWrapper, Wrapper, PagePadding } from '../styles/Wrapper'
import { Card } from '../styles/Card'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../hooks/useMounted.js'
import { Form } from '../styles/Form'
import { Input } from '../styles/Input'
import { Button } from '../styles/Button'
import { Label } from '../styles/Label'
import { DropDownHeader } from '../styles/DropDown'
import Tabs, { TabPane } from 'rc-tabs'
import { useData } from '../contexts/DataContext'
import {
  isUserNameAvaliable,
  updateUserDetails,
  updateUserDetailsOnLikesAndComments,
  updateUserDetailsOnUserPosts,
} from '../utils/firebaseUtils'
import { ErrorMessage, SuccessMessage } from '../styles/Text'

const UpdateProfile = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth()
  const { userDetails } = useData()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const mounted = useMounted()

  async function handleNameChange(e) {
    e.preventDefault()
    var editedProfile = null
    var isSuccessful = null
    if (
      e.target.id === 'firstName' &&
      firstNameRef.current.value !== userDetails.firstName
    ) {
      editedProfile = {
        ...userDetails,
        firstName: firstNameRef.current.value,
      }
      isSuccessful = await updateUserDetails(editedProfile)
    } else if (
      e.target.id === 'lastName' &&
      lastNameRef.current.value !== userDetails.lastName
    ) {
      editedProfile = {
        ...userDetails,
        lastName: lastNameRef.current.value,
      }
      isSuccessful = await updateUserDetails(editedProfile)
    } else if (
      e.target.id === 'userName' &&
      userNameRef.current.value !== userDetails.userName &&
      userNameRef.current.value.replace(/\s/g, '') !== '' &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+/.test(
        userNameRef.current.value,
      ) === false &&
      userNameRef.current.value !== 'friends' &&
      userNameRef.current.value !== 'marketplace' &&
      userNameRef.current.value !== 'group' &&
      userNameRef.current.value !== 'news'
    ) {
      if (await isUserNameAvaliable(userNameRef.current.value)) {
        editedProfile = {
          ...userDetails,
          userName: userNameRef.current.value,
        }
        isSuccessful = await updateUserDetails(editedProfile)
      } else {
        isSuccessful = '* Username taken.'
      }
    } else {
      isSuccessful = false
    }

    if (isSuccessful === false) {
      setError('* Error updating field - try a different value')
    } else if (isSuccessful === '* Username taken.') {
      setError('* Username taken.')
    } else if (isSuccessful) {
      await updateUserDetailsOnUserPosts(editedProfile)
      await updateUserDetailsOnLikesAndComments(editedProfile)
      setError('Successfully updated!')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('* Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(emailRef.current.value))
    }

    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        setError('Successfully updated!')
      })
      .catch(() => {
        setError('* Failed to update account.')
      })
      .finally(() => {
        mounted.current && setLoading(false)
      })
  }

  return (
    <Wrapper>
      <PagePadding>
        <AuthWrapper>
          <Card toggle widthAuto>
            <Form onSubmit={handleSubmit}>
              <DropDownHeader noPaddingLeft>Settings</DropDownHeader>
              <Tabs defaultActiveKey="1">
                <TabPane tab="General" key="1">
                  {error ===
                    '* Error updating field - try a different value' && (
                    <ErrorMessage>{error}</ErrorMessage>
                  )}
                  {error === '* Username taken.' && (
                    <ErrorMessage>{error}</ErrorMessage>
                  )}
                  {error === 'Successfully updated!' && (
                    <SuccessMessage>{error}</SuccessMessage>
                  )}
                  <Label bold marginTop>
                    First name
                  </Label>
                  <Input
                    toggle
                    ref={firstNameRef}
                    type="text"
                    defaultValue={userDetails.firstName}
                    autoComplete="new-password"
                    required
                  />
                  <Button
                    auto
                    update
                    id="firstName"
                    disabled={loading}
                    type="button"
                    onClick={(e) => {
                      handleNameChange(e)
                    }}
                  >
                    Save
                  </Button>
                  <Label bold marginTop>
                    Last name
                  </Label>
                  <Input
                    toggle
                    ref={lastNameRef}
                    type="text"
                    defaultValue={userDetails.lastName}
                    autoComplete="new-password"
                    required
                  />
                  <Button
                    auto
                    update
                    id="lastName"
                    disabled={loading}
                    type="button"
                    onClick={(e) => {
                      handleNameChange(e)
                    }}
                  >
                    Save
                  </Button>
                  <Label bold marginTop>
                    Username
                  </Label>
                  <Input
                    toggle
                    ref={userNameRef}
                    type="text"
                    defaultValue={userDetails.userName}
                    autoComplete="new-password"
                    required
                  />
                  <Button
                    auto
                    update
                    id="userName"
                    disabled={loading}
                    type="button"
                    onClick={(e) => {
                      handleNameChange(e)
                    }}
                  >
                    Save
                  </Button>
                </TabPane>
                <TabPane tab="Login" key="2">
                  {error === 'Successfully updated!' ? (
                    <SuccessMessage>{error}</SuccessMessage>
                  ) : (
                    <ErrorMessage>{error}</ErrorMessage>
                  )}
                  <Label bold marginTop>
                    Email
                  </Label>
                  <Input
                    toggle
                    ref={emailRef}
                    type="email"
                    defaultValue={currentUser ? currentUser.email : ''}
                    autoComplete="new-password"
                    required
                  />
                  <Button auto update disabled={loading} type="submit">
                    Save changes
                  </Button>
                  <Label bold marginTop>
                    Password
                  </Label>
                  <Input
                    toggle
                    ref={passwordRef}
                    placeholder="New password"
                    type="password"
                  />
                  <Input
                    toggle
                    ref={passwordConfirmRef}
                    type="password"
                    placeholder="Re-type new password"
                  />
                  <Button auto update disabled={loading} type="submit">
                    Save changes
                  </Button>
                </TabPane>
              </Tabs>
            </Form>
          </Card>
        </AuthWrapper>
      </PagePadding>
    </Wrapper>
  )
}

export default UpdateProfile
