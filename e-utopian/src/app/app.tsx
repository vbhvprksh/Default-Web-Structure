import React, { Suspense, useState, useEffect } from 'react'
import Routes from '../routes/routes'
import ReLoader from '../common/reLoader'
import { ToastContainer } from 'react-toastify'
import { selectLoading } from './appSlice'
import { useSelector } from 'react-redux'

export default function App() {
  const loading = useSelector(selectLoading)
  return (
    <Suspense fallback={<ReLoader loading={true} />}>
      <ToastContainer autoClose={5000} toastClassName="f-14" newestOnTop />
      <ReLoader loading={loading} />
      <Routes />
    </Suspense>
  )
}
