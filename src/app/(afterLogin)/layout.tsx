import {ReactNode} from "react";

export default function AfterLoginLayout({children}: { children: ReactNode }) {
    return (
        <div>
            After Login Layout
            {children}
        </div>
    )
}