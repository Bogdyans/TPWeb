export default function Notespace({params} : {params : {username: string, name: string}}){
    return (
        <h1>{params.name}</h1>
    );
}