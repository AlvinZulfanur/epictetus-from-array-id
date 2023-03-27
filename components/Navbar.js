import Link from "next/link"
import React from "react"
import { useState } from "react"
import Container from "./Container"

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false)
  const [search, setSearch] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ]
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffCanvas(!offCanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <Link
            href="/"
            className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start text-lg md:mr-4"
          >
            <div className="lg:w-10 lg:h-10 w-10 h-8 bg-gray-500 rounded flex items-center justify-center mr-3 font-semibold shadow-2xl">
              E
            </div>
            Epictetus
          </Link>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-8/12  lg:static text-lg fixed bg-gradient-to-b from-gray-600 to-gray-900 top-0 transition-all ${
              offCanvas ? "left-0" : "-left-full"
            } h-full w-full p-6 lg:h-auto  lg:bg-none`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffCanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>
                <Link href="/posts" className="hover:underline">
                  UI Design
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Front End
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Back-End
                </Link>
              </li>
              <li className="relative">
                <a
                  className="cursor-pointer flex items-center "
                  onClick={() => setDropDown(!dropDown)}
                >
                  lainnya
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropDown && (
                  <ul className="absolute bg-gray-800 w-[150px] rounded mt-4 shadow-slate-500">
                    {dropdownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-gray-700 last:border-none"
                      >
                        <a href={href} className="flex p-2 hover:bg-gray-600 ">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-2/12 lg:static absolute w-full left-0 px-10 lg:px-0 transition-all ${
              search ? "top-10" : "-top-40"
            } `}
          >
            <button
              className="absolute top-2 right-14 lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <input
              className=" bg-gray-700 py-2 px-8 w-full lg:rounded-full rounded-lg bg-search sm:pl-10"
              placeholder="Search"
            />
          </div>
        </div>
      </Container>
    </nav>
  )
}
