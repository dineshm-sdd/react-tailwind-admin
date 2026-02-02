import { useState } from "react";
import { CheckCircle } from "lucide-react";

const cards = [
    {
        id: 1,
        title: "Starter Plan",
        description: "Perfect for individuals starting out",
        price: "$9 / month",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
        features: ["Basic analytics", "Email support", "1 GB storage"],
    },
    {
        id: 2,
        title: "Pro Plan",
        description: "For professionals and small teams",
        price: "$29 / month",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        features: ["Advanced analytics", "Priority support", "10 GB storage"],
    },
    {
        id: 3,
        title: "Enterprise",
        description: "Best for large organizations",
        price: "$99 / month",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        features: ["Custom analytics", "Dedicated manager", "Unlimited storage"],
    },
];

export default function Cards() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleChoose = (card) => {
        setSelectedPlan(card.id);
        alert(`You selected the ${card.title}`);
    };

    return (
        <div className="min-h-screen py-12 px-4 bg-slate-50">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    Our Pricing Plans
                </h1>
                <p className="text-gray-600">
                    Choose a plan that fits your needs
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => {
                    const isSelected = selectedPlan === card.id;

                    return (
                        <div
                            key={card.id}
                            className={`bg-white rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border-2 ${isSelected ? "border-indigo-600" : "border-transparent"
                                }`}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-48 w-full object-cover"
                                loading="lazy"
                            />

                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {card.description}
                                </p>

                                <ul className="mb-6 space-y-2">
                                    {card.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <CheckCircle className="text-green-500 w-5 h-5" />
                                            <span className="text-gray-700 text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-indigo-600">
                                        {card.price}
                                    </span>

                                    <button
                                        onClick={() => handleChoose(card)}
                                        className={`px-4 py-2 rounded-lg text-white font-medium cursor-pointer transition duration-300 shadow-lg ${isSelected
                                            ? "bg-green-600"
                                            : "bg-indigo-600 hover:bg-indigo-700"
                                            }`}
                                    >
                                        {isSelected ? "Selected" : "Choose"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
