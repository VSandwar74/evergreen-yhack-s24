import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Image from "next/image";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-[#2E1A13]">
      <div className="w-full min-h-screen overflow-hidden max-h-screen">
        <main className="w-full self-end">
          <video 
            src="https://fggttoknlqspnlzgtkeo.supabase.co/storage/v1/object/public/video/sprinkler.mp4?t=2024-03-30T21%3A44%3A33.819Z" 
            autoPlay 
            loop 
            muted 
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none" 
            />
          {/* Right Control */}
          <div className="w-[35%] bg-[#2E1A13] absolute z-1 right-0 top-0 botttom-0 min-h-screen z-1 flex flex-col space-y-5 justify-center text-center">
            <h1 className="tracking-wide text-[#A8A47B] text-6xl font-bold">
              EVERGREEN
            </h1>
            <h4 className="text-[optimized sprinkler application] text-[#A8A47B] text-2xl">
              optimized sprinkler application
            </h4>
            {"\n"}
            {isSupabaseConnected && <AuthButton />}
          </div>
        </main>
      </div>

      {/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div> */}

      {/* <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer> */}
    </div>
  );
}
