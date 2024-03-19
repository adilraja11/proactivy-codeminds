import { Appbar } from "@/components/navigation/appbar";
import { StatusActivity } from "@/components/profile/statusactivity";

export default function Page() {
  return (
    <div>
      <Appbar />
      <div>
        <StatusActivity />
      </div>
    </div>
  );
}
