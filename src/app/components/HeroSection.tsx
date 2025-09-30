export default function HeroSection() {
    return (
        <section className="relative h-[50vh] flex items-center justify-center bg-gray-200 mb-12 rounded-xl shadow-lg overflow-hidden">
            <img src="https://placehold.co/1200x500/A3E4D7/333?text=自然の恵みと新米" alt="広がる田んぼと収穫された米" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="relative z-10 text-center p-8 bg-white/70 rounded-lg backdrop-blur-sm shadow-2xl">
                <h1 className="text-5xl font-extrabold text-primary mb-4 leading-tight">
                    大地の恵み、食卓へ。
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    今年も採れたての新米を、産地直送でお届けします。
                </p>
                <a href="#products" className="inline-block bg-primary text-white text-lg font-bold py-3 px-8 rounded-full shadow-xl hover:bg-primary-dark transition duration-300 transform hover:scale-105">
                    今すぐ新米をチェック
                </a>
            </div>
        </section>
    )
}