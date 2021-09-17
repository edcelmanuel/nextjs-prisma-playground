const Footer = () => {
    return (
        <footer className="pt-10 pb-5 text-gray-600 bg-gray-50 dark:bg-gray-900">
            <div className="grid grid-cols-8">
                <div className="grid grid-cols-6 col-span-6 col-start-2 gap-y-4">
                    {/* <div
                        className="col-span-full text-primary hover:text-gray-900 dark:hover:text-white"
                        aria-label="Go to homepage"
                        href="/"
                    >
                        <svg
                            width="59.400000000000006"
                            height="45.900000000000006"
                            viewBox="0 0 44 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M42.5912 0.0200195L34.8262 7.88594C31.8541 3.26024 26.7213 0.209964 20.9086 0.209964C16.4778 0.209964 12.3101 1.9865 9.19538 5.22672C6.0916 8.4446 4.38069 12.7128 4.38069 17.2491C4.38069 18.4111 4.49036 19.5507 4.72068 20.6569C4.15037 21.2491 3.15234 22.3329 2.24204 23.5731C0.256937 26.2994 -0.18176 28.344 0.936917 29.6401C1.10143 29.8413 1.6169 30.3776 2.61493 30.4669C2.70267 30.4781 2.77944 30.4781 2.86718 30.4781C4.46843 30.4781 6.45353 29.2826 8.74572 26.9139L26.9626 8.51164L25.6904 7.20438L8.25219 24.8245C6.88126 22.5116 6.17934 19.9753 6.17934 17.2602C6.17934 13.2044 7.70381 9.39432 10.4786 6.52281C13.2533 3.64013 16.9603 2.05354 20.9086 2.05354C26.2278 2.05354 30.8999 4.91387 33.5102 9.20438L19.6473 23.2491C18.748 24.1653 17.6184 25.2938 16.7958 26.5563C15.3042 28.8245 15.6333 30.5116 15.9623 31.3049L15.9733 31.3273C16.3571 32.21 17.0152 32.9139 17.8816 33.3832C18.8686 33.9083 19.8667 33.9865 20.8757 34.02H20.8976H20.9196C25.3723 34.0088 29.5509 32.2658 32.6766 29.0926C35.8243 25.9195 37.5571 21.6737 37.5571 17.1597C37.5571 14.4111 36.9101 11.8189 35.7694 9.5284L43.8634 1.32728L42.5912 0.0200195ZM2.86718 28.6457H2.85622C2.54913 28.6457 2.39558 28.534 2.35171 28.5005L2.30784 28.4446C1.95689 28.0424 2.13237 26.8468 3.68974 24.6904C4.21618 23.953 4.80842 23.2714 5.29098 22.7239C5.70774 23.9083 6.25612 25.048 6.9361 26.1429C4.72068 28.2994 3.44846 28.6457 2.86718 28.6457ZM31.4044 27.7966C28.6187 30.6122 24.8898 32.1764 20.9305 32.1876C19.9325 32.1541 19.3183 32.0759 18.7261 31.7519C18.2216 31.4837 17.8596 31.0926 17.6293 30.5899C17.1906 29.4725 17.9584 28.1094 18.3093 27.5731C19.0332 26.4669 20.086 25.4055 20.9305 24.5563L34.4205 10.9027C35.2759 12.8133 35.7585 14.9362 35.7585 17.1709C35.7365 21.1932 34.2011 24.9697 31.4044 27.7966Z"
                                fill="#1A1B21"
                            />
                        </svg>
                    </div> */}
                    <ul className="col-span-3 md:col-span-2 lg:col-span-1">
                        <li className="font-semibold text-[14px] text-gray-600">Company</li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/about">
                                About Us
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/careers">
                                Careers
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/blog">
                                Blog
                            </div>
                        </li>
                    </ul>
                    <ul className="col-span-3 md:col-span-2 lg:col-span-1">
                        <li className="font-semibold text-[14px] text-gray-600">Products</li>
                        <li className="pt-1.5 text-xs ">
                            <div
                                className="text-gray-900 dark:text-white"
                                rel="nofollow"
                                href="https://app.planetscale.com/"
                            >
                                Login / Signup
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/cli">
                                CLI
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/pricing">
                                Pricing
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/changelog">
                                Changelog
                            </div>
                        </li>
                    </ul>
                    <ul className="col-span-3 md:col-span-2 lg:col-span-1">
                        <li className="font-semibold text-[14px] text-gray-600">Open Source</li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/vitess">
                                Vitess
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div
                                className="text-gray-900 dark:text-white"
                                rel="nofollow"
                                href="https://vitess.io/slack"
                            >
                                Community
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div
                                className="text-gray-900 dark:text-white"
                                rel="nofollow"
                                href="https://github.com/planetscale/vitess-releases/releases"
                            >
                                Downloads
                            </div>
                        </li>
                    </ul>
                    <ul className="col-span-3 md:col-span-2 lg:col-span-1">
                        <li className="font-semibold text-[14px] text-gray-600">Support</li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/support">
                                Open Support Ticket
                            </div>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div
                                className="text-gray-900 dark:text-white"
                                rel="nofollow"
                                href="https://planetscale.freshstatus.io/"
                            >
                                Status
                            </div>
                        </li>
                    </ul>
                    <ul className="col-span-3 md:col-span-2 lg:col-span-1">
                        <li className="font-semibold text-[14px] text-gray-600">Talk to us</li>
                        <li className="pt-1.5 text-xs ">
                            <span className="text-gray-900 dark:text-white">Call +1 408 214 1997</span>
                        </li>
                        <li className="pt-1.5 text-xs ">
                            <div className="text-gray-900 dark:text-white" href="/contact">
                                Contact Sales
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-8 py-4 lg:py-0">
                <div className="grid grid-cols-6 col-span-6 col-start-2 gap-y-4">
                    <div className="flex col-span-full items-end md:col-span-1">
                        <div className="mr-2 text-secondary" href="https://www.facebook.com/planetscaledata/">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.001 12.074C24.001 5.40502 18.628 -0.000976562 12.001 -0.000976562C5.37105 0.000523438 -0.00195312 5.40502 -0.00195312 12.0755C-0.00195312 18.101 4.38705 23.096 10.123 24.002V15.5645H7.07805V12.0755H10.126V9.41302C10.126 6.38752 11.9185 4.71652 14.659 4.71652C15.973 4.71652 17.3455 4.95202 17.3455 4.95202V7.92202H15.832C14.3425 7.92202 13.8775 8.85352 13.8775 9.80902V12.074H17.2045L16.6735 15.563H13.876V24.0005C19.612 23.0945 24.001 18.0995 24.001 12.074Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="mr-2 text-secondary" href="https://twitter.com/planetscaledata">
                            <svg
                                width={24}
                                height={20}
                                viewBox="0 0 24 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.539 19.5001C16.596 19.5001 21.5505 11.9956 21.5505 5.49906C21.5505 5.28906 21.5505 5.07606 21.5415 4.86606C22.5061 4.16779 23.3386 3.30329 24 2.31306C23.099 2.71034 22.1441 2.97217 21.1665 3.09006C22.1963 2.47452 22.9676 1.50602 23.337 0.364563C22.3695 0.937749 21.3105 1.34012 20.2065 1.55406C19.4643 0.763599 18.4821 0.23994 17.4121 0.0641994C16.3421 -0.111541 15.2441 0.0704453 14.288 0.581969C13.3319 1.09349 12.5712 1.90601 12.1237 2.89365C11.6761 3.8813 11.5668 4.98896 11.8125 6.04506C9.85461 5.94689 7.93922 5.43826 6.19056 4.55218C4.4419 3.66609 2.89903 2.42233 1.662 0.901563C1.03401 1.98619 0.842361 3.26916 1.12597 4.48996C1.40958 5.71076 2.14718 6.77786 3.189 7.47456C2.40831 7.44804 1.64478 7.2384 0.96 6.86256V6.93006C0.961346 8.06628 1.35496 9.16719 2.07431 10.0467C2.79366 10.9262 3.79462 11.5304 4.908 11.7571C4.48539 11.8735 4.04884 11.9315 3.6105 11.9296C3.30148 11.9305 2.99307 11.9019 2.6895 11.8441C3.00418 12.8221 3.61691 13.6773 4.44187 14.2898C5.26683 14.9022 6.2627 15.2413 7.29 15.2596C5.54483 16.6303 3.3891 17.3737 1.17 17.3701C0.778981 17.3717 0.388235 17.3492 0 17.3026C2.25227 18.7385 4.86795 19.5009 7.539 19.5001Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="text-secondary" href="https://www.linkedin.com/company/planetscale">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-3 md:col-start-3 lg:col-span-2 lg:col-start-5">
                        <form className="flex">
                            <input
                                type="email"
                                name="email"
                                aria-label="Enter your email to subscribe to our newsletter"
                                spellCheck="false"
                                className="flex-1 mr-2 text-xs text-gray-900 bg-transparent border-b border-gray-400 outline-none dark:text-white"
                                placeholder="Get our newsletter"
                                required
                            />
                            <button
                                type="submit"
                                className="box-border relative inline-flex items-center justify-center text-center no-underline leading-none whitespace-nowrap font-semibold rounded flex-shrink-0 transition select-none overflow-hidden focus-ring text-sm sm:text-base py-1.5 px-2.5 cursor-pointer Button_v-outline__1iUbc Button_c-secondary__39zpi text-xs md:text-xs py-1 px-1.5"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="flex flex-wrap justify-between pt-5 text-xs">
                            <div>
                                <div
                                    className="font-semibold pr-2.5 text-gray-900 dark:text-white"
                                    href="/legal/privacy"
                                >
                                    Privacy
                                </div>
                                <div
                                    className="font-semibold pr-2.5 text-gray-900 dark:text-white"
                                    href="/legal/siteterms"
                                >
                                    Terms
                                </div>
                            </div>
                            <span className="text-gray-600">
                                © {/* */}2021{/* */} PlanetScale Inc. All rights reserved
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
