import { Badge } from "@/components/ui/badge";

type propsType = {
  subTitle?: string;
  title: string;
  paragraph: string;
  center?: boolean;
};

const SectionTitle = ({
  subTitle,
  title,
  paragraph,
}: propsType) => {
  return (
    <div className="relative z-10 mb-16 text-center">
      {subTitle && (
        <div className="mb-5 flex justify-center">
          <Badge variant="default" className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
            {subTitle}
          </Badge>
        </div>
      )}
      <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-4xl xl:text-5xl leading-tight tracking-tight">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-slate-400 leading-relaxed text-base font-medium">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
