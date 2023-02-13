import Head from "next/head";

const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
}
function Layout ({children, pageTitle}){
    return(
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>{pageTitle}</title>
        </Head>
        <div className="flex flex-col min-h-screen">
            <header className="w-full h-16 border-b border-black-500 flex items-center justify-center">
            <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
                <div className="text-2xl text-black-500">Hayden Sykes</div>
                <nav className="text-2xl text-gray-600">Blog</nav>
            </div>
            </header>
            <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
            {children}
            </main>
            <footer className="flex flex-col items-center w-full h-12 border-t border-black-500">
            <div className="w-11/12 md:w-full max-w-3xl m-auto flex flex-row items-center justify-center">
                All content © {currentYear()} Hayden Sykes 
            </div>
            </footer>
        </div>
        </>
    )
}

export default Layout;