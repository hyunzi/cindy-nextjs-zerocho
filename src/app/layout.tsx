import {ReactNode} from "react";

export default function RootLayout({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="">
        {children}
        </body>
        </html>
    );
}
