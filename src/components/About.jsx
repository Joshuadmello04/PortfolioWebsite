import abtMePic from "../assets/images/abtme.jpg"
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={abtMePic} className="w-500 h-500 rounded-2xl" alt="aboutme" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                       <div className="flex justify-center lg:justify-start">
                       <p className="my-2 max-w-xl py-6 tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo corporis pariatur! Quidem, error ullam, impedit voluptatibus dolorem, dolore facilis nemo accusantium nostrum reprehenderit praesentium repellendus consequatur porro explicabo suscipit quae a autem est! Similique vitae facere nisi. Molestiae corporis mollitia culpa vitae numquam consequuntur in earum ducimus voluptates sit, veritatis commodi facilis veniam excepturi eveniet. Vero iusto minus velit quis, repudiandae recusandae similique unde aperiam praesentium optio id natus reprehenderit, vel molestiae facilis odio quidem cumque odit! Rerum, ut eaque ipsum eius labore nisi velit quis exercitationem hic odio cupiditate quo sequi suscipit, numquam libero sit distinctio aliquam officia?</p>
                       </div>
                    </div>
            </div>
        </div>
    )
}

export default About

