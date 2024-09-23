
export const Footer = () => {
    return (
        <footer className="text-[#1f2937] mt-20 py-0.5 flex flex-col justify-center items-center ">
            <div className=" mx-auto text-center">
                <p className="text-sm tracking-wide font-semibold">
                    &copy; {new Date().getFullYear()}, Created by <a href="https://codewithabubakar.netlify.app" className=" hover:text-[#121820]" target="_blank" rel="noopener noreferrer">CodeWithAbubakar.com</a>. All rights reserved.
                </p>
            </div>
        </footer>
    )
} 