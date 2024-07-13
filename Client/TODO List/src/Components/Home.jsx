import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import './Home.css'
import { useState } from "react";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Pending Tasks", href: "#", current: false },
  { name: "Completed Tasks", href: "#", current: false },
];
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleSignOutClick = (setHomeFlag) => {
  localStorage.removeItem("email");
  localStorage.removeItem("homeFlag");
  setHomeFlag(false);
};

export default function Home({ email, setHomeFlag }) {
  const [addText, setAddText] = useState("");
  const [desc, setDesc] = useState("");
  
  const handleAdd = (e)=>{
    setAddText(e.target.value);
    // console.log(addText);
  }

  const handleDesc = (e)=>{
    setDesc(e.target.value);
    // console.log(desc)
  }

  const handleAddClick = async ()=>{
    try {
      const data = {
        title: addText,
        description: desc,
        emailId: email,
      };
      const response = axios.post("http://localhost:5000/api/todolist",data);
      alert("Successfully created task");
    } catch(error) {
      console.log("Error adding a todo",error);
    }
  }
  


  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://img.freepik.com/premium-vector/list-line-icon-dark_116137-3817.jpg"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="data:image/png;base64,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"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "group flex rounded-md items-center w-full px-4 py-2 text-sm"
                        )}
                        onClick={() => handleSignOutClick(setHomeFlag)}
                      >
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <h1 className="def-head">Todo List</h1>
      <div className="def-form">
        <input onChange={handleAdd} value={addText} className="form-control def-addTodo" type="text" placeholder="Add Todo Title" aria-label="default input example"/>
        <br />
        <input style={{width:"41%"}} onChange={handleDesc} value={desc} className="form-control def-addTodo" type="text" placeholder="Add Todo Description" aria-label="default input example"/>
        <button onClick={handleAddClick} type="button" className="btn btn-primary btn-md def-btn">
          <span aria-hidden="true">&#43;</span>
        </button>
      </div>
    </div>
  );
}
