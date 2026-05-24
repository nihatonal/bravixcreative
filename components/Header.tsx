"use client";
import React from "react";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = () => {

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 10);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <header
            className={`fixed w-full py-3 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl`}
        >
            <Container className="flex items-center justify-between text-bvs-lightColor">
                <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
                    <MobileMenu />
                    <Logo />
                </div>
                <HeaderMenu />
                <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                    <LocaleSwitcher />
                </div>
            </Container>
        </header>
    );
};

export default Header;
