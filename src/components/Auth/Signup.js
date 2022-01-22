import React from 'react'
import { Button, ButtonWrapper } from '../../styles/Button'
import { Form } from '../../styles/Form'
import { Input } from '../../styles/Input'
import { Wrapper } from '../../styles/Wrapper'

export default function Signup() {
  return (
    <Wrapper>
      <Form>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <ButtonWrapper>
          <Button signup type="submit">
            Sign Up
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  )
}
