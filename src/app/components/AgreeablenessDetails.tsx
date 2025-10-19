import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const AgreeablenessDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Agreeableness</CardTitle>
          <CardDescription>
            Agreeableness reflects individual differences in concern with
            cooperation and social harmony. Agreeable individuals value getting
            along with others.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="mt-8">
            My high level of Agreeableness indicates a strong interest in
            others&apos; needs and well-being. I am generally pleasant,
            sympathetic, and cooperative.
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
                Trust
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 14 (High)
              </div>
              <p className="mt-3">
                A person with high trust assumes that most people are fair,
                honest, and have good intentions. Persons low in trust see
                others as selfish, devious, and potentially dangerous.
                <br />
                <br />
                <span className="font-semibold underline">
                  I generally believe that people have good intentions.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#2684F2] md:w-1/2 lg:text-xl">
                Morality
              </h3>
              <div className="font-semibold text-gray-500">Score: 11 (Low)</div>
              <p className="mt-3">
                High scorers on this scale see no need for pretense or
                manipulation when dealing with others and are therefore candid,
                frank, and sincere. Low scorers believe that a certain amount of
                deception in social relationships is necessary. People find it
                relatively easy to relate to the straightforward high-scorers on
                this scale. They generally find it more difficult to relate to
                the unstraightforward low-scorers on this scale. It should be
                made clear that low scorers are not unprincipled or immoral;
                they are simply more guarded and less willing to openly reveal
                the whole truth.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am generally honest and sincere but I never truly reveal my
                  true intention carefreely.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F53478] md:w-1/2 lg:text-xl">
                Altruism
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 14 (High)
              </div>
              <p className="mt-3">
                Altruistic people find helping other people genuinely rewarding.
                Consequently, they are generally willing to assist those who are
                in need. Altruistic people find that doing things for others is
                a form of self-fulfillment rather than self-sacrifice. Low
                scorers on this scale do not particularly like helping those in
                need. Requests for help feel like an imposition rather than an
                opportunity for self-fulfillment.
                <br />
                <br />
                <span className="font-semibold underline">
                  I find helping others to be a genuinely rewarding experience.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F7B245] md:w-1/2 lg:text-xl">
                Cooperation
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 12 (Neutral)
              </div>
              <p className="mt-3">
                Individuals who score high on this scale dislike confrontations.
                They are perfectly willing to compromise or to deny their own
                needs in order to get along with others. Those who score low on
                this scale are more likely to intimidate others to get their
                way.
                <br />
                <br />
                <span className="font-semibold underline">
                  I prefer to avoid confrontations and seek compromise but I can
                  intimidate others when necessary.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#3AD179] md:w-1/2 lg:text-xl">
                Modesty
              </h3>
              <div className="font-semibold text-gray-500">Score: 11 (Low)</div>
              <p className="mt-3">
                High scorers on this scale do not like to claim that they are
                better than other people. In some cases this attitude may derive
                from low self-confidence or self-esteem. Nonetheless, some
                people with high self-esteem find immodesty unseemly. Those who
                are willing to describe themselves as superior tend to be seen
                as disagreeably arrogant by other people.
                <br />
                <br />
                <span className="font-semibold underline">
                  I generally doesn&apos;t claim that I am better than other
                  people but I am confident about my abilities.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#E68640] md:w-1/2 lg:text-xl">
                Sympathy
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 12 (Neutral)
              </div>
              <p className="mt-3">
                People who score high on this scale are tenderhearted and
                compassionate. They feel the pain of others vicariously and are
                easily moved to pity. Low scorers are not affected strongly by
                human suffering. They pride themselves on making objective
                judgments based on reason. They are more concerned with truth
                and impartial justice than with mercy.
                <br />
                <br />
                <span className="font-semibold underline">
                  I got two sides of the coin. I can be objective and impartial
                  and I can also be tenderhearted and compassionate when
                  necessary.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
