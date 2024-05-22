import React from 'react';
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "@/app/components/navbar/UserMenu"
import {User} from "@prisma/client";
import NavLink from "@/app/components/navbar/NavLink";

type Props = {
    currentUser?: User | null
}

const Navbar = ({currentUser}: Props) => {
    return (
        <div className="w-full  bg-slate-950 z-15">
            <div className="py-6"
            >
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0 pt-2">
                        <Logo/>
                        <div className="hidden md:flex items-center gap-4">
                            <NavLink label="Store" linkTo="/store"/>
                            <NavLink label="Home" linkTo="/"/>
                            <NavLink label="Support" linkTo=""/>
                        </div>
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;