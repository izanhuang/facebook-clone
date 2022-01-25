import React, { useState, useRef } from 'react'
import { Button } from '../../styles/Button'
import { Form, FormHeader } from '../../styles/Form'
import { Input } from '../../styles/Input'
import {
  Wrapper,
  AuthWrapper,
  ContentWrapper,
  CenterElement,
  BlockWrapper,
  SelectWrapper,
  RadioWrapper,
} from '../../styles/Wrapper'
import { Card } from '../../styles/Card'
import { Label } from '../../styles/Label'
import { Footer } from '../../styles/Footer'
import SelectBirthdayMonth from '../SelectBirthdayMonth'
import SelectBirthdayDay from '../SelectBirthdayDay'
import SelectBirthdayYear from '../SelectBirthdayYear'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from '../../styles/Alert'
import useMounted from '../../hooks/useMounted'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const mounted = useMounted()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError('Failed to create an account')
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
          <Card signup>
            <FormHeader divider>
              <h2>Create a new account</h2>
              <p>It&#39;s quick and easy.</p>
            </FormHeader>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <SelectWrapper>
                <Input
                  signup
                  user_name
                  type="text"
                  placeholder="First name"
                  autoComplete="new-password"
                  required
                />
                <Input
                  signup
                  user_name
                  type="text"
                  placeholder="Last name"
                  autoComplete="new-password"
                  required
                />
              </SelectWrapper>
              <Input
                signup
                ref={emailRef}
                type="email"
                placeholder="Email or phone number"
                autoComplete="new-password"
                required
              />
              <Input
                signup
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
              />
              <Input
                signup
                ref={passwordConfirmRef}
                type="password"
                placeholder="Confirm Password"
                required
              />

              <BlockWrapper>
                <Label>Birthday</Label>
              </BlockWrapper>
              <SelectWrapper>
                <SelectBirthdayMonth />
                <SelectBirthdayDay />
                <SelectBirthdayYear />
              </SelectWrapper>
              <BlockWrapper>
                <Label>Gender</Label>
              </BlockWrapper>

              <SelectWrapper>
                <RadioWrapper>
                  <label htmlFor="female">Female</label>
                  <Input radio type="radio" id="female" name="sex" />
                </RadioWrapper>

                <RadioWrapper>
                  <label htmlFor="male">Male</label>
                  <Input radio type="radio" id="male" name="sex" />
                </RadioWrapper>
                <RadioWrapper>
                  <label htmlFor="other">Other</label>
                  <Input radio type="radio" id="other" name="sex" />
                </RadioWrapper>
              </SelectWrapper>

              <p className="fb">You may receive SMS Notifications from us.</p>

              <CenterElement>
                <Button signup disabled={loading} type="submit">
                  Sign Up
                </Button>
              </CenterElement>
              <CenterElement padding>
                <Link to="/">Already have an account?</Link>
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
