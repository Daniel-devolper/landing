'use client'

import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Amigos Simon', href: '#' },
  { name: 'Simon te presta', href: '#' },
  { name: 'Simon te cuida', href: '#' },
  { name: 'Simon te premia', href: '#' },
  { name: 'Simon te cuenta', href: '#' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <nav aria-label="Global" className="mx-auto flex max-w-[1400px] items-center justify-between p-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5">
          <img
            alt="logo_SIMON_PAY"
            src="/SIMON_PAY.svg"
            className="h-8 w-auto"
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className='flex gap-5'>
          <div className="px-3 lg:flex lg:gap-x-3 bg-[#1B1B1B] items-center border h-12 rounded-lg border-[#3D3D3D] p-1">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={item.name === "Inicio" ? "bg-[#00F1C7] text-[#000000] font-bold px-2 rounded py-1" :"text-[16px] leading-5 font-semibold text-[#999999]"}>
                {item.name}
              </a>
            ))}
          </div>

          <div className="px-3 lg:flex lg:gap-x-3 bg-[#1B1B1B] items-center border h-12 w-12 rounded-lg border-[#3D3D3D] p-1">
            <img
              alt="logo_settings"
              src="/Comment.svg"
            />
          </div>

          <div className="px-3 lg:flex lg:gap-x-3 relative bg-[#1B1B1B] items-center border h-12 w-12 rounded-lg border-[#3D3D3D] p-1">
            <span className='absolute h-4 w-4 flex items-center justify-center right-2 top-2 bg-[#00F1C7] leading-[13px] text-center font-semibold rounded-full text-[10px] text-[#000000]'>99</span>
            <img
              alt="logo_settings"
              src="/Bell.svg"
            />
          </div>

          <div className="lg:flex items-center h-12 w-12 rounded-lg relative p-1">
            <img 
            alt="avatar" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full" 
            />
            <span className='absolute h-4 w-4 flex items-center justify-center border-2 border-white right-[10px] top-6 bg-[#00F1C7] leading-[13px] text-center font-semibold rounded-full text-[10px] text-[#000000]'></span>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-[16px] leading-5 font-semibold text-[#999999]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-red-500 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header;