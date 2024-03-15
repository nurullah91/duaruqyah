"use client";

import clipboardCopy from "clipboard-copy";
import React, { useEffect, useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { TbInfoOctagon } from "react-icons/tb";
import { ImLoop } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";

// Ply pause buttons icon
import playBtn from "@/public/audioPlayBtn.svg";
import pauseBtn from "@/public/audioPauseBtn.svg";
import Image from "next/image";

const CardButtons = ({ dua }) => {
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false)
  const audioRef = useRef();
  //   function for play and pause
  const togglePlay = () => {
    setPlay(!play);
  };

  
  // change the state of play when audio end
  useEffect(() => {
    const handleEnded = () => {
      setPlay(false); // Change play state to false when audio ends
    };
    if (audioRef.current) {
    audioRef.current.addEventListener('ended', handleEnded); // Add event listener for 'ended' event
      // Cleanup function to remove event listener when component unmounts or play state changes
      return () => {
        audioRef.current.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  useEffect(() => {

    if (audioRef.current) {
      if (play) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
        audioRef.current.loop = loop;
    }
  }, [play, loop]);

  let previousBookmarks = null;
  if (typeof window !== "undefined") {
    previousBookmarks = localStorage.getItem("bookmarks");
  }

  const previousFolder = [];

  if (previousBookmarks) {
    const bookMarks = JSON.parse(previousBookmarks);

    // Make a loop on that object
    for (const folder in bookMarks) {
      previousFolder.push(folder);
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
    toast.success("Copied to clipboard", {
      style: {
        padding: "20px",
        background: "#333",
        color: "white",
      },
      iconTheme: {
        primary: "white",
        secondary: "black",
      },
      position: "bottom-center",
    });
  };

  //   Bookmark handling
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
        bookmark[folderName] = { duas, created_at };

        // set to the local storage;
        localStorage.setItem("bookmarks", JSON.stringify(bookmark));

        // show success alert
        toast.success("Bookmark added", {
          style: {
            padding: "20px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });
        form.reset();
      } else {
        const bookMark = { folderName: { duas, created_at } };
        localStorage.setItem("bookmarks", JSON.stringify(bookMark));
        // Show success alert
        toast.success("Bookmark Done", {
          style: {
            padding: "15px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });
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
        toast.success("Bookmark Done", {
          style: {
            padding: "20px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });

        form.reset();
      } else {
        const bookMark = { [newFolder]: { duas, created_at } };
        localStorage.setItem("bookmarks", JSON.stringify(bookMark));
        // Show success alert
        toast.success("Bookmark Done", {
          style: {
            padding: "15px",
            background: "#333",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
          position: "bottom-center",
        });
        form.reset();
      }
    }
  };

  // Style for coming soon toast
  const handleToast = () => {
    toast.success("Coming Soon Insha allah.", {
      style: {
        padding: "20px",
        background: "#333",
        color: "white",
      },
      iconTheme: {
        primary: "white",
        secondary: "black",
      },
      position: "bottom-center",
    });
  };
  return (
    <div className="flex justify-between items-center mt-8">
      <Toaster />
      <div>
        {dua.audio && (
          <div className="flex gap-4 items-center">
            <button onClick={togglePlay}>
              <Image src={play ? playBtn : pauseBtn} alt="control button" />
            </button>
            <audio ref={audioRef} src={dua.audio} />
            {play && <div>
              <button onClick={()=>setLoop(!loop)}><ImLoop className={`text-2xl ${loop?"text-slate-900": "text-slate-500"}`}/></button>
              </div>}
          </div>
        )}
      </div>
      <div className="flex gap-4">
        <button onClick={handleCopy} title="Copy">
          <IoCopyOutline className="text-slate-500 text-2xl" />
        </button>
        <button
          title="Bookmark"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <CiBookmark className="text-slate-500 text-2xl" />
        </button>
        <button onClick={handleToast} title="Memorize">
          <IoBulbOutline className="text-slate-500 text-2xl" />
        </button>
        <button onClick={handleToast} title="Share">
          <FaShareAlt className="text-slate-500 text-2xl" />
        </button>
        <button onClick={handleToast} title="Report">
          <TbInfoOctagon className="text-slate-500 text-2xl" />
        </button>
      </div>

      {/* Bookmark Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Favorite</h3>

          <form onSubmit={handleBookMark}>
            <div>
              <label className="block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm mt-5">
                Folder Name
              </label>
              <select
                className="border rounded-md w-full px-4 py-2 border-green-600"
                name="folderName"
                id="folderName"
              >
                <option value="Favorite">Favorite</option>
                {previousFolder.map((folder, index) => (
                  <option value={folder} key={index}>
                    {folder}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm mt-5">
                Or,
              </label>
              <input
                className="border rounded-md w-full px-4 py-2 border-green-600"
                type="text"
                placeholder="Create New Bookmark Folder"
                name="newFolder"
              />
            </div>
            <input
              className="px-4 py-2 m-4 bg-green-600 text-slate-200 font-semibold rounded-md"
              type="submit"
              value="Save"
            />
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
