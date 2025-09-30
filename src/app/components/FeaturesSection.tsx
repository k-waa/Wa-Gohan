import FeatureSection from "./FeatureSection";

export default function FeaturesSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <FeatureSection
                  icon={<svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.417a11.955 11.955 0 010 1.963c-.347.886-.788 1.62-1.28 2.22c-1.12.984-2.288 1.48-3.418 1.48H9a4 4 0 01-4-4V7a4 4 0 014-4h6.088c1.13 0 2.298.496 3.418 1.48.492.6.933 1.334 1.28 2.22z"></path></svg>}
                  title="安全・安心な品質" 
                  content="徹底した品質管理のもと、農薬を抑えた栽培方法を採用しています。"
                />

                <FeatureSection
                  icon={<svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.485 0-4 2-4 4s1.515 4 4 4 4-2 4-4-1.515-4-4-4z"></path></svg>}
                  title="産地直送の新鮮さ" 
                  content="ご注文後に精米し、最短でお客様の食卓へお届けします。"
                />

                <FeatureSection
                  icon={<svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8l4 4-4 4M8 12h8"></path></svg>}
                  title="多様な銘柄" 
                  content="コシヒカリから希少な在来種まで、厳選された銘柄が揃います。"
                />
                
            </div>
        </section>
    )
}