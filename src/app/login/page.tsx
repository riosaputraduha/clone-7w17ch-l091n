import { EyeIcon, TwitchLogo } from "@/components/sites/twitch-7b268867/shared/icons";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0e0e10] flex items-center justify-center p-4 text-[#efeff1] font-sans">
      <div className="w-full max-w-[390px] pt-10 px-4">
        <div className="flex flex-col items-center mb-8 gap-4">
          <div className="bg-[#9146ff] rounded-[9000px] p-[6px]">
            <TwitchLogo className="text-white w-9 h-[42px]" />
          </div>
          <h1 className="text-[24px] font-semibold">Log in to Twitch</h1>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold">Username</label>
            <input
              type="text"
              className="h-9 px-3 rounded-lg bg-[#18181b] text-[14px] outline-none border border-white/20 focus:border-white focus:bg-black transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-bold">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-9 pl-3 pr-10 rounded-lg bg-[#18181b] text-[14px] outline-none border border-white/20 focus:border-white focus:bg-black transition-colors"
              />
              <button
                type="button"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <Link
            href="#"
            className="text-[14px] text-[#bf94ff] hover:underline w-fit"
          >
            Trouble logging in?
          </Link>

          <button
            type="submit"
            disabled
            className="h-8 mt-2 rounded-[9000px] bg-white/10 text-white/50 text-[14px] font-semibold cursor-not-allowed"
          >
            Log In
          </button>
        </form>

        <div className="my-6 relative flex items-center">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="px-3 text-[14px] text-[#adadb8]">or</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="h-9 relative flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-[9000px] text-[14px] font-semibold transition-colors">
            <Image
              src="/sites/twitch-7b268867/shared/images/google-logo.png"
              alt="Google"
              width={20}
              height={20}
              className="absolute left-3"
            />
            Continue with Google
          </button>

          <button className="h-9 relative flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-[9000px] text-[14px] font-semibold transition-colors">
            <Image
              src="/sites/twitch-7b268867/shared/images/amazon-white-logo.png"
              alt="Amazon"
              width={20}
              height={20}
              className="absolute left-3"
            />
            Continue with Amazon
          </button>

          <button className="h-9 relative flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-[9000px] text-[14px] font-semibold transition-colors">
            <Image
              src="/sites/twitch-7b268867/shared/images/apple-white-logo.png"
              alt="Apple"
              width={20}
              height={20}
              className="absolute left-3"
            />
            Continue with Apple
          </button>
        </div>

        <div className="mt-8 text-center text-[14px]">
          <span className="text-[#efeff1]">Don't have an account? </span>
          <Link href="#" className="text-[#bf94ff] hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
