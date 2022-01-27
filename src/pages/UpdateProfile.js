import React, { useState, useRef } from 'react'
import {
  AuthWrapper,
  ContentWrapper,
  Wrapper,
  PagePadding,
} from '../styles/Wrapper'
import { Card } from '../styles/Card'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import useMounted from '../hooks/useMounted.js'
import { Form } from '../styles/Form'
import { Input } from '../styles/Input'
import { Button } from '../styles/Button'
import { Label } from '../styles/Label'
import Nav from '../components/Nav'

const UpdateProfile = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth()
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
          <ContentWrapper>
            <Card toggle>
              <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input
                  toggle
                  ref={emailRef}
                  type="email"
                  defaultValue={currentUser.email}
                  autoComplete="new-password"
                  required
                />
                {/* <Label>Current</Label> */}
                <Label>New</Label>
                <Input toggle ref={passwordRef} type="password" />
                <Label>Re-type new</Label>
                <Input toggle ref={passwordConfirmRef} type="password" />
                <Button disabled={loading} type="submit">
                  Update
                </Button>
              </Form>
            </Card>
          </ContentWrapper>
        </AuthWrapper>
      </PagePadding>
    </Wrapper>
  )
}

export default UpdateProfile
