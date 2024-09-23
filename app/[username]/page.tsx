



export default function UserPage({params}: {params: {username: string}}){
    return (
        <h1>{params.username}</h1>
    );
}