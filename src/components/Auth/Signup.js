import React from 'react'
import { Link } from 'react-router-dom'
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
import { Footer } from '../Footer'
import SelectBirthdayMonth from '../SelectBirthdayMonth'
import SelectBirthdayDay from '../SelectBirthdayDay'
import SelectBirthdayYear from '../SelectBirthdayYear'

export default function Signup() {
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
            <Form autoComplete="off">
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
                type="email"
                placeholder="Email or phone number"
                autoComplete="new-password"
                required
              />
              <Input signup type="password" placeholder="Password" required />
              <Input
                signup
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
                  <label for="female">Female</label>
                  <Input radio type="radio" id="female" name="sex" />
                </RadioWrapper>

                <RadioWrapper>
                  <label for="male">Male</label>
                  <Input radio type="radio" id="male" name="sex" />
                </RadioWrapper>
                <RadioWrapper>
                  <label for="other">Other</label>
                  <Input radio type="radio" id="other" name="sex" />
                </RadioWrapper>
              </SelectWrapper>

              <p className="fb">You may receive SMS Notifications from us.</p>

              <CenterElement>
                <Button signup type="submit">
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
