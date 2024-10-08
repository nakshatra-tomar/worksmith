import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersonIcon } from "@radix-ui/react-icons";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import CreateProjectForm from "../Project/CreateProjectForm";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/Auth/Action";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="border-b  py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl"
        >
          WorkSmith
        </h1>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">New Project</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button variant="ghost">Upgrade</Button>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              className="rounded-full border-2 border-gray-500"
              variant="outline"
              size="icon"
            >
              <PersonIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="lg:block hidden"> {auth.user?.fullName}</p>
      </div>
    </div>
  );
};

export default Navbar;
