import Image from "next/image"

const Loading = () => {
    return (
        <div className="w-full h-screen bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/assets/logo.svg" width={150} alt="logo" />
            <span className="text-2xl font-medium">Loading...</span>
        </div>
    )
}

export default Loading