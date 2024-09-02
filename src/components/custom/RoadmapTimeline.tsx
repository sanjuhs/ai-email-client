// components/RoadmapTimeline.tsx
import { CheckCircle, Circle, Clock } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
}

export function RoadmapTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-8 flex justify-between items-center w-full right-timeline"
        >
          <div className="order-1 w-5/12"></div>
          {/* <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"> */}
          <div className="z-20 flex items-center justify-center order-1 bg-slate-300 shadow-xl w-8 h-8 rounded-full">
            {item.status === "completed" && (
              <CheckCircle className="w-4 h-4 text-green-500" />
            )}
            {item.status === "in-progress" && (
              <Clock className="w-4 h-4 text-yellow-500" />
            )}
            {item.status === "planned" && (
              <Circle className="w-4 h-4 text-gray-500" />
            )}
          </div>
          <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              {item.title}
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-600">
              {item.description}
            </p>
            <p className="text-sm text-gray-500 mt-2">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
