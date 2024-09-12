import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function FixedAvatar() {
  return (
    <div>
      {/* Ваши другие элементы страницы */}
      
      {/* Закрепленный Avatar */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', alignItems: 'center' }}>
        <h1 className='max-w-lg text-xl mr-5 text-glow' >Created with shadecn/ui</h1>
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}