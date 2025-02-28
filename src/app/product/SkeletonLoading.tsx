import { ScrollArea } from "@/components/ScrollArea";
import { Section } from "@/components/Section";
import { Skeleton } from "@/components/Skeleton";

export const SkeletonLoading = () => (
  <>
    <Section className="p-[20px] sm:h-[94vh]">
      <ScrollArea className="h-[87vh] sm:h-full">
        <div className="sm:flex flex-row justify-between sm:h-[70vh]">
          <Skeleton className="sm:flex flex-row justify-between h-[30vh] w-[100%] sm:h-[69vh] sm:w-[71vw]" />

          <Skeleton className="sm:flex flex-row justify-between mt-[20px] sm:mt-[0px] h-[30vh] w-[100%] sm:h-[69vh] sm:w-[26vw]" />
        </div>

        <div className="sm:flex flex-row justify-between mt-[20px] sm:m-[0px]">
          <Skeleton className="sm:flex flex-row justify-between h-[30vh] w-[100%] sm:h-[30vh] sm:w-[71vw]" />

          <Skeleton className="sm:flex flex-row justify-between mt-[20px] sm:mt-[0px] h-[30vh] w-[100%] sm:h-[30vh] sm:w-[26vw]" />
        </div>
      </ScrollArea>
    </Section>
  </>
);
