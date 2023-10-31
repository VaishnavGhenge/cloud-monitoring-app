'use client';

export default function Home() {

    return (
        <div className='bg-black'>
            <header>
                <div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>ABout</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
                <p>Hello</p>
                <p>Hello2</p>
            </main>
        </div>
    )
}