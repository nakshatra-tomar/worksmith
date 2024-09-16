import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"; // Ensure that this is imported if using Badge
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {};
  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                Arma 5 security dev
              </h1>

              <div className="space-y-5 pb-10">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab
                  quasi, facilis asperiores aperiam ullam nihil molestiae
                  voluptate alias dicta facere fuga nisi eaque debitis nesciunt
                  in eligendi sequi vel?
                </p>

                <div className="flex">
                  <p className="w-36">Project Lead : </p>
                  <p>Nakshatra Tomar</p>
                </div>

                <div className="flex">
                  <p className="w-36">Members : </p>
                  <div className="flex items-center gap-2">
                    {[1, 1, 1, 1].map((item, index) => (
                      <Avatar className="cursor-pointer" key={item}>
                        <AvatarFallback>N</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger>
                    <DialogClose>
                      <Button
                        size="sm"
                        variant="outline"
                        className="ml-2"
                        onClick={handleProjectInvitation}
                      >
                        <span className="pr-1">Invite</span>
                        <PlusIcon className="w-3 h-3" />
                      </Button>
                    </DialogClose>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Invite User</DialogTitle>
                    </DialogHeader>
                    <InviteUserForm />
                  </DialogContent>
                </Dialog>

                <div className="flex">
                  <p className="w-36">Category :</p>
                  <p>Full Stack</p>
                </div>

                <div className="flex">
                  <p className="w-36">Project Lead :</p>
                  <Badge>Nakshatra</Badge>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
