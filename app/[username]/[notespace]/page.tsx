'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Code, FileText, GitPullRequest, Info, Play, Shield, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import RootFileList from "./components/rootFileList"
import AboutSection from "./components/about"

export default function Component({ params }: any) {
  const state: string = "Public";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/home" passHref>
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-semibold">
              <Link href={`/${params.username}`}>{params.username} </Link> / {params.notespace}</h1>
          </div>
        </div>
      </header>
      <nav className="border-b border-gray-800">
        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="w-full justify-start bg-transparent">
            <TabsTrigger value="notes" className="data-[state=active]:bg-gray-800">
              <FileText className="mr-2 h-4 w-4" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="issues" className="data-[state=active]:bg-gray-800">
              <Info className="mr-2 h-4 w-4" />
              Issues
            </TabsTrigger>
            <TabsTrigger value="pull-requests" className="data-[state=active]:bg-gray-800">
              <GitPullRequest className="mr-2 h-4 w-4" />
              Pull requests
            </TabsTrigger>
            <TabsTrigger value="actions" className="data-[state=active]:bg-gray-800">
              <Play className="mr-2 h-4 w-4" />
              Actions
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-gray-800">
              <Shield className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
      <main className="p-6">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              main
            </Button>
            {/* <Button variant="ghost" size="sm">
              <Code className="mr-2 h-4 w-4" />
              1 branch
            </Button> */}
            <Button variant="ghost" size="sm">
              0 tags
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Add files
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <RootFileList author={params.username} notespace={params.notespace} />
          <AboutSection state={state}/>
        </div>
      </main>
    </div>
  )
}