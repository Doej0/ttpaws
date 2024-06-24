import Link from "next/link";

const ActionCall = () => {
  return (
    <section className="mt-4 flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
      <div className="container mx-auto space-y-12">
        <p className="text-center italic">We are Great at What we do, but don&apos;t just take our word for it!</p>
        <h4 className="text-2xl text-center font-semibold mb-2">What our Pet Parents say</h4>
        <div className="mt-4 mb-4 flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/4 p-2">
            <article className="bg-purple-100 p-4 rounded-tl-xl rounded-br-xl">
              <h4 className="text-lg text-center font-semibold mb-2">Wonderful Staff!</h4>
              <p className="italic">
                Nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws brown cats with pink ears making sure that fluff gets into the owner&apos;s eyes, so need to chase tail kitty scratches couch bad kitty need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me the door is opening! how exciting oh, it&apos;s you, meh.
              </p>
            </article>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <article className="bg-purple-100 p-4 rounded-tl-xl rounded-br-xl">
              <h4 className="text-lg text-center font-semibold mb-2">Wonderful Staff!</h4>
              <p className="italic">
                Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. Use lap as chair i heard this rumor where the humans are our owners, pfft, what do they know?! so lick sellotape or bite off human&apos;s toes
              </p>
            </article>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <article className="bg-purple-100 p-4 rounded-tl-xl rounded-br-xl">
              <h4 className="text-lg text-center font-semibold mb-2">Wonderful Staff!</h4>
              <p className="italic">
                Waffles i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk yet scratch me there, elevator butt claws in the eye of the beholder but make plans to dominate world and then take a nap but hide from vacuum cleaner or stick butt in face.
              </p>
            </article>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <article className="bg-purple-100 p-4 rounded-tl-xl rounded-br-xl">
              <h4 className="text-lg text-center font-semibold mb-2">Wonderful Staff!</h4>
              <p className="italic">
                You are a captive audience while sitting on the toilet, pet me i do no work yet get food, shelter, and lots of stuff just like man who lives with us or more napping, more napping all the napping is exhausting peer out window, chatter at birds, lure them to mouth chew iPad power cord human give me attention meow.
              </p>
            </article>
            <div class="flex items-center justify-center"> <button className="bg-purple-500 text-white font-bold py-6 px-8 rounded hover:bg-purple-700 mt-2 md:mt-4">
              <Link href="/booknow">Book Now!</Link>
            </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCall;