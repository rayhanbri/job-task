"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg p-6">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-center text-2xl">Sign In</h2>

                    {/* Credentials Login */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            const email = e.target.email.value
                            const password = e.target.password.value
                            signIn("credentials", {
                                email,
                                password,
                                redirect: true,
                                callbackUrl: "/products"
                            })
                        }}
                        className="flex flex-col gap-3"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        required/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                        required/>
                        <button className="btn btn-primary text-white w-full mt-2 hover:btn-secondary">
                            Sign in with Credentials
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    {/* Google Login */}
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/products" })
                        }
                        className="btn btn-secondary w-full mt-4"
                    >
                        Sign in with Google
                    </button>

                </div>
            </div>
        </div>
    )
}
