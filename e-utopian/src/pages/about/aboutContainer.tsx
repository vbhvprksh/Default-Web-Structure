import React from 'react'
import ReHeading1 from '../../common/typography/reHeading1'

interface IProps {}

export default function AboutContainer(props: IProps) {
  return (
    <div className="pt-3 w-75 mx-auto">
      <ReHeading1 text={'About page'} className="pt-1 text-center text-success" />
    </div>
  )
}
