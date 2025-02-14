import './_scss/_globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}