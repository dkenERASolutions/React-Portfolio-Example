import { Feature } from "@/types/feature";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
      <Card className="group relative h-full overflow-hidden border-slate-800/60 bg-slate-900/40 hover:bg-slate-900/70 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="relative z-10 p-8">
          {/* Icon container */}
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/15 group-hover:border-indigo-500/30 transition-all duration-300">
            <Image src={feature.icon} alt={feature.title} width={28} height={28} className="opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>

          <h3 className="mb-3 text-base font-bold text-white group-hover:text-indigo-100 transition-colors">
            {feature.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
            {feature.description}
          </p>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleFeature;
