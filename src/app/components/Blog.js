import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="container mx-auto space-y-12">
      <div className="mt-4 flex flex-col items-center justify-center" id="blog">
        <h3 className="text-2xl font-bold mb-4 text-center">Latest Blog Post</h3>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="w-full sm:w-1/2 p-2">
            <article className="bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-xl transition duration-300 h-full flex flex-col">
              <h4 className="text-lg text-center font-semibold mb-2">Hot Dog Hot Dog Hot Digitty Dog</h4>
              <div className="flex-grow">
                <Image
                  src="/images/ttp1.jpg"
                  alt="picture of purple paw with glasses in the middle"
                  width={500}
                  height={500}
                  className="object-cover rounded-t-md"
                />
              </div>
              <p className="text-gray-600">
                Plan steps for world domination find empty spot in cupboard and sleep all day. Destroy house in 5 seconds leave fur on owners clothes and leave fur on owners clothes and hiding behind the couch until lured out by a feathery toy.
              </p>
              <Link href="#" className="mt-4 inline-block text-center bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">continue reading</Link>
            </article>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <article className="bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-xl transition duration-300 h-full flex flex-col">
              <h4 className="text-lg text-center font-semibold mb-2">Hot Dog Hot Dog Hot Digitty Dog</h4>
              <div className="flex-grow">
                <Image
                  src="/images/ttp2.jpg"
                  alt="picture of purple paw with glasses in the middle"
                  width={500}
                  height={500}
                  className="object-cover rounded-t-md"
                />
              </div>
              <p className="text-gray-600">
                Plan steps for world domination find empty spot in cupboard and sleep all day. Destroy house in 5 seconds leave fur on owners clothes and leave fur on owners clothes and hiding behind the couch until lured out by a feathery toy.
              </p>
              <Link href="#" className="mt-4 inline-block text-center bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">continue reading</Link>
            </article>
          </div>
        </div>
        <div className="flex justify-end text-purple-500 mt-4 font-semibold hover:underline">
          <Link href="/blog">
            More Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
