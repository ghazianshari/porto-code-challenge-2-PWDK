import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const OpennessToExperienceDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Openness To Experience</CardTitle>
          <CardDescription>
            Openness to Experience describes a dimension of cognitive style that
            distinguishes imaginative, creative people from down-to-earth,
            conventional people.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="mt-8">
            My score on Openness to Experience is high, indicating that I enjoy
            novelty, variety, and change. I am curious, imaginative, and
            creative.
          </p>
          <div className="relative my-4 h-70 w-full">
            <Image
              src="/personalities/opennesstoexperience.png"
              alt="Openness To Experience Graph"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* The Details */}
          <div className="mt-4 text-justify">
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#A36DDA] md:w-1/2 lg:text-xl">
                Imagination
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 15 (High)
              </div>
              <p className="mt-3">
                To imaginative individuals, the real world is often too plain
                and ordinary. High scorers on this scale use fantasy as a way of
                creating a richer, more interesting world. Low scorers are on
                this scale are more oriented to facts than fantasy.
                <br />
                <br />
                <span className="font-semibold underline">
                  I have a vivid imagination and enjoy fantasizing.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#2684F2] md:w-1/2 lg:text-xl">
                Artistic Interests
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 16 (High)
              </div>
              <p className="mt-3">
                High scorers on this scale love beauty, both in art and in
                nature. They become easily involved and absorbed in artistic and
                natural events. They are not necessarily artistically trained
                nor talented, although many will be. The defining features of
                this scale are interest in, and appreciation of natural and
                artificial beauty. Low scorers lack aesthetic sensitivity and
                interest in the arts.
                <br />
                <br />
                <span className="font-semibold underline">
                  I have a strong appreciation for art and beauty.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F53478] md:w-1/2 lg:text-xl">
                Emotionality
              </h3>
              <div className="font-semibold text-gray-500">Score: 9 (Low)</div>
              <p className="mt-3">
                Persons high on Emotionality have good access to and awareness
                of their own feelings. Low scorers are less aware of their
                feelings and tend not to express their emotions openly.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am less aware of my feelings and hide them from prying eyes.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F7B245] md:w-1/2 lg:text-xl">
                Adventurousness
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 14 (High)
              </div>
              <p className="mt-3">
                High scorers on adventurousness are eager to try new activities,
                travel to foreign lands, and experience different things. They
                find familiarity and routine boring, and will take a new route
                home just because it is different. Low scorers tend to feel
                uncomfortable with change and prefer familiar routines.
                <br />
                <br />
                <span className="font-semibold underline">
                  I enjoy trying new and different activities.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#3AD179] md:w-1/2 lg:text-xl">
                Intellect
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 17 (High)
              </div>
              <p className="mt-3">
                Intellect and artistic interests are the two most important,
                central aspects of openness to experience. High scorers on
                Intellect love to play with ideas. They are open-minded to new
                and unusual ideas, and like to debate intellectual issues. They
                enjoy riddles, puzzles, and brain teasers. Low scorers on
                Intellect prefer dealing with either people or things rather
                than ideas. They regard intellectual exercises as a waste of
                time. Intellect should not be equated with intelligence.
                Intellect is an intellectual style, not an intellectual ability,
                although high scorers on Intellect score slightly higher than
                low-Intellect individuals on standardized intelligence tests.
                <br />
                <br />
                <span className="font-semibold underline">
                  I enjoy playing with ideas and debating intellectual issues.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#E68640] md:w-1/2 lg:text-xl">
                Liberalism
              </h3>
              <div className="font-semibold text-gray-500">
                Score: 12 (Neutral)
              </div>
              <p className="mt-3">
                Psychological liberalism refers to a readiness to challenge
                authority, convention, and traditional values. In its most
                extreme form, psychological liberalism can even represent
                outright hostility toward rules, sympathy for law-breakers, and
                love of ambiguity, chaos, and disorder. Psychological
                conservatives prefer the security and stability brought by
                conformity to tradition. Psychological liberalism and
                conservatism are not identical to political affiliation, but
                certainly incline individuals toward certain political parties.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am open to re-examining my own values and traditions when
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
