import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const NeuroticismDetails = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Neuroticism</CardTitle>
          <CardDescription>
            Neuroticism refers to the tendency to experience negative feelings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="mt-8">
            My score on Neuroticism is low, indicating that I am exceptionally
            calm, composed and unflappable. I do not react with intense
            emotions, even to situations that most people would describe as
            stressful.
          </p>
          <div className="relative my-4 h-70 w-full">
            <Image
              src="/personalities/neuroticism.png"
              alt="Neuroticism Graph"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* The Details */}
          <div className="mt-4 text-justify">
            <div className="mt-5">
              <a href="#Anxiety">
                <h3
                  className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#A36DDA] md:w-1/2 lg:text-xl"
                  id="Anxiety"
                >
                  Anxiety
                </h3>
              </a>
              <div className="font-semibold text-gray-500">Score: 6 (Low)</div>
              <p className="mt-3">
                The &quot;fight-or-flight&quot; system of the brain of anxious
                individuals is too easily and too often engaged. Therefore,
                people who are high in anxiety often feel like something
                dangerous is about to happen . They may be afraid of specific
                situations or be just generally fearful. They feel tense,
                jittery, and nervous. Persons low in Anxiety are generally calm
                and fearless.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am generally calm and fearless.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <a href="#Anger">
                <h3
                  className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#2684F2] md:w-1/2 lg:text-xl"
                  id="Anger"
                >
                  Anger
                </h3>
              </a>
              <div className="font-semibold text-gray-500">Score: 9 (Low)</div>
              <p className="mt-3">
                Persons who score high in Anger feel enraged when things do not
                go their way . They are sensitive about being treated fairly and
                feel resentful and bitter when they feel they are being cheated.
                This scale measures the tendency to feel angry; whether or not
                the person expresses annoyance and hostility depends on the
                individual&apos;s level on Agreeableness. Low scorers do not get
                angry often or easily.
                <br />
                <br />
                <span className="font-semibold underline">
                  I do not get angry often or easlily.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <a href="#Depression">
                <h3
                  className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F53478] md:w-1/2 lg:text-xl"
                  id="Depression"
                >
                  Depression
                </h3>
              </a>
              <div className="font-semibold text-gray-500">Score: 5 (Low)</div>
              <p className="mt-3">
                This scale measures the tendency to feel sad, dejected, and
                discouraged. High scorers lack energy and have difficulty
                initiating activities. Low scorers tend to be free from these
                depressive feelings.
                <br />
                <br />
                <span className="font-semibold underline">
                  I am free of depressive feelings.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <a href="#Self-Consciousness">
                <h3
                  className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#F7B245] md:w-1/2 lg:text-xl"
                  id="Self-Consciousness"
                >
                  Self-Consciousness
                </h3>
              </a>
              <div className="font-semibold text-gray-500">Score: 8 (Low)</div>
              <p className="mt-3">
                Self-conscious individuals are sensitive about what others think
                of them. Their concern about rejection and ridicule cause them
                to feel shy and uncomfortable around others. They are easily
                embarrassed and often feel ashamed. Their fears that others will
                criticize or make fun of them are exaggerated and unrealistic,
                but their awkwardness and discomfort may make these fears a
                self-fulfilling prophecy. Low scorers, in contrast, do not
                suffer from the mistaken impression that everyone is watching
                and judging them. They do not feel nervous in social situations.
                <br />
                <br />
                <span className="font-semibold underline">
                  I do not feel nervous in social situations.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <a href="#Immoderation">
                <h3
                  className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#3AD179] md:w-1/2 lg:text-xl"
                  id="Immoderation"
                >
                  Immoderation
                </h3>
              </a>
              <div className="font-semibold text-gray-500">
                Score: 14 (High)
              </div>
              <p className="mt-3">
                Immoderate individuals feel strong cravings and urges that they
                have have difficulty resisting. They tend to be oriented toward
                short-term pleasures and rewards rather than long- term
                consequences. Low scorers do not experience strong, irresistible
                cravings and consequently do not find themselves tempted to
                overindulge.
                <br />
                <br />
                <span className="font-semibold underline">
                  It&apos;s kinda hard for me to resist my strong cravings.
                </span>
              </p>
            </div>
            <div className="mt-5">
              <a href="#Vulnerability">
                <h3
                  className="text-default-500 my-2 block w-full max-w-full text-lg font-extrabold text-[#E68640] md:w-1/2 lg:text-xl"
                  id="Vulnerability"
                >
                  Vulnerability
                </h3>
              </a>
              <div className="font-semibold text-gray-500">Score: 6 (Low)</div>
              <p className="mt-3">
                High scorers on Vulnerability experience panic, confusion, and
                helplessness when under pressure or stress. Low scorers feel
                more poised, confident, and clear-thinking when stressed.
                <br />
                <br />
                <span className="font-semibold underline">
                  I bent under stress environment. I do not break.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
