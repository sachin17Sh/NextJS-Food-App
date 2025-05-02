import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={LogoImg} alt="A plate with multiple items of food" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                        <NavLink href={"/meals"}> Browse Meals </NavLink>
                        </li>
                        <li>
                        <NavLink href={"/community"}> Browse Meals </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
 