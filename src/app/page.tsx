import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductsSection from "./components/ProductsSection";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="text-gray-800">
      <Header/>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto">

          {/* ヒーローセクション (自然と恵みを表現) */}
          <HeroSection/>
          {/* 特徴セクション (緑のアイコンで清潔感を強調) */}
          <FeaturesSection/>

          {/* 商品一覧セクション */}
          <ProductsSection/>

          {/* 生産者の想い・ストーリーセクション (背景を緑にして強調) */}
          <StorySection/>

      </main>

      {/* フッター */}
      <Footer/>
  </div>
  );
}
