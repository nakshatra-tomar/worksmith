import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment } from "@/redux/Comment/Comment.Action";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const CreateCommentForm = ({ issueId }) => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });
  const onSubmit = (data) => {
    console.log("Comment Data: ", data);
    dispatch(createComment({ content: data.content, issueId }));
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-2">
                <div>
                  <Avatar>
                    <AvatarFallback>
                      {auth.user.fullName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    className="w-[20rem]"
                    placeholder="Add Comment"
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};

export default CreateCommentForm;
