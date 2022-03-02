import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormHeader } from '../styles/Form'
import { Button } from '../styles/Button'
import { Card } from '../styles/Card'
import { Alert } from '../styles/Alert'
import { Input } from '../styles/Input'
import {
  Wrapper,
  AuthWrapper,
  ContentWrapper,
  CenterElement,
  FlexRightAlign,
} from '../styles/Wrapper'
import { Footer } from '../styles/Footer'
import { SecondaryText } from '../styles/Text'
import { Divider } from '../styles/LineBreak'

const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch (error) {
      // console.log(error)
      setError('Failed to reset password')
    }
    setLoading(false)
  }

  return (
    <Wrapper auth>
      <AuthWrapper>
        <ContentWrapper>
          <img
            className="logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          />
          <Card>
            <FormHeader divider>
              <h3>Password Reset</h3>
            </FormHeader>
            <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Input
                ref={emailRef}
                type="email"
                placeholder="Email or phone number"
                required
              />
              <FlexRightAlign>
                <Link to="/">
                  <Button auto standard gray bold>
                    Cancel
                  </Button>
                </Link>
                <Button auto standard bold disabled={loading} type="submit">
                  Send
                </Button>
              </FlexRightAlign>
            </Form>
          </Card>
        </ContentWrapper>
      </AuthWrapper>
      <Footer>
        <SecondaryText size12 noMargin>
          Facebook Clone 2022. Built by Izan Huang. Inspired by Facebook.
        </SecondaryText>
      </Footer>
    </Wrapper>
  )
}

export default ForgotPassword
