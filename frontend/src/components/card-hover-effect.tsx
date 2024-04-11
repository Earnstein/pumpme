import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useGetJobs } from "@/hooks/useGetJobs";
import { JobBody } from "@/constants/types";
import JobLoader from "@/components/JobLoader";

export const HoverEffect = () => {
  const { data, isPending } = useGetJobs();
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4")}>
      {isPending ? (
        <JobLoader />
      ) : (
        <>
          {data?.data.map((data: JobBody, idx: number) => (
            <div
              key={`${data?.position}-${idx}`}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full dark:bg-teal-500/[0.8] block rounded-sm"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{data.company}</CardTitle>
                <CardDescription>{data.position}</CardDescription>
              </Card>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-sm h-full w-full p-4 overflow-hidden bg-white/60 dark:bg-black border border-teal-500 dark:border-white/[0.2] group-hover:border-teal-700 relative z-20 shadow-md cursor-pointer",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-black dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-muted-foreground tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
