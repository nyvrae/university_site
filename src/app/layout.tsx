import './_scss/_globals.scss'
import CookieConsent from '@/ui/CookieConsent';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <main>
                    <CookieConsent />

                    {children}
                </main>
            </body>
        </html>
    );
}