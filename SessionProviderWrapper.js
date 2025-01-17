"use client"; // Must use "use client" for Client Component

import { SessionProvider } from 'next-auth/react'

export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}