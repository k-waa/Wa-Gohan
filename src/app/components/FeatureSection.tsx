import { JSX } from "react";

type FeatureSectionProps = {
    title: string;
    content: string;
    icon: JSX.Element
}

export default function FeatureSection(props: FeatureSectionProps) {
    const { title, content, icon } = props
    return (
        <div className="p-6 bg-white rounded-xl shadow-xl border-t-4 border-primary transition duration-300 hover:shadow-2xl">
            {icon}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    )
}