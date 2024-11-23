export default function ErrorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen bg-background">
                    {children}
                </main>
            </body>
        </html>
    )
}