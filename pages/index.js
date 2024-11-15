import { useSession, signIn, signOut } from 'next-auth/client'

    export default function Home() {
      const [session, loading] = useSession()

      if (loading) return <p>Loading...</p>

      if (!session) {
        return (
          <>
            <h1>Not signed in</h1>
            <button onClick={() => signIn('google')}>Sign in with Google</button>
          </>
        )
      }

      return (
        <>
          <h1>Signed in as {session.user.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
