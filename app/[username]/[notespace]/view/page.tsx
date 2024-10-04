import { File } from "@/types/file"

export default function ViewFiles({ params }){
    return (
        <div>
            <h1>{params.username} / {params.notespace}</h1>
        </div>
    )
}