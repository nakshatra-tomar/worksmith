import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createIssue } from "@/redux/Issue/Issue.action";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CreateIssueForm = ({ status }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Add project data", data);

    data.projectId = id;
    dispatch(
      createIssue({
        title: data.issueName,
        description: data.description,
        projectId: id,
        status,
      })
    );
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="issueName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Issue Name"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Description"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose>
            <Button type="submit" className="w-full bg-slate-400 py-5">
              Create Issue
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateIssueForm;
