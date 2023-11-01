import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";

const Navbar = ({className, ...props}) => {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Home
            </Link>
        </nav>
    )
}

export default Navbar;