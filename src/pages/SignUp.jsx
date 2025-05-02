import React from 'react'

const SignUp = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Get Started Now</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-xl outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-xl outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-xl outline-none"
                  placeholder="******"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">
                  I agree to the <a className="underline">terms & policy</a>
                </span>
              </div>

              <button className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                Signup
              </button>

              <div className="relative text-center my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative bg-white px-2 text-sm text-gray-500">
                  or
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center border rounded-xl py-2 text-sm">
                  <img
                    src="src/assets/signup/google.png"
                    alt="Google"
                    className="h-5 mr-2"
                  />
                  Sign in with Google
                </button>
                <button className="flex-1 flex items-center justify-center border rounded-xl py-2 text-sm">
                  <img
                    src="src/assets/signup/facebook.png"
                    alt="Facebook"
                    className="h-5 mr-2"
                  />
                  Sign in with Facebook   
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-center">
              Have an account?{" "}
              <a href="#" className="text-blue-600 font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block">
          <img
            src="src/assets/signup/left-pic_signup.png"
            alt="Room"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
  )
}

export default SignUp
