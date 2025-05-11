import {ReactNode} from "react";
import style from '@/app/(afterLogin)/layout.module.css';
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.jpg";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrandSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";

export default function AfterLoginLayout({children}: { children: ReactNode }) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href="/home">
                            <div className={style.logoPill}>
                                <Image src={logo} alt="로고" width={60} height={60}/>
                            </div>
                            <nav>
                                <ul>
                                    <NavMenu/>
                                </ul>
                                <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
                            </nav>
                            <LogoutButton/>
                        </Link>
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <RightSearchZone/>
                        <TrendSection/>

                        <div className={style.followRecommend}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend/>
                            <FollowRecommend/>
                            <FollowRecommend/>
                            <FollowRecommend/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}