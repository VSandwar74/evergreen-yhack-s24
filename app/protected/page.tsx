// import DeployButton from "@/components/DeployButton";
// import AuthButton from "@/components/AuthButton";
// import { createClient } from "@/utils/supabase/server";
import { createClient } from "../../utils/supabase/server";
// import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
// import Header from "@/components/Header";
import { redirect } from "next/navigation";
import FormComponent from "../../components/FormComponent";
// import FormComponent from "@/components/FormComponent";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";
// import { useState } from "react";
import React from "react";

type PlotData = [number, number][]; // Define type for plotData

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // const [plotData, setPlotData] = useState<PlotData | null>(null); // State to hold processed data for plotting

  // const handleDataProcessed = (data: PlotData) => { // Use PlotData type
  //     setPlotData(data); // Update state with processed data for plotting
  // };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center bg-[#F2E9DC]">
    <div className="w-full min-h-screen overflow-hidden max-h-screen">
      <main className="w-full self-end flex flex-col items-center justify-center pt-6">
        <FormComponent />
        {/* <Image
          src="/dummy_pic.png"
          width={1100}
          height={400}
          alt="Picture of the plot"
        /> */}
        {/* <AuthButton /> */}
      </main>
    </div>

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


