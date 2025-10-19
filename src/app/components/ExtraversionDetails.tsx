import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const ExtraversionDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Extraversion</CardTitle>
          <CardDescription>
            Extraversion is marked by pronounced engagement with the external
            world.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="mt-8">
            My score on Extraversion is high, indicating I am sociable,
            outgoing, energetic, and lively. I prefer to be around people much
            of the time.
          </p>
          <div className="relative my-4 h-70 w-full">
            <Image
              src="/personalities/extraversion.png"
              alt="Extraversion Graph"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* The Details */}
          <div className="mt-4 text-justify">
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#A36DDA] md:w-1/2 lg:text-xl">
                Friendliness
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 17 (High)
              </div>
              <p className="mt-3">
                Friendly people genuinely like other people and openly
                demonstrate positive feelings toward others. They make friends
                quickly and it is easy for them to form close, intimate
                relationships. Low scorers on Friendliness are not necessarily
                cold and hostile, but they do not reach out to others and are
                perceived as distant and reserved.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am easy to approach and make friends with.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#2684F2] md:w-1/2 lg:text-xl">
                Gregariousness
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 12 (Neutral)
              </div>
              <p className="mt-3">
                Gregarious people find the company of others pleasantly
                stimulating and rewarding. They enjoy the excitement of crowds.
                Low scorers tend to feel overwhelmed by, and therefore actively
                avoid, large crowds. They do not necessarily dislike being with
                people sometimes, but their need for privacy and time to
                themselves is much greater than for individuals who score high
                on this scale.
                <br />
                <br />
                <span className="font-semibold underline">
                  I feel comfortable both in crowds and alone.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F53478] md:w-1/2 lg:text-xl">
                Assertiveness
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 16 (High)
              </div>
              <p className="mt-3">
                High scorers Assertiveness like to speak out, take charge, and
                direct the activities of others. They tend to be leaders in
                groups. Low scorers tend not to talk much and let others control
                the activities of groups.
                <br />
                <br />
                <span className="font-semibold underline">
                  I do speak out in necessary situations.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F7B245] md:w-1/2 lg:text-xl">
                Activity Level
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 13 (High)
              </div>
              <p className="mt-3">
                Active individuals lead fast-paced, busy lives. They move about
                quickly, energetically, and vigorously, and they are involved in
                many activities. People who score low on this scale follow a
                slower and more leisurely, relaxed pace.
                <br />
                <br />
                <span className="font-semibold underline">
                  I like to keep myself busy and active most of the time.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#3AD179] md:w-1/2 lg:text-xl">
                Excitement-Seeking
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 15 (High)
              </div>
              <p className="mt-3">
                High scorers on this scale are easily bored without high levels
                of stimulation. They love bright lights and hustle and bustle.
                They are likely to take risks and seek thrills. Low scorers are
                overwhelmed by noise and commotion and are adverse to
                thrill-seeking.
                <br />
                <br />
                <span className="font-semibold underline">
                  I enjoy excitement and thrills.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#E68640] md:w-1/2 lg:text-xl">
                Cheerfulness
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 18 (High)
              </div>
              <p className="mt-3">
                This scale measures positive mood and feelings, not negative
                emotions (which are a part of the Neuroticism domain). Persons
                who score high on this scale typically experience a range of
                positive feelings, including happiness, enthusiasm, optimism,
                and joy. Low scorers are not as prone to such energetic, high
                spirits.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am generally in a good mood most of the time.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
