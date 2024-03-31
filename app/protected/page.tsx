import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
// import Header from "@/components/Header";
import { redirect } from "next/navigation";
import FormComponent from "@/components/FormComponent";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-[#2E1A13]">
    <div className="w-full min-h-screen overflow-hidden max-h-screen">
      <main className="w-full self-end flex flex-col items-center justify-center pt-6">
        <FormComponent />
        <Image
          src="/dummy_pic.png"
          width={1100}
          height={400}
          alt="Picture of the plot"
        />
        {/* <form className="w-full flew flex-row items-center justify-center bg-blue-500" onSubmit={handleAddress}>
          <input type="text" placeholder="Enter your address" className="w-[80%] rounded-full border border-white py-4 px-8 bg-transparent text-xl self-center" />
          <button className="w-[20%] rounded-full bg-white py-4 px-8 text-xl self-center" type="submit"> 
            Submit
          </button>
        </form> */}
        {/* <Video src={sprinklerVideo} autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none" /> */}
        {/* Right Control */}
        {/* <div className="w-[35%] bg-[#2E1A13] absolute z-1 right-0 top-0 botttom-0 min-h-screen z-1 flex flex-col space-y-5 justify-center text-center">
          <h1 className="tracking-wide text-[#A8A47B] text-6xl font-bold">
            EVERGREEN
          </h1>
          <h4 className="text-[optimized sprinkler application] text-[#A8A47B] text-2xl">
            optimized sprinkler application
          </h4>
          {"\n"}
          {<AuthButton />}
        </div> */}
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
    // <div className="flex-1 w-full flex flex-col gap-20 items-center">
    //   <div className="w-full">
    //     <div className="py-6 font-bold bg-purple-950 text-center">
    //       This is a protected page that you can only see as an authenticated
    //       user
    //     </div>
    //     <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //       <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
    //         <DeployButton />
    //         <AuthButton />
    //       </div>
    //     </nav>
    //   </div>

    //   <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
    //     <Header />
    //     <main className="flex-1 flex flex-col gap-6">
    //       <h2 className="font-bold text-4xl mb-4">Next steps</h2>
    //       <FetchDataSteps />
    //     </main>
    //   </div>

    //   <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
    //     <p>
    //       Powered by{" "}
    //       <a
    //         href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
    //         target="_blank"
    //         className="font-bold hover:underline"
    //         rel="noreferrer"
    //       >
    //         Supabase
    //       </a>
    //     </p>
    //   </footer>
    // </div>
  );
}


