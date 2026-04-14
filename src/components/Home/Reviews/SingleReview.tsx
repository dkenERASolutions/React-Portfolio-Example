import { Review } from "@/types/review";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";

const StarRating = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="size-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const SingleReview = ({ review }: { review: Review }) => {
  return (
    <Card className="group relative border-slate-800/60 bg-slate-900/40 hover:bg-slate-900/70 hover:border-indigo-500/25 transition-all duration-300">
      <CardContent className="p-7">
        {/* Quote icon */}
        <Quote className="size-8 text-indigo-500/30 mb-4" />

        {/* Stars */}
        <StarRating />

        {/* Review text */}
        <p className="mb-6 text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
          &ldquo;{review.description}&rdquo;
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/60 to-transparent mb-5" />

        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-indigo-500/20">
            <Image
              src={review.userImage}
              alt={review.userName}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{review.userName}</h3>
            <p className="text-xs text-slate-500 font-medium capitalize">
              {review.userDesignation}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleReview;
