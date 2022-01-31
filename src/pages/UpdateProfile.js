import React, { useState, useRef } from 'react'
import { AuthWrapper, Wrapper, PagePadding } from '../styles/Wrapper'
import { Card } from '../styles/Card'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import useMounted from '../hooks/useMounted.js'
import { Form } from '../styles/Form'
import { Input } from '../styles/Input'
import { Button } from '../styles/Button'
import { Label } from '../styles/Label'
import { DropDownHeader } from '../styles/DropDown'
import Tabs, { TabPane } from 'rc-tabs'

const UpdateProfile = () => {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updateUserEmail, updateUserPassword, user } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const mounted = useMounted()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
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
        navigate('/')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        mounted.current && setLoading(false)
      })
  }

  return (
    <Wrapper>
      <PagePadding>
        <AuthWrapper>
          <Card toggle>
            <Form onSubmit={handleSubmit}>
              <DropDownHeader noPaddingLeft>Settings</DropDownHeader>
              <Tabs defaultActiveKey="2">
                <TabPane tab="General" key="1">
                  <Label bold marginTop>
                    Username
                  </Label>
                  <Input
                    toggle
                    ref={userNameRef}
                    type="text"
                    defaultValue={user.userName}
                    autoComplete="new-password"
                    required
                  />
                  <Button auto update disabled={loading} type="submit">
                    Save changes
                  </Button>
                </TabPane>
                <TabPane tab="Login" key="2">
                  <Label bold marginTop>
                    Email
                  </Label>
                  <Input
                    toggle
                    ref={emailRef}
                    type="email"
                    defaultValue={currentUser.email}
                    autoComplete="new-password"
                    required
                  />
                  <Button auto update disabled={loading} type="submit">
                    Save changes
                  </Button>
                  <Label bold marginTop>
                    Password
                  </Label>
                  {/* <Label>Current</Label> */}
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
