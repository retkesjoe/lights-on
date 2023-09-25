import styled from 'styled-components'

export const ButtonStyle = styled.button`
  --tw-text-opacity: 1;
  position: relative;
  display: inline-block;
  color: rgb(203 213 225 / var(--tw-text-opacity));

  &:before {
    content: '';
    position: absolute;
    width: 0px;
    bottom: 0;
    left: 50%;
    height: 2px;
    background: rgb(203 213 225 / var(--tw-text-opacity));
    transition: all 1s;
  }

  &:hover:before {
    left: 0;
    width: 100%;
    transition: all 0.5s;
  }
`
