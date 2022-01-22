import React from 'react'
import { Button, ButtonWrapper } from '../../styles/Button'
import { Form } from '../../styles/Form'
import { Input } from '../../styles/Input'
import { Wrapper } from '../../styles/Wrapper'
import { Link } from 'react-router-dom'
import { LineBreak } from '../LineBreak'

export default function Login() {
  return (
    <Wrapper>
      <Form>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
        <Link to="#">Forgot password?</Link>
        <LineBreak />
        <ButtonWrapper>
          <Button signup>
            <Link to="/signup">Create new account</Link>
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  )
}
