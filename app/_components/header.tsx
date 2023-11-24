import Image from "next/image"

export const Header = () => {
  return (
    <div className="h-20 md:h-24 fixed z-50 bg-white bg-opacity-75 w-full px-2.5 md:px-5 ">
      <div className="h-full w-full flex items-center space-x-5">
        <div className="h-2/3 aspect-square relative">
          <Image src={"/palestine-l.gif"} alt="" fill />
        </div>
        <div className="flex flex-col font-bold">
          <div className="text-xl">Free Palestine</div>
          <div className="text-green-700">#Save Gaza</div>
        </div>
      </div>
    </div>
  )
}
