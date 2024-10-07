/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import IssueCard from "./IssueCard";
import CreateIssueForm from "./CreateIssueForm";

import React from "react";

export function IssueList({ title, status }) {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px] ">
          <CardHeader className="">
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-2">
              {[1, 1, 1].map((item) => (
                <IssueCard key={item} />
              ))}
            </div>
          </CardContent>

          <CardFooter className="px-2">
            <DialogTrigger>
              <Button
                className="w-full border flex items-center gap-2"
                variant="outline"
              >
                <PlusIcon /> <span>Create Issue</span>
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent className="border-none w-[300px]">
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IssueList;