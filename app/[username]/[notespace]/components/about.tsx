import { Star, Info } from "lucide-react";


export default function AboutSection(){
    const state = "Public";

    return (
        <div>
            <div className="flex items-center">
              <h2 className="text-lg font-semibold mr-2">About</h2>
            <span className={`rounded-full  ${(state == "Public") ? "bg-green-700" : "bg-red-700"} px-2 py-1 text-xs`}>{state}</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 mt-2">
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

            </div>
          </div>
    )
}