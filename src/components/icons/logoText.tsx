import { IconProps } from "@/types/icon";
import { cn } from "@/utils/shadcn";

const LogoText = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width="87"
      height="22"
      viewBox="0 0 87 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <path
        d="M8.17046 8.72349C9.24134 8.71442 10.2891 9.03671 11.1697 9.64621C12.0505 10.2557 12.7212 11.1226 13.09 12.1282L13.1079 12.1837H15.884L15.8642 12.0984C15.057 8.56486 11.9657 6.18932 8.17438 6.18932C3.63557 6.17941 0.218994 9.53649 0.218994 13.9881C0.218994 18.4398 3.63743 21.7968 8.17233 21.7968C11.9637 21.7968 15.0531 19.4174 15.8622 15.8878L15.882 15.8025H13.1079L13.09 15.8481C12.7212 16.8537 12.0505 17.7206 11.1697 18.33C10.2891 18.9395 9.24134 19.2618 8.17046 19.2529C5.18411 19.2529 2.93347 16.9883 2.93347 13.9881C2.93347 10.988 5.17626 8.72349 8.17046 8.72349Z"
        fill="currentColor"
      />
      <path
        d="M25.3665 6.18137C20.8475 6.18137 17.4348 9.53449 17.4348 13.9861C17.4348 18.4378 20.8434 21.7948 25.3665 21.7948C28.896 21.7948 31.8923 19.7861 32.9968 16.6809L33.0304 16.5858H30.1294L30.1135 16.6234C29.0943 18.9138 26.1339 19.796 23.8456 19.1319C22.9723 18.8678 22.1848 18.3769 21.5634 17.709C20.9418 17.0412 20.5087 16.2205 20.308 15.3306L20.2565 15.1005H33.2248V15.0411C33.2526 14.7277 33.2802 14.2697 33.2802 13.9861C33.2883 9.53449 29.8855 6.18137 25.3665 6.18137ZM20.2684 12.725C20.3482 12.3796 20.4617 12.0428 20.6075 11.7197C20.6352 11.7197 20.9188 11.0891 20.9604 11.0217C21.3752 10.3347 21.951 9.75892 22.638 9.34412C25.2158 7.78753 28.8167 8.78494 30.0918 11.5471C30.2317 11.8502 30.3413 12.1664 30.419 12.491L30.4765 12.725H20.2684Z"
        fill="currentColor"
      />
      <path
        d="M24.5277 8.67987L24.3393 8.71555C24.4108 8.70168 24.4642 8.68979 24.5277 8.67987Z"
        fill="currentColor"
      />
      <path
        d="M45.7152 6.5284L41.3211 16.9248L40.7796 18.2335L35.8322 6.5284H32.8422L39.3937 21.4479H42.0944L48.6499 6.5284H45.7152Z"
        fill="currentColor"
      />
      <path
        d="M56.1948 6.17938C51.6599 6.17938 48.2413 9.53646 48.2413 13.9881C48.2413 18.4399 51.6599 21.7969 56.1948 21.7969C60.7297 21.7969 64.1265 18.4399 64.1265 13.9881C64.1265 9.53646 60.712 6.17938 56.1948 6.17938ZM56.1948 19.2527C53.2087 19.2527 50.958 16.9883 50.958 13.9881C50.958 10.988 53.2087 8.72347 56.1948 8.72347C59.1812 8.72347 61.4001 10.9939 61.4001 13.9881C61.4001 16.9823 59.1614 19.2527 56.1948 19.2527Z"
        fill="currentColor"
      />
      <path
        d="M67.527 0.484447C67.2977 0.477184 67.0691 0.516509 66.8555 0.600051C66.6417 0.683593 66.4471 0.809616 66.2834 0.970502C66.1198 1.13139 65.9904 1.32379 65.9032 1.53608C65.816 1.74838 65.7729 1.97615 65.7762 2.20562C65.7914 2.65589 65.9809 3.08264 66.3049 3.39579C66.6288 3.70893 67.0617 3.88397 67.5123 3.88397C67.9628 3.88397 68.3957 3.70893 68.7196 3.39579C69.0434 3.08264 69.233 2.65589 69.2483 2.20562C69.2533 1.97818 69.2124 1.75205 69.1276 1.54092C69.0431 1.32977 68.9165 1.13796 68.7557 0.977093C68.5947 0.816245 68.403 0.689643 68.1918 0.604981C67.9806 0.520299 67.7544 0.479294 67.527 0.484447Z"
        fill="currentColor"
      />
      <path
        d="M68.8421 6.5284H66.2108V21.4479H68.8421V6.5284Z"
        fill="currentColor"
      />
      <path
        d="M84.0807 0.438828V9.1379L83.7436 8.71553C83.1032 7.91753 82.2905 7.27485 81.3664 6.83563C80.4423 6.3964 79.4308 6.17205 78.4077 6.17937C74.1542 6.17937 70.9479 9.53645 70.9479 13.9881C70.9479 18.4398 74.1542 21.7968 78.4077 21.7968C79.486 21.8054 80.5509 21.556 81.5133 21.0693C82.4757 20.5825 83.3078 19.8728 83.9399 18.9989L84.0807 18.7829V21.4478H86.71V0.438828H84.0807ZM78.8715 19.2527C75.8973 19.2527 73.6386 16.9883 73.6386 13.9881C73.6386 10.9879 75.8893 8.72345 78.8715 8.72345C81.8539 8.72345 84.0807 10.9939 84.0807 13.9881C84.0807 16.9823 81.842 19.2527 78.8715 19.2527Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LogoText;
