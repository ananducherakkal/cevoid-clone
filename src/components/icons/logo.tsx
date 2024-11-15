import { IconProps } from "@/types/icon";
import { cn } from "@/utils/shadcn";

const Logo = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <path
        d="M23.23 8.24482V23.7315H15.4866V15.9881H7.7433V8.24482H23.23V0.501526H7.7433L0 8.24482V23.7315H7.7433V31.4748H23.23L30.9732 23.7315V8.24482H23.23Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
