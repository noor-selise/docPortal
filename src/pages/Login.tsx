import React from 'react'
import blocksClient from '../blocksClient'

const Login = () => {
  const handleLogin = () => {
    // Redirect to hosted provider
    // blocksClient.auth.idp.redirectToProvider() is provided by the SDK
    try {
      // @ts-ignore
      blocksClient.auth.idp.redirectToProvider()
    } catch (e) {
      // fallback: open the provider URL if SDK is not available in runtime
      window.location.href = '/login'
    }
  }

  return (
    <div className="p-6 bg-white rounded shadow-sm">
      <h2 className="text-lg font-medium mb-4">Sign in</h2>
      <button aria-label="Sign in" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>
        Sign in with Blocks
      </button>
    </div>
  )
}

export default Login
