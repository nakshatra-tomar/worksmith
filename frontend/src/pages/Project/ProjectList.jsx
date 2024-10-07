import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MixerHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import ProjectCard from "./ProjectCard";

// Correctly importing tags from filterData.js
import { tags } from "./filterData";

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");

  const handleFilterChange = (section, value) => {
    console.log(value, section);
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <h2 className="pb-2 pl-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Filters
            </h2>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>

          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">
              <div>
                <h4 className="pb-3 border-b pb-2 text-xl font-semibold tracking-tight">
                  Category
                </h4>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-3 pt-5"
                    defaultValue="all"
                    onValueChange={(value) => handleFilterChange("tag", value)}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="r1" />
                      <Label htmlFor="r1">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fullstack" id="r2" />
                      <Label htmlFor="r2">Full Stack</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="frontend" id="r3" />
                      <Label htmlFor="r3">Frontend</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="backend" id="r4" />
                      <Label htmlFor="r4">Backend</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-9">
                <h4 className="pb-3 border-b pb-2 text-xl font-semibold tracking-tight">
                  Tags
                </h4>

                <RadioGroup
                  className="space-y-3 pt-5"
                  defaultValue="all"
                  onValueChange={(value) => handleFilterChange("tag", value)}
                >
                  {tags.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id={`r-${item}`} />
                      <Label htmlFor={`r-${item}`}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className="projectListSection w-full lg:2-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative p-0 w-full">
            <Input
              className="w-[40%] rounded-full px-9"
              placeholder="Search Project"
              onChange={handleSearchChange}
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4" />
          </div>
        </div>

        <div>
          <div className="space-y-5 min-h-[74vh]">
            {keyword
              ? [1, 1, 1].map((item, index) => (
                  <ProjectCard
                    key={index}
                    item={{
                      description: `Description for project ${index + 1}`,
                    }}
                  />
                ))
              : [1, 1, 1, 1].map((item, index) => (
                  <ProjectCard
                    key={index}
                    item={{
                      description: `Description for project ${index + 1}`,
                    }}
                  />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
