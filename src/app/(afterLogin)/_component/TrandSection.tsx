"use client";

import style from "./trandSection.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";
import {usePathname} from "next/navigation";

export default function TrendSection() {
    const pathName = usePathname();
    if (pathName === '/explore') return null;
    return (
        <div className={style.trendBg}>
            <div className={style.trend}>
                <Trend/>
                <Trend/>
                <Trend/>
                <Trend/>
            </div>

        </div>
    )
}