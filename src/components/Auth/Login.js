import React, { useState, useRef } from 'react'
import { Button } from '../../styles/Button'
import { Form, FormHeader } from '../../styles/Form'
import { Input } from '../../styles/Input'
import {
  Wrapper,
  AuthWrapper,
  ContentWrapper,
  CenterElement,
} from '../../styles/Wrapper'
import { LineBreak } from '../../styles/LineBreak'
import { Card } from '../../styles/Card'
import { Footer } from '../../styles/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from '../../styles/Alert'
import useMounted from '../../hooks/useMounted'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const mounted = useMounted()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError('Failed to log in')
    }
    mounted.current && setLoading(false)
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
            <FormHeader padding>
              <h4>Log Into Facebook</h4>
            </FormHeader>
            <Form login onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Input
                ref={emailRef}
                type="email"
                placeholder="Email or phone number"
                required
              />
              <Input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
              />
              <Button disabled={loading} type="submit">
                Login
              </Button>
              <CenterElement padding>
                <Link to="#">Forgot account?</Link>
              </CenterElement>
              <LineBreak>
                <span>or</span>
              </LineBreak>
              <CenterElement>
                <Link to="/signup">
                  <Button create>Create new account</Button>
                </Link>
              </CenterElement>
            </Form>
          </Card>
        </ContentWrapper>
      </AuthWrapper>
      <Footer className="fb-12">
        Facebook Clone 2022. Built by Izan Huang. Inspired by Facebook.
      </Footer>
    </Wrapper>
  )
}
