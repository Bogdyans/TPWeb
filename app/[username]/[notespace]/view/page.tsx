'use client'

import React, { useState } from 'react'
import { Folder, File, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type FileType = {
  id: string
  name: string
  type: 'file' | 'folder'
}

const mockFiles: FileType[] = [
  { id: '1', name: 'Documents', type: 'folder' },
  { id: '2', name: 'Images', type: 'folder' },
  { id: '3', name: 'report.pdf', type: 'file' },
  { id: '4', name: 'presentation.pptx', type: 'file' },
  { id: '5', name: 'budget.xlsx', type: 'file' },
]

type ViewState = 'welcome' | 'file' | 'settings'

export default function Component() {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null)
  const [viewState, setViewState] = useState<ViewState>('welcome')

  const handleFileClick = (file: FileType) => {
    setSelectedFile(file)
    setViewState('file')
  }

  const renderRightContent = () => {
    switch (viewState) {
      case 'welcome':
        return (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-semibold">Welcome to File Explorer</h2>
          </div>
        )
      case 'file':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">{selectedFile?.name}</h2>
            <p>File content would be displayed here.</p>
          </div>
        )
      case 'settings':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <p>Application settings would be displayed here.</p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white-100">
      {/* Left Sidebar */}
      <div className="w-64 border-r bg-muted">
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">File Catalog</h1>
          
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-muted border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {viewState === 'welcome' ? 'Home' : viewState === 'file' ? selectedFile?.name : 'Settings'}
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setViewState('settings')}>
            <Settings />
          </Button>
        </header>
        <main className="flex-1 overflow-auto">
          {renderRightContent()}
        </main>
      </div>
    </div>
  )
}