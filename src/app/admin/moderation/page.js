import ThemeBtn from "@/utilities/ThemeBtn"
import { Settings, Search, Bell } from "lucide-react"

export default function AdminModerationPage() {
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Flagged Games Queue</h1>
          <button className="bg-[#7A59FF] px-4 py-2 rounded border border-[#7A59FF] hover:bg-transparent">
            All Severities
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
            <div>
              <h3 className="text-xl text-white">Space Adventure</h3>
              <p className="text-lg font-bold text-[#D1D5DB]">Player: <span className="text-[#FFB800]">Alex_Gamer</span></p>
              <p className="text-sm text-[#9CA3AF]">
                Reason: Cheating suspected
              </p>
              <p className="text-sm text-[#6B7280]">Reported: 2024-06-25</p>
            </div>
            <div className="flex gap-4">
              <div>
                <ThemeBtn title="Approve" bgColor="bg-[#16A34A]" />
              </div>
              <div>
                <ThemeBtn title="Reject" bgColor="bg-[#DC2626]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
            <div>
              <h3 className="text-xl text-white">Space Adventure</h3>
              <p className="text-lg font-bold text-[#D1D5DB]">Player: <span className="text-[#FFB800]">Alex_Gamer</span></p>
              <p className="text-sm text-[#9CA3AF]">
                Reason: Cheating suspected
              </p>
              <p className="text-sm text-[#6B7280]">Reported: 2024-06-25</p>
            </div>
            <div className="flex gap-4">
              <div>
                <ThemeBtn title="Approve" bgColor="bg-[#16A34A]" />
              </div>
              <div>
                <ThemeBtn title="Reject" bgColor="bg-[#DC2626]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#240b48b6] rounded-2xl border border-[#210C43] p-5">
            <div>
              <h3 className="text-xl text-white">Space Adventure</h3>
              <p className="text-lg font-bold text-[#D1D5DB]">Player: <span className="text-[#FFB800]">Alex_Gamer</span></p>
              <p className="text-sm text-[#9CA3AF]">
                Reason: Cheating suspected
              </p>
              <p className="text-sm text-[#6B7280]">Reported: 2024-06-25</p>
            </div>
            <div className="flex gap-4">
              <div>
                <ThemeBtn title="Approve" bgColor="bg-[#16A34A]" />
              </div>
              <div>
                <ThemeBtn title="Reject" bgColor="bg-[#DC2626]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
