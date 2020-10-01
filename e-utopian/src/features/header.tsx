import React from 'react'
import history from '../routes/history'
import { Button } from 'react-bootstrap'

interface Props {}

export default function Header(props: Props) {
  function goTo(path: string) {
    history.push(path)
  }

  return (
    <>
      <nav style={{ background: '#1F0C3A' }} className="navbar navbar-dark py-12">
        <div className="d-flex">
          <div className="d-inline-block d-flex">
            <Button
              style={{
                color: 'white',
                background: 'transparent',
                outline: 'none',
                border: 'none',
              }}
              className="m-2"
              onClick={() => goTo('/home')}
              active={true}
            >
              Home
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'transparent',
                outline: 'none',
                border: 'none',
              }}
              className="m-2"
              onClick={() => goTo('/faq')}
            >
              FAQ
            </Button>
            <Button
              style={{
                color: 'white',
                background: 'transparent',
                outline: 'none',
                border: 'none',
              }}
              className="m-2"
              onClick={() => goTo('/about')}
            >
              About
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
