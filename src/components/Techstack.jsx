import { RiReactjsLine } from "react-icons/ri"
import { SiFlutter } from "react-icons/si"
import { SiSpringboot } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiStreamlit } from "react-icons/si"
import { RiJavaFill } from "react-icons/ri"
const Techstack = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Tech<span className="text-neutral-600">Stack</span></h1>
            <div className="flex flex-wrap items-centre justify-center gap-4">
                <div className="rounded 2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded 2xl border-4 border-neutral-800 p-4">
                    <SiFlutter className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded 2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-400" />
                </div>
                <div className="rounded 2xl border-4 border-neutral-800 p-4">
                    <RiJavaFill className="text-7xl text-red-600" />
                </div>
                <div className="rounded 2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-900 " />
                </div>
                <div className="rounded 2xl border-4 border-neutral-800 p-4">
                    <SiStreamlit className="text-7xl text-red-600" />
                </div>
            </div>
            
        </div>
    )
}

export default Techstack
