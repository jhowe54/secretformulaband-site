import { useState, useEffect } from 'react'
import { supabase } from '../../api/client'
import Auth from './Auth'

import AdminScreen from './AdminScreen'
import { classNames } from '../../utils/classNames'

function Login() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="text-white">
      {!session ? <Auth /> : <AdminScreen key={session.user.id} session={session} />}
    </div>
  )
}

export default Login