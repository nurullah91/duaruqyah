'use client'

import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.svg'
import general from '@/public/general.svg'
import projects from '@/public/projects.svg'
import Link from 'next/link';
import { RiSettings3Fill } from "react-icons/ri";
import { PiTranslate } from "react-icons/pi";
import { BiCategory } from 'react-icons/bi';
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { FaRegCopyright } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="flex-1">
                    <h2 className="text-2xl">Duas Page</h2>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control relative">
                        <input type="text" placeholder="Search" className="input input-bordered w- md:w-auto " />
                        <button className='bg-slate-100 rounded-md px-3 py-2 absolute right-3 top-1'>
                            <IoIosSearch className='text-2xl'/>
                        </button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image width={50} height={50} alt="Tailwind CSS Navbar component" src={profile} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-6 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-72">
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <FaHandHoldingHeart className='text-green-600 text-xl' />
                                    <h4>Support Us</h4>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <MdOutlineFileDownload className='text-green-600 text-xl' />
                                    <h4>Download Dua App</h4>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <MdVerifiedUser className='text-green-600 text-xl' />
                                    <h4>Privacy Policy</h4>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <MdVerified className='text-green-600 text-xl' />
                                    <h4>Thanks & Credits</h4>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <TbInfoOctagonFilled className='text-green-600 text-xl' />
                                    <h4>About Us</h4>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <FaRegCopyright className='text-green-600 text-xl' />
                                    <h4>Copyright Warning</h4>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="flex gap-4 mt-3">
                                    <Image src={projects} alt='icon' className='' />
                                    <h4>Our Other Projects</h4>
                                </div>
                            </Link>
                        </ul>
                    </div>
                    <div>

                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4"><RiSettings3Fill className='text-2xl text-green-500 mr-3' /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content rounded-l-badge">
                                    {/* Sidebar content here */}
                                    <h3 className="text-center text-xl my-5">Settings</h3>

                                    <div className='border rounded-md'>
                                        <div className='flex text-green-600 font-semibold p-2 rounded border-l-4 border-green-600 bg-slate-100'>
                                            <div className=' p-2 bg-slate-100 rounded-full'>
                                                <PiTranslate className='text-xl ' />
                                            </div>
                                            <h5>Language Settings</h5>

                                        </div>

                                        <div className='flex gap-3 m-6'>
                                            <h3 className='bg-green-600 border px-3 py-2 w-full rounded-md text-white text-center'>English</h3>
                                            <h3 className='border px-3 py-2 w-full rounded-md text-center'>বাংলা</h3>
                                        </div>

                                    </div>
                                    <li>
                                        <div className='flex text-slate-500 font-semibold p-2 rounded-md bg-slate-100 mt-4'>
                                            <div className=' p-2 bg-slate-100 rounded-full'>
                                                <Image src={general} alt='icon' />
                                            </div>
                                            <h5>General Settings</h5>

                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex text-slate-500 font-semibold p-2 rounded-md bg-slate-100 mt-4'>
                                            <div className=' p-2 bg-slate-100 rounded-full'>
                                                <BiCategory className='text-xl ' />

                                            </div>
                                            <h5>font Settings</h5>

                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex text-slate-500 font-semibold p-2 rounded-md bg-slate-100 mt-4'>
                                            <div className=' p-2 bg-slate-100 rounded-full'>
                                                <BiCategory className='text-xl ' />
                                            </div>
                                            <h5>Appearance Settings</h5>

                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;