"use client";

import { signIn, signOut, useSession } from 'next-auth/react'

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn('github')} className="btn btn-primary">
          Sign in with GitHub
        </button>
      ) : (
        <div>
          <h1>Welcome, {session.user.name}</h1>
          <button onClick={() => signOut()} className="btn btn-secondary">
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}
