import { Suspense } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Client Login — XLAI",
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 block text-center text-lg font-extrabold tracking-widest text-foreground"
        >
          <span className="text-primary">XL</span>AI
        </Link>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h1 className="text-lg font-semibold text-foreground">Client login</h1>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Sign in with the credentials your XLAI contact sent you.
          </p>

          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
