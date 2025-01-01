// File: /app/(auth)/forgot-password/page.tsx
"use client"

import { AuthForm } from "@/components/auth/auth-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { toast } from "sonner"
import { auth } from "@/lib/auth"
import { sendPasswordResetEmail } from "firebase/auth"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (email: string) => {
    try {
      setIsLoading(true)
      await sendPasswordResetEmail(auth, email)
      toast.success("Password reset email sent")
    } catch (error) {
      toast.error("Error sending reset email")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm
            type="forgot-password"
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  )
}
