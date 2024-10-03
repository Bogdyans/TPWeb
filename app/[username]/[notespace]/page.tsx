import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Code, FileText, GitPullRequest, Info, Play, Shield, Star } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-semibold">Username / Notespace</h1>
            <span className="rounded-full bg-gray-700 px-2 py-1 text-xs">Public</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Star className="mr-2 h-4 w-4" />
              Star
            </Button>
            <Button variant="outline" size="sm">
              Fork
            </Button>
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
            <Button variant="ghost" size="sm">
              <Code className="mr-2 h-4 w-4" />
              1 branch
            </Button>
            <Button variant="ghost" size="sm">
              0 tags
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Go to file
            </Button>
            <Button variant="outline" size="sm">
              Add file
            </Button>
            <Button variant="default" size="sm">
              Code
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <Input className="mb-4" placeholder="Find a note..." />
            <ul className="space-y-2">
              {['Note 1.md', 'Note 2.md', 'Folder 1', 'Shared Note.md'].map((item) => (
                <li key={item} className="flex items-center justify-between p-2 hover:bg-gray-800 rounded">
                  <span>{item}</span>
                  <span className="text-gray-400 text-sm">Last updated 2 days ago</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <p className="text-sm text-gray-400 mb-4">
              No description, website, or topics provided.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4" />
                0 stars
              </div>
              <div className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                0 issues
              </div>
              <div className="flex items-center">
                <GitPullRequest className="mr-2 h-4 w-4" />
                0 pull requests
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}