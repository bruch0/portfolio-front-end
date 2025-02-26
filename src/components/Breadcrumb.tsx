import { Dropdown } from "./Dropdown";
import {
  BaseBreadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbArgs {
  options: { label: string; path: string }[];
}

export const Breadcrumb = ({ options }: BreadcrumbArgs) => {
  const shouldHideSomeOptions = options.length > 4;
  const hiddenOptions = shouldHideSomeOptions
    ? options.slice(1, options.length - 2)
    : [];

  return (
    <BaseBreadcrumb>
      <BreadcrumbList>
        {options.length > 1 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={options[0].path}>
                {options[0].label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {shouldHideSomeOptions && (
          <>
            <BreadcrumbItem>
              <Dropdown
                customTrigger={
                  <BreadcrumbEllipsis className="h-4 w-4 cursor-pointer" />
                }
                options={hiddenOptions.map((option) => option.label)}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {options.length > 2 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={options[options.length - 2].path}>
                {options[options.length - 2].label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{options[options.length - 1].label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BaseBreadcrumb>
  );
};
