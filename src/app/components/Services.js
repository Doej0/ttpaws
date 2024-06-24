
const Services = () => {
  return (
    <section className="mt-4 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold mb-4">Our Services</h3>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center">
        {/* Article 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <article className="bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-xl transition duration-300">
            <h4 className="text-lg text-center font-semibold mb-2">Pet Boarding</h4>
            <p className="text-gray-600">
              Present belly, scratch hand when stroked this human feeds me, i should be a god yet be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day or meow to be let out meow in empty rooms thug cat ..
            </p>
            <a href="#" className="mt-4 inline-block bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">Learn More</a>
          </article>
        </div>

        {/* Article 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <article className="bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-xl transition duration-300">
            <h4 className="text-lg text-center font-semibold mb-2">DayCare</h4>
            <p className="text-gray-600">
              I like big cats and i can not lie all of a sudden cat goes crazy, and sleep over your phone and make cute snoring noises yet claws in the eye of the beholder mess up all the toilet paper so touch my tail, i shred your hand purrrr.
            </p>
            <a href="#" className="mt-4 inline-block bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">Learn More</a>
          </article>
        </div>

        {/* Article 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <article className="bg-white p-4 shadow-md rounded-md cursor-pointer hover:shadow-xl transition duration-300">
            <h4 className="text-lg text-center font-semibold mb-2">Obedience Training</h4>
            <p className="text-gray-600">
              Plan steps for world domination find empty spot in cupboard and sleep all day. Destroy house in 5 seconds leave fur on owners clothes and leave fur on owners clothes and hiding behind the couch until lured out by a feathery toy.
            </p>
            <a href="#" className="mt-4 inline-block bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">Learn More</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;