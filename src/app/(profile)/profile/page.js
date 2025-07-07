// app/profile/page.js
export default function ProfilePage() {
  const recent = [
    { label: "Defeated Cosmic Dragon", time: "2 hours ago", icon: "🔥" },
    { label: "Reached Diamond Rank", time: "1 day ago", icon: "💎" },
    { label: "Completed Weekly Challenges", time: "3 days ago", icon: "✅" },
  ];

  return (
    <div className="space-y-6 mt-20 text-[white]">
      {/* Profile Panel */}
      <div className="bg-[#1F1339] rounded-xl p-6 shadow-lg ">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-purple-600"></div>
          <div>
            <h2 className="text-xl font-bold">CyberNinja</h2>
            <p className="text-sm text-purple-300">Galactic Explorer • Online</p>
            <p className="text-xs text-gray-400">7,500 / 10,000 XP to next level</p>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <button className="bg-purple-700 px-4 py-2 rounded-md text-sm">Edit Profile</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md text-sm">Share Profile</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md text-sm">Add Friend</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md text-sm">Message</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#2C2153] p-4 rounded-md text-center">Quick Match</div>
          <div className="bg-[#2C2153] p-4 rounded-md text-center">Join Guild</div>
          <div className="bg-[#2C2153] p-4 rounded-md text-center">Shop</div>
          <div className="bg-[#2C2153] p-4 rounded-md text-center">Tournaments</div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-[#1F1339] rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Profile · Recent Activity</h3>
        <ul className="space-y-3 text-sm">
          {recent.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
