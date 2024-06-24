import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="mt-4 py-20 bg-gray-200" id="about">
      <h3 className="text-2xl font-bold mb-4 text-center">About Us</h3>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h4 className="text-lg text-center font-semibold mb-2">Our Mission</h4>
            <p>
              The Teacher&apos;s Paws Doggo ipsum doing me a frighten fat boi you are
              doing me the shock big ol porgo, wow such tempt super chub heckin
              good boys and girls. Thicc shoober stop it fren bork adorable
              doggo, big ol boofers yapper super chub, fat boi lotsa pats vvv.
              Very good spot such treat you are doing me a frighten very hand
              that feed shibe he made many woofs, blop you are doin me a concern
              porgo. Long woofer very jealous pupper shooberino, thicc.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <span><Image 
              src="/images/ttpmission.jpg"
              alt=""
              width={350}
              height={300}
              /></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 p-4">
            <h4 className="text-lg text-center font-semibold mb-2">A Teacher Who Loves Paws</h4>
            <p>
              Very good spot I am bekom fat heck shoober you are doin me a
              concern you are doing me the shock long water shoob, big ol such
              treat long woofer shoob noodle horse, floofs maximum borkdrive
              borking doggo clouds doggo. Snoot you are doin me a concern pats
              sub woofer pats shibe ruff, blep shoober snoot doing me a
              frighten. Boof porgo waggy wags heckin angery woofer, fluffer.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className=" flex items-center justify-center">
              <span>
                <Image
                  src="/images/MrsB.jpg"
                  alt=""
                  width={300}
                  height={300}
                />
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-end text-purple-500 font-semibold hover:underline">
          <Link href="/meetourteam">
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
