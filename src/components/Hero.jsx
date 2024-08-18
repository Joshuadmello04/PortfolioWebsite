import profilePic from "../assets/images/mainimg.jpg"
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 lg:mb-35 "> {/*border after this entire div*/}
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    {/*for all text*/} <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Joshua Dmello</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Web & App Developer</span>
                        <p className="my-2 max-w-xl font-light py-6 tracking-tighter">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit accusantium! Doloremque magnam perspiciatis unde facere? Reiciendis velit, odio, architecto totam a ullam facere alias optio aspernatur sit, amet iste? Repellendus nobis molestias quis ducimus officia? Voluptas odit dicta nam! Eius architecto odit, fugiat ullam atque voluptas. A, quod et!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} className="rounded-2xl w-100 h-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
