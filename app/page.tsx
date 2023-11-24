import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen w-full flex-col">
        <div className="h-full w-full relative flex-1">
          <Image src={"/hero.gif"} alt="" fill />
          <div className="h-full w-full absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm text-white flex justify-center items-center">
            <div className="space-y-5 font-bold">
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="text-red-600 bg-red-100 bg-opacity-20 px-2.5 py-0.5 rounded-xl backdrop:blur-lg font-extrabold">
                  Palestenians
                </span>{" "}
                have right to live.
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Save{" "}
                <span className="text-green-600 bg-green-100 bg-opacity-20 px-2.5 py-0.5 rounded-xl backdrop:blur-lg  font-extrabold">
                  Children
                </span>{" "}
                of Gaza.
              </div>
              <div className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                Let us raise our voice against{" "}
                <span className="text-black bg-gray-100 bg-opacity-20 px-2.5 py-0.5 rounded-xl backdrop:blur-lg font-extrabold">
                  Oppression
                </span>
              </div>

              <div className="">
                <div className="text-green-500">Actions</div>
                <ul className="font-normal">
                  <li> - Demand for Immediate Ceasefire</li>
                  <li> - Demand for Humanitarian Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
