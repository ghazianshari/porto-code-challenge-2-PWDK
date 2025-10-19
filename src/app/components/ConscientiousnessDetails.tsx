import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const ConscientiousnessDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Conscientiousness</CardTitle>
          <CardDescription>
            Conscientiousness concerns the way in which we control, regulate,
            and direct our impulses.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="mt-8">
            My score on Conscientiousness is high. I set clear goals and pursue
            them with determination. I am reliable and hard-working.
          </p>
          <div className="relative my-4 h-70 w-full">
            <Image
              src="/personalities/agreeableness.png"
              alt="Agreeableness Graph"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* The Details */}
          <div className="mt-4 text-justify">
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#A36DDA] md:w-1/2 lg:text-xl">
                Self-Efficacy
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 16 (High)
              </div>
              <p className="mt-3">
                Self-Efficacy describes confidence in one&apos;s ability to
                accomplish things. High scorers believe they have the
                intelligence (common sense), drive, and self-control necessary
                for achieving success. Low scorers do not feel effective, and
                may have a sense that they are not in control of their lives.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am confident in my ability to accomplish my goals.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#2684F2] md:w-1/2 lg:text-xl">
                Orderliness
              </h3>
              <div className="font-semibold text-gray-500">Score: 7 (Low)</div>
              <p className="mt-3">
                Persons with high scores on orderliness are well-organized. They
                like to live according to routines and schedules. They keep
                lists and make plans. Low scorers tend to be disorganized and
                scattered.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am disorganized and tend to be scattered. Something in my
                  mind tells me that there is clarity in chaos.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F53478] md:w-1/2 lg:text-xl">
                Dutifulness
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 13 (High)
              </div>
              <p className="mt-3">
                This scale reflects the strength of a person&apos;s sense of
                duty and obligation. Those who score high on this scale have a
                strong sense of moral obligation. Low scorers find contracts,
                rules, and regulations overly confining. They are likely to be
                seen as unreliable or even irresponsible.
                <br />
                <br />
                <span className="font-semibold underline">
                  When I belong and respected, I feel a strong sense of duty and
                  obligation. &quot;Trust is something you gain when loyalty is
                  returned&quot;.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F7B245] md:w-1/2 lg:text-xl">
                Achievement-Striving
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 14 (High)
              </div>
              <p className="mt-3">
                Individuals who score high on this scale strive hard to achieve
                excellence. Their drive to be recognized as successful keeps
                them on track toward their lofty goals. They often have a strong
                sense of direction in life, but extremely high scores may be too
                single-minded and obsessed with their work. Low scorers are
                content to get by with a minimal amount of work, and might be
                seen by others as lazy.
                <br />
                <br />
                <span className="font-semibold underline">
                  Determination. Determination. Determination.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#3AD179] md:w-1/2 lg:text-xl">
                Self-Discipline
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 13 (High)
              </div>
              <p className="mt-3">
                Self-discipline-what many people call will-power-refers to the
                ability to persist at difficult or unpleasant tasks until they
                are completed. People who possess high self-discipline are able
                to overcome reluctance to begin tasks and stay on track despite
                distractions. Those with low self-discipline procrastinate and
                show poor follow-through, often failing to complete tasks-even
                tasks they want very much to complete.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am my greatest enemy. I am harder on myself than other
                  people could be.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#E68640] md:w-1/2 lg:text-xl">
                Cautiousness
              </h3>
              <div className="font-semibold text-gray-500">Score: 11 (Low)</div>
              <p className="mt-3">
                Cautiousness describes the disposition to think through
                possibilities before acting. High scorers on the Cautiousness
                scale take their time when making decisions. Low scorers often
                say or do first thing that comes to mind without deliberating
                alternatives and the probable consequences of those
                alternatives.
                <br />
                <br />
                <span className="font-semibold underline">
                  I do not spend much time dabbling and thinking too much to a
                  point of no action taken. Some people say I let my instrusive
                  mind get the better of me.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
