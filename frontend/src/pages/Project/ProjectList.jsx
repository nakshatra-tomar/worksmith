import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProjects } from "@/redux/Project/Project.Action";

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");

  const { project } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleFilterCategory = (value) => {
    if (value == "all") {
      dispatch(fetchProjects({}));
    } else {
      console.log(value);
      dispatch(fetchProjects({ category: value }));
    }
  };

  const handleFilterTags = (value) => {
    if (value == "all") {
      dispatch(fetchProjects({}));
    } else dispatch(fetchProjects({ tag: value }));
  };

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value) {
      dispatch(searchProjects(e.target.value));
    }
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
                    className="space-y-3"
                    defaultValue="all"
                    onValueChange={(value) => handleFilterCategory(value)}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="r1" />
                      <Label htmlFor="r1">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Full Stack" id="r2" />
                      <Label htmlFor="r2">Full Stack</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Frontend" id="r3" />
                      <Label htmlFor="r3">Frontend</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Backend" id="r4" />
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
                  onValueChange={(value) => handleFilterTags(value)}
                >
                  {tags.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <RadioGroupItem value={item} id={`r1-${item}`} />
                      <Label htmlFor={`r1-${item}`}>{item}</Label>
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
              ? project.searchProjects.map((item) => (
                  <ProjectCard item={item} key={item.id} />
                ))
              : project.projects.map((item) => (
                  <ProjectCard item={item} key={item.id} />
                ))}
          </div>
          {project.projects.length > 0 ? (
            <div></div>
          ) : (
            <div className="flex items-center justify-center h-[80vh]">
              <h1>No projects available</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
