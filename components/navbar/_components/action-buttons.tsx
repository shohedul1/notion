'use client';
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";



const ActionButtton = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible)
    }

    const closeDropdown = () => {
        setDropdownVisible(false)
    }


    return (
        <div className="pr-2">
            <div className="items-center justify-center flex">
                <div className="flex xl:space-x-4">
                    <Link href={"/contact-sales"} className="hidden lg:flex items-center">
                        <div>Request a demo</div>
                    </Link>

                    <div className="font-thin lg:flex items-center hidden">
                        |
                    </div>

                    <div className="flex lg:space-x-4 items-center pr-4">
                        <div>
                            <Button variant={"outline"}
                                className="hidden lg:flex items-center border-none text-md">Log in</Button>
                        </div>
                        <div>
                            <Button
                                className="hidden lg:flex items-center border-none text-md">Get Notion free</Button>
                        </div>


                    </div>

                    {isDropdownVisible && (
                        <div onClick={toggleDropdown} className="rounded-full xl:hidden">
                            <X className="h-5 w-5 items-center justify-center " />
                        </div>
                    )}

                    {!isDropdownVisible && (
                        <div onClick={toggleDropdown} className="flex xl:hidden">
                            <AlignJustify className="h-5 w-5 items-center justify-center mr" />
                        </div>
                    )}

                    {isDropdownVisible && <DropDownMenu onClose={closeDropdown} />}

                </div>
            </div>
        </div>
    )
}

export default ActionButtton
