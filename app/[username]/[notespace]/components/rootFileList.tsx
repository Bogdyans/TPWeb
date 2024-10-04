import { Input } from "@/components/ui/input";

export default function RootFileList(){
    return  (
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
    )
}