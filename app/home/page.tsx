'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Bell, Filter, GitBranch, Plus, Search } from "lucide-react"
import Link from "next/link"

import { useAlerts } from '@/components/alert/Alert'
import NotespaceList from "./components/notespaceList"



export default function Component() {
    const { addAlert } = useAlerts();
    const username = "Bogdyan";

    const handleCreate = () => {
        addAlert("You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:text-balance to apply the text-balance utility at only medium screen sizes and above.", "success");
    };

    const getRepos = () => {

    }

    return (
        <div className="flex h-screen bg-gray-950 text-white-100">
            {/* Sidebar */}
            <div className="w-64 p-4 border-r border-gray-800">
                <div className="flex items-center mb-6 ml-3">
                    <GitBranch className="mr-2" />
                    <h1 className="text-2xl font-bold">Amethyst</h1>
                </div>
                <NotespaceList/>
            </div>

            {/* Main content */}
            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold ml-5">Home</h2>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" size="icon">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Plus className="h-4 w-4" />
                        </Button>
                        <Link href={`/${username}`}>
                            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        </Link>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 bg-gray-900 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">Create a new notespace</h3>
                        <p className="text-gray-400 mb-4">Notespace is a space for your notes.</p>
                        <Input className="mb-4 bg-gray-900 border-gray-800
            focus:bg-gray-800 focus:text-white
            " placeholder="Notespace name" />
                        <RadioGroup className="ml-3 space-y-1" defaultValue="private">
                            <div className="flex items-center space-x-1.5 text-gray-400 hover:text-white w-auto">
                                <RadioGroupItem className="peer border-solid border-2 border-white focus:bg-white" value="public" id="public" />
                                <Label htmlFor="public" className="mt-px">Public</Label>
                            </div>
                            <div className="flex items-center space-x-1.5 text-gray-400 hover:text-white w-auto">
                                <RadioGroupItem className="peer border-solid border-2 border-white focus:bg-white" value="private" id="private" />
                                <Label htmlFor="private" className="mt-px">Private</Label>
                            </div>
                        </RadioGroup>
                        <Button className="mt-4 border border-solid border-gray-950 bg-gray-800
            hover:bg-white hover:text-gray-950
            "
            onClick={()=>handleCreate()}
            >Create notespace</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}