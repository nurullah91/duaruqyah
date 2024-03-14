'use client'

import clipboardCopy from 'clipboard-copy';
import React from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { TbInfoOctagon } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';

const CardButtons = ({ dua }) => {
    
    let previousBookmarks = null;
    if (typeof window !== 'undefined') {
        previousBookmarks = localStorage.getItem('bookmarks');
    }

    const previousFolder = [];

    if (previousBookmarks) {
        const bookMarks = JSON.parse(previousBookmarks);

        // Make a loop on that object
        for (const folder in bookMarks) {
            previousFolder.push(folder)
        }
    }


    const handleCopy = () => {
        const duaText = document.getElementById(dua.dua_id).innerText;
        const textToCopy = `${duaText}
        
        Copied from:
        Dua zone (Hisnul muslim)
        https:www.duazone.com
        `;
        clipboardCopy(textToCopy);

        // Show toast for copied text success
        toast.success('Copied to clipboard', {
            style: {
                padding: "20px",
                background: "#333",
                color: "white"
            },
            iconTheme: {
                primary: 'white',
                secondary: 'black',
            },
            position: "bottom-center"
        })

    }

    const handleBookMark = (e) => {
        e.preventDefault();
        const form = e.target;

        const newFolder = form.newFolder.value;
        const duas = [];
        duas.push(dua.dua_id);
        const created_at = new Date();

        // checking for new folder or old folder
        if (!newFolder) {
            const folderName = form.folderName.value;

            if (previousBookmarks) {
                const bookmark = JSON.parse(previousBookmarks);

                // Add new bookmark
                bookmark[folderName] = { duas, created_at }

                // set to the local storage;
                localStorage.setItem("bookmarks", JSON.stringify(bookmark));

                // show success alert
                toast.success('Bookmark added', {
                    style: {
                        padding: "20px",
                        background: "#333",
                        color: "white"
                    },
                    iconTheme: {
                        primary: 'white',
                        secondary: 'black',
                    },
                    position: "bottom-center"
                })
                form.reset();
            }

            else {
                const bookMark = { folderName: { duas, created_at } };
                localStorage.setItem("bookmarks", JSON.stringify(bookMark));
                // Show success alert
                toast.success('Bookmark Done', {
                    style: {
                        padding: "15px",
                        background: "#333",
                        color: "white"
                    },
                    iconTheme: {
                        primary: 'white',
                        secondary: 'black',
                    },
                    position: "bottom-center"
                })
                form.reset();
            }
        }

        // If folder is new
        else {
            if (previousBookmarks) {
                const bookmark = JSON.parse(previousBookmarks);

                // Add new bookmark
                bookmark[newFolder] = { duas, created_at };

                // set to the local storage;
                localStorage.setItem("bookmarks", JSON.stringify(bookmark));

                // Show success alert
                toast.success('Bookmark Done', {
                    style: {
                        padding: "20px",
                        background: "#333",
                        color: "white"
                    },
                    iconTheme: {
                        primary: 'white',
                        secondary: 'black',
                    },
                    position: "bottom-center"
                })

                form.reset();
            }

            else {
                const bookMark = { [newFolder]: { duas, created_at } };
                localStorage.setItem("bookmarks", JSON.stringify(bookMark));
                // Show success alert
                toast.success('Bookmark Done', {
                    style: {
                        padding: "15px",
                        background: "#333",
                        color: "white"
                    },
                    iconTheme: {
                        primary: 'white',
                        secondary: 'black',
                    },
                    position: "bottom-center"
                })
                form.reset();
            }

        }



    }

    // Style for coming soon toast
    const handleToast = () => {
        toast.success('Coming Soon Insha allah.', {
            style: {
                padding: "20px",
                background: "#333",
                color: "white"
            },
            iconTheme: {
                primary: 'white',
                secondary: 'black',
            },
            position: "bottom-center"
        })
    }
    return (

        <div className='flex justify-between items-center mt-8'>
            <Toaster />
            <div>
                {dua.audio && <audio>
                    <source src={dua.audio} type='audio/ogg' />
                </audio>}
            </div>
            <div className="flex gap-4">
                <button onClick={handleCopy} title='Copy'>
                    <IoCopyOutline className='text-slate-500 text-2xl' />
                </button>
                <button title='Bookmark' onClick={() => document.getElementById('my_modal_2').showModal()}>
                    <CiBookmark className='text-slate-500 text-2xl' />
                </button>
                <button onClick={handleToast} title='Memorize'>
                    <IoBulbOutline className='text-slate-500 text-2xl' />
                </button>
                <button onClick={handleToast} title='Share'>
                    <FaShareAlt className='text-slate-500 text-2xl' />
                </button>
                <button onClick={handleToast} title='Report'>
                    <TbInfoOctagon className='text-slate-500 text-2xl' />
                </button>

            </div>


            {/* Bookmark Modal */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">


                    <h3 className="font-bold text-lg">Favorite</h3>

                    <form onSubmit={handleBookMark}>
                        <div>
                            <label className='block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm mt-5'>Folder Name</label>
                            <select className='border rounded-md w-full px-4 py-2 border-green-600' name="folderName" id="folderName">
                                <option value="Favorite">Favorite</option>
                                {previousFolder.map((folder, index) => <option value={folder} key={index}>{folder}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className='block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm mt-5'>Or,</label>
                            <input className='border rounded-md w-full px-4 py-2 border-green-600' type='text' placeholder='Create New Bookmark Folder'
                                name='newFolder' />
                        </div>
                        <input className='px-4 py-2 m-4 bg-green-600 text-slate-200 font-semibold rounded-md' type="submit" value="Save" />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </div>

    );
};

export default CardButtons;