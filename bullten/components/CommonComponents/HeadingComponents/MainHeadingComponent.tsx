import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  paddingTop?: number; // Accepts padding as a Tailwind class or custom string
  hoverEffect?: string; // Accepts hover effect classes
  alignmentType?: number;
};

const MainHeadingComponent = ({
  children,
  paddingTop,
  hoverEffect = "",
  alignmentType,
}: Props) => {
  return (
    <div>
      <h2
        className={classNames(
          `flex items-center text-[2rem] lg:text-[2.3rem] font-bold leading-[45px]  ${
            paddingTop === 1
              ? "py-1"
              : paddingTop === 2
              ? "py-2"
              : paddingTop === 3
              ? "py-3"
              : "py-4"
          }
           ${
             alignmentType === 1
               ? "justify-start"
               : alignmentType === 2
               ? "justify-center"
               : "justify-end"
           }`,
          hoverEffect
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default MainHeadingComponent;
