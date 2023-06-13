import React from 'react';
import Container from "../Container";
import Logo from "./Logo";
import MiddleItems from "@/app/components/navbar/MiddleItems";
import UserMenu from "@/app/components/navbar/UserMenu";
import {User} from "@prisma/client";

type Props = {
    currentUser?: User | null
}

const Navbar = ({currentUser}: Props) => {


    return (
        <div className="w-full bg-slate-950 z-10">
            <div
                className="
                    py-6
                "
            >
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0 pt-2">
                        <Logo/>
                        <MiddleItems/>
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;