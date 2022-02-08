import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --fb-blue: #1877f2;
  --green: #36a420;
  --positive: #31a24c;
  --primary-text: #e4e6eb;
  --divider: #3e4042;
  --button-bg-color: #3a3b3c;
  --light-hover: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
  --dark-hover: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  --bgSecondary: ${({ theme }) => theme.bgSecondary};
  --overlayAlpha: ${({ theme }) => theme.overlayAlpha};
  --hoverOverlay: ${({ theme }) => theme.hoverOverlay};
  --shadow: ${({ theme }) => theme.shadow};
  --lime: #45BD62;
  --lemon: #F7B928;
  --purple: #8564df;
  color-scheme: ${({ theme }) => theme.colorScheme};
} 
html {
  margin: 0px;
  height: 100%;
  width: 100%;
}

body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  // font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  transition: all 0.25s linear;
  margin: 0;
  min-height: 100%;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
  `
