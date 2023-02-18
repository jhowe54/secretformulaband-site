import { useState, useEffect } from 'react'
import { supabase } from '../api/client'
import Auth from './Auth'
import AdminView from './AdminView'

export default function AdminScreen() {
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
    <div className="mx-auto h-screen text-lg" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <AdminView key={session.user.id} session={session} />}
    </div>
  )
}