import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="size-8">
      <AvatarImage className="p-1" src={"/bot.png"} />
    </Avatar>
  );
};
