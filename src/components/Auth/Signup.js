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
import { SecondaryText } from '../../styles/Text'

export default function Signup() {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const birthMonthRef = useRef()
  const birthDayRef = useRef()
  const birthYearRef = useRef()
  const [genderCode, setGenderCode] = useState()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const mounted = useMounted()

  const convertToBirthDateString = (birthMonth, birthDay, birthYear) => {
    let month = birthMonth
    let day = birthDay
    let year = birthYear

    let birthDateString =
      month.toString() + ' ' + day.toString() + ' ' + year.toString()
    return birthDateString
  }

  const convertToUserNameString = (firstName, lastName) => {
    let first_name = firstName
    let last_name = lastName
    let random_number = Math.floor(100000 + Math.random() * 900000)

    let userName =
      first_name.toString() + last_name.toString() + random_number.toString()
    return userName
  }

  const genderOptionChange = (e) => {
    setGenderCode(e.target.id)
  }

  const sendUserInfo = () => {}

  async function handleSubmit(e) {
    e.preventDefault()

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError('Passwords do not match')
    // }

    // try {
    //   setError('')
    //   setLoading(true)
    //   await signup(emailRef.current.value, passwordRef.current.value)
    //   navigate('/')
    // } catch (error) {
    //   console.log(error)
    //   setError('Failed to create an account')
    // }
    // mounted.current && setLoading(false)
  }

  // useEffect(() => {
  //   if (currentUser != null) {
  //     let birthDate = convertToBirthDateString(
  //       birthMonthRef.current.value,
  //       birthDayRef.current.value,
  //       birthYearRef.current.value,
  //     )
  //     let userName = convertToUserNameString(firstNameRef.current.value, lastNameRef.current.value)
  //     let profileImg = ''
  //     let createdDate = new Date()
  //     updateUser(currentUser.uid, firstNameRef.current.value, lastNameRef.current.value, birthDate, genderCode, userName, profileImg, createdDate)
  //   }
  // }, [currentUser])

  return (
    <Wrapper auth>
      <AuthWrapper>
        <ContentWrapper>
          <img
            className="logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="facebook logo"
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
                  ref={firstNameRef}
                  type="text"
                  placeholder="First name"
                  autoComplete="new-password"
                  required
                />
                <Input
                  signup
                  user_name
                  ref={lastNameRef}
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
                placeholder="Email"
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
                <Label fontSize12>Birthday</Label>
              </BlockWrapper>
              <SelectWrapper>
                <SelectBirthdayMonth birthMonthRef={birthMonthRef} />
                <SelectBirthdayDay birthDayRef={birthDayRef} />
                <SelectBirthdayYear birthYearRef={birthYearRef} />
              </SelectWrapper>
              <BlockWrapper>
                <Label fontSize12 marginTop>
                  Gender
                </Label>
              </BlockWrapper>

              <SelectWrapper>
                <RadioWrapper>
                  <label htmlFor="Female">Female</label>
                  <Input
                    radio
                    type="radio"
                    id="Female"
                    name="sex"
                    onChange={(e) => genderOptionChange(e)}
                    required
                  />
                </RadioWrapper>

                <RadioWrapper>
                  <label htmlFor="Male">Male</label>
                  <Input
                    radio
                    type="radio"
                    id="Male"
                    name="sex"
                    onChange={(e) => genderOptionChange(e)}
                  />
                </RadioWrapper>
                <RadioWrapper>
                  <label htmlFor="Other">Other</label>
                  <Input
                    radio
                    type="radio"
                    id="Other"
                    name="sex"
                    onChange={(e) => genderOptionChange(e)}
                  />
                </RadioWrapper>
              </SelectWrapper>

              <SecondaryText size11>
                You may receive SMS Notifications from us.
              </SecondaryText>

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
      <Footer>
        <SecondaryText size12 noMargin>
          Facebook Clone 2022. Built by Izan Huang. Inspired by Facebook.
        </SecondaryText>
      </Footer>
    </Wrapper>
  )
}
