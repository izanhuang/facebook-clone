import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Button } from '../styles/Button'
import { SecondaryText } from '../styles/Text'
import { Wrapper, CenterElement } from '../styles/Wrapper'

const NotFound = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()

  return (
    <Wrapper>
      <CenterElement fullWindowHeight>
        <CenterElement notFoundPage>
          <img
            style={{
              width: '112px',
              height: '112px',
            }}
            src={
              theme === 'dark'
                ? 'https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg'
                : 'https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg'
            }
            alt="broken link"
          />
          <SecondaryText style={{ fontSize: '20px', fontWeight: '600' }}>
            This Page Isn't Avaliable
          </SecondaryText>
          <CenterElement>
            <Button
              onClick={() => {
                navigate('/')
              }}
            >
              Go to News Feed
            </Button>
          </CenterElement>
        </CenterElement>
      </CenterElement>
    </Wrapper>
  )
}

export default NotFound
