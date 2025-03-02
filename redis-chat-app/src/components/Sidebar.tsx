import React from "react";
import { USERS } from "@/db/dummy";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Avatar, AvatarImage } from "./ui/avatar";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { LogOut, Pointer } from "lucide-react";

interface SideBarProps {
  isCollapsed: boolean;
}
const Sidebar = ({ isCollapsed }: SideBarProps) => {
  const selectedUSers = USERS[0];
  return (
    <div className=" group relative flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-auto bg-background">
      {!isCollapsed && (
        <div className="flex justify-between p-2 item-center">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium">Chats</p>
          </div>
        </div>
      )}{" "}
      <ScrollArea className="gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {USERS.map((user, idx) =>
          isCollapsed ? (
            <TooltipProvider key={idx}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div>
                    <Avatar className="my-1 flex justify-center items-center">
                      <AvatarImage
                        src={user.image || "/user-placeholder.png"}
                        alt="avtar"
                        width={6}
                        height={6}
                        className="border-2 border-white rounded-full w-10 h-10"
                      />
                    </Avatar>
                    <span className="sr-only">{user.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex item-center gap-4">
                  {user.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
              key={idx}
              className={cn(
                "w-fill justify-start gap-4 my-1",
                selectedUSers.email === user.email &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink"
              )}
              variant={"grey"}
              size={"xl"}
            >
              <Avatar className="my-1 flex justify-center items-center">
                <AvatarImage
                  src={user.image || "/user-placeholder.png"}
                  alt="avtar"
                  width={6}
                  height={6}
                  className="border-2 border-white rounded-full w-10 h-10"
                />
              </Avatar>
              <div className="flex flex-col max-w-28 ">
                <span>{user.name}</span>
              </div>
            </Button>
          )
        )}
      </ScrollArea>
      {/* logout button */}
      <div className="mt-auto">
        <div className="flex justify-between items-center gap-2 md:px-6 py-2 ">
          {!isCollapsed && (
            <div className="hidden md:flex gap-2 items-center">
              <Avatar className="flex justify-center items-center">
                <AvatarImage
                  src={"/user-placeholder.png"}
                  alt="avtar"
                  referrerPolicy="no-referrer"
                  className="border-2 border-white rounded-full w-8 h-8"
                />
              </Avatar>
              <span className="sr-only">{"John Doe"}</span>
            </div>
          )}
          <div className="flex">
            <LogOut size={22} cursor={"Pointer"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
