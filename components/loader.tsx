import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="size-14 relative animate-spin">
        <Image alt="Logo" className="invert" fill src={"/logo.png"} />
      </div>
      <p className="text-sm text-muted-foreground">Sano AI is thinking...</p>
    </div>
  );
};
