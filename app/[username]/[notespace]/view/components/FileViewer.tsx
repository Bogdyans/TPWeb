import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import { Folder, File, Settings } from 'lucide-react'
import { FileV } from "@/types/file";
import { getRootFiles } from "@/api/files";
import { useAlerts } from "@/components/alert/Alert";

export default function FileViewer({ notespace }: { notespace: string }){
    const [ files, setFiles] = useState<FileV[]>([]);
    const { addAlert } = useAlerts();

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const fetchedFiles = await getRootFiles(notespace);
                setFiles(fetchedFiles);
            } catch (err) {
                addAlert("Error fetching files.", "error")
                console.log(err)
            }
        }
        fetchFiles();
    },[addAlert]);

    const handleFileClick()= async (file: FileV) =>{
        try {
            await getRootFiles(notespace);
        } catch {

        }
    }

    return(
        <ScrollArea className="h-[calc(100vh-8rem)]">
            <ul>
              {files.map((file) => (
                <li key={file.id} className="mb-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={(file) => handleFileClick(file)}
                  >
                    {file.type === 'folder' ? <Folder className="mr-2" /> : <File className="mr-2" />}
                    {file.name}
                  </Button>
                </li>
              ))}
            </ul>
          </ScrollArea>
    );
}