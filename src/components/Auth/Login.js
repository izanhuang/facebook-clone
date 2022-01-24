import React from 'react'
import { Button } from '../../styles/Button'
import { Form, FormHeader } from '../../styles/Form'
import { Input } from '../../styles/Input'
import { Wrapper, ContentWrapper, CenterElement } from '../../styles/Wrapper'
import { Link } from 'react-router-dom'
import { LineBreak } from '../LineBreak'
import { Card } from '../../styles/Card'
import { Footer } from '../Footer'

export default function Login() {
  return (
    <Wrapper>
      <ContentWrapper>
        <img
          className="logo"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        />
        <Card>
          <FormHeader padding>
            <h4>Log Into Facebook</h4>
          </FormHeader>
          <Form login>
            <Input type="email" placeholder="Email or phone number" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
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
    </Wrapper>
  )
}
