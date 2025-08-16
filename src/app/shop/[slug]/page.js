"use client"

import { useState } from "react"
import { ShoppingCart, User } from "lucide-react"

export default function MarketplaceItem({ params }) {
  const { slug } = params
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const handleAction = (action) => {
    setModalMessage(`Item has been added to the ${action}.`)
    setShowModal(true)
  }

  const product = {
    name: "adidas Cute Yeti",
    creator: "By adidas",
    price: 175,
    details: [
      { label: "Tradable", value: "No" },
      { label: "Type", value: "Bundle" },
      { label: "Created", value: "Dec 04, 2024" },
      {
        label: "Description",
        value:
          "https://www.bigtime.com/games/15843961264/adidas-Outfit-Creator",
      },
    ],
    includedItems: [
      {
        name: "adidas Cute Yeti - Torso",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Torso",
      },
      {
        name: "adidas Cute Yeti - Right Arm",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Right+Arm",
      },
      {
        name: "adidas Cute Yeti - Left Arm",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Left+Arm",
      },
      {
        name: "adidas Cute Yeti - Dynamic Head",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Dynamic+Head",
      },
      {
        name: "Default Mood - Mood Animation",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Mood+Animation",
      },
      {
        name: "adidas Cute Yeti - Right Leg",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Right+Leg",
      },
      {
        name: "adidas Cute Yeti - Left Leg",
        image: "https://placehold.co/100x100/A020F0/ffffff?text=Left+Leg",
      },
    ],
  }

  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-100 p-4">
        <div className="bg-[#1e1e2d] w-full max-w-7xl rounded-2xl p-6 shadow-lg border border-[#3a3a4c]">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center w-full">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-400">{product.creator}</p>
            </div>
            <button className="flex items-center justify-center p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <ShoppingCart className="text-white" size={24} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Product Image and Included Items */}
            <div className="flex flex-col items-center justify-between bg-[#2a2a3e] rounded-xl p-4">
              {/* Main Image/Model placeholder */}
              <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center mb-6">
                <span className="text-6xl font-bold">Yeti</span>
                <div className="absolute top-4 left-4 bg-white text-black p-2 rounded-full font-bold">
                  W
                </div>
                <div className="absolute bottom-4 left-4 p-2 rounded-full bg-gray-700">
                  <User className="text-white" size={24} />
                </div>
              </div>

              {/* Included Items Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Included Items</h3>
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {product.includedItems.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-32 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md mb-2 border border-[#4a4a5c]"
                      />
                      <p className="text-xs text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Details and Action Buttons */}
            <div className="flex flex-col justify-between bg-[#2a2a3e] rounded-xl p-6">
              <div className="space-y-6">
                {/* Price */}
                <div className="flex items-center text-xl font-bold text-white">
                  <span className="text-gray-400 mr-2">Price</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 mr-2 text-xs">
                    🌐
                  </span>
                  <span>{product.price}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => handleAction("cart")}
                    className="w-full text-white font-bold py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-colors shadow-lg"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => handleAction("cart")}
                    className="w-full text-white font-bold py-3 px-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 hover:from-gray-800 hover:to-gray-950 transition-colors"
                  >
                    Add to cart
                  </button>
                </div>

                {/* Details Table */}
                <div className="space-y-3">
                  {product.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-gray-300"
                    >
                      <span className="font-semibold">{detail.label}</span>
                      <span className="text-right">
                        {detail.label === "Description" ? (
                          <a
                            href={detail.value}
                            className="text-purple-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Link
                          </a>
                        ) : (
                          detail.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Modal for alerts */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-[#2a2a3e] p-6 rounded-lg text-white text-center">
              <p>{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
