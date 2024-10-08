import BlogDataLepcso from "@/components/Blog/uj_lepcsoliftekData";
import BlogDataPlatform from "@/components/Blog/platformliftekData";
import BlogItem from "@/components/Blog/termekItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termékeink | Liftech.hu",
  viewport: "width=device-width, initial-scale=1",
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  description: "Ez az oldal felsorolja az összes új liftet, amit kínálunk",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogDataLepcso.map((post, key) => (
              <BlogItem key={key} blog={post}/>
            ))}
            {BlogDataPlatform.map((post, key) => (
              <BlogItem key={key} blog={post}/>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
