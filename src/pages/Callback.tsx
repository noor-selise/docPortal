import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blocksClient from '../blocksClient'

const Callback = () => {
  const navigate = useNavigate()
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    const run = async () => {
      try {
        // @ts-ignore
        await blocksClient.auth.idp.callback()
        navigate('/', { replace: true })
      } catch (e: any) {
        setErr(String(e || 'callback failed'))
      }
    }
    run()
  }, [navigate])

  if (err) {
    return <div className="p-4 bg-white rounded">Login failed: {err}</div>
  }
  return <div className="p-4 bg-white rounded">Logging in…</div>
}

export default Callback
