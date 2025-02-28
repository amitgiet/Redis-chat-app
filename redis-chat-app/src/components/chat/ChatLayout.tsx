"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Sidebar from "../Sidebar";

interface ChatLayoutProps {
  defaultLayout: number[] | undefined;
}
const ChatLayout = ({ defaultLayout = [320, 480] }: ChatLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full items-stretch bg-background rounded-lg"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
    >
      <ResizablePanel
        defaultSize={250}
        collapsedSize={0}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapse(true);
          document.cookie = `react-resizable-panel:collapsed=true;`;
        }}
        onExpand={() => {
          setIsCollapse(false);
          document.cookie = `react-resizable-panel:collapsed=false;`;
        }}
        className={cn(
          isCollapse && "min-w-[80px] transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <div className="flex justify-center items-center h-full w-full px-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full md:w-2/3 lg:w-1/2"
            />
            <p className="text-muted-foreground text-center">
              {" "}
              Click on a chat to view the messages
            </p>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatLayout;
