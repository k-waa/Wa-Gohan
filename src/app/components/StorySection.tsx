export default function StorySection() {
    return (
        <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 mt-12 bg-primary text-white rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold text-center mb-12">生産者の想いとこだわり</h2>
            <div className="md:flex md:space-x-12 items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img src="https://placehold.co/600x400/FFFFFF/4CAF50?text=生産者と田んぼ" alt="米農家と稲穂" className="rounded-xl shadow-2xl w-full h-auto object-cover" />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-4">「美味しい」と言ってもらうために</h3>
                    <p className="mb-4 text-gray-100 leading-relaxed">
                        当社の米は、標高の高い冷涼な土地で、清らかな雪解け水を使って栽培されています。
                        土壌づくりから収穫まで、化学肥料を極力使わず、自然の力を最大限に活かした農法を3代にわたって守り続けています。
                    </p>
                    <p className="mb-6 text-gray-100 leading-relaxed">
                        一粒一粒に込めた農家の想いを、ぜひご家庭で感じてください。
                    </p>
                    <a href="#" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        ストーリーをもっと読む
                    </a>
                </div>
            </div>
        </section>
    )
}