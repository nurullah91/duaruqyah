import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dua from '@/public/dua-logo.svg';
import duaInfo from '@/public/dua-info.svg'
import ruqyah from '@/public/ruqyah.svg'
import { FiHome } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoBook } from "react-icons/io5";

const LeftNav = () => {
    return (
        <div className='flex flex-row items-center px-5 py-5 rounded-badge bg-base-100 lg:h-screen lg:flex-col fixed lg:static bottom-0 w-full justify-between lg:w-fit lg:m-6 mx-6'>
            
            <div className='p-3 rounded-full w-fit lg:'>
                <Link href={'/'}>
                    <Image width={50} src={dua} alt='Dua'/>
                    </Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-6'>
                <Link href={'/'} className='text-2xl text-slate-500'><FiHome  /></Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-2'>
                <Link href={'/'} className='text-2xl text-slate-500'><BiCategory /></Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-2'>
                <Link href={'/'} className='text-2xl text-slate-500'><FaRegLightbulb   /></Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-2'>
                <Link href={'/'} className='text-2xl text-slate-500'><CiBookmark   /></Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-2'>
                <Link href={'/'} className='text-2xl text-slate-500'>
                    <Image src={ruqyah} alt='icon'/>
                    </Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-2'>
                <Link href={'/'} className='text-2xl text-slate-500'>
                <Image src={duaInfo} alt='icon'/>
                    </Link>
            </div>
            <div className='bg-slate-200 p-2 rounded-full w-fit lg:mt-2'>
                <Link href={'/'} className='text-2xl text-slate-500'><IoBook  /></Link>
            </div>
            <div className='bg-green-600 p-3 rounded-lg w-fit lg:mt-6'>
                <Link href={'/'} className='text-2xl text-base-100'><FaHandHoldingHeart /></Link>
            </div>
            
        </div>
    );
};

export default LeftNav;