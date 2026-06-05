import { Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type BookAppointmentButtonProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
};

export function BookAppointmentButton({
  className,
  label = "Book Appointment",
  onClick,
}: BookAppointmentButtonProps) {
  return (
    <a
      href={siteConfig.phoneTel}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg whitespace-nowrap",
        className
      )}
      style={{ background: "linear-gradient(135deg, #c9973e 0%, #9a6f0a 100%)" }}
    >
      <Calendar className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}
