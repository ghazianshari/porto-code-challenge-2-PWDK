import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NeuroticismDetails } from "./NeuroticismDetails";
import { ExtraversionDetails } from "./ExtraversionDetails";
import { OpennessToExperienceDetails } from "./OpennessToExperienceDetails";
import { AgreeablenessDetails } from "./AgreeablenessDetails";
import { ConscientiousnessDetails } from "./ConscientiousnessDetails";

export const BigFiveDetails = () => {
  return (
    <>
      <Tabs defaultValue="neuroticism" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger
            value="neuroticism"
            className="flex items-center space-x-2"
          >
            <span>Neuroticism</span>
          </TabsTrigger>
          <TabsTrigger
            value="extraversion"
            className="flex items-center space-x-2"
          >
            <span>Extraversion</span>
          </TabsTrigger>
          <TabsTrigger
            value="opennesstoexperience"
            className="flex items-center space-x-2"
          >
            <span>Openness To Experience</span>
          </TabsTrigger>
          <TabsTrigger
            value="agreeableness"
            className="flex items-center space-x-2"
          >
            <span>Agreeableness</span>
          </TabsTrigger>
          <TabsTrigger
            value="conscientiousness"
            className="flex items-center space-x-2"
          >
            <span>Conscientiousness</span>
          </TabsTrigger>
        </TabsList>

        {/* Neuroticism */}
        <TabsContent className="mb-14" value="neuroticism">
          <NeuroticismDetails />
        </TabsContent>

        {/* Extraversion */}
        <TabsContent className="mb-14" value="extraversion">
          <ExtraversionDetails />
        </TabsContent>

        {/* Openness To Experience */}
        <TabsContent className="mb-14" value="opennesstoexperience">
          <OpennessToExperienceDetails />
        </TabsContent>

        {/* Agreeableness */}
        <TabsContent className="mb-14" value="agreeableness">
          <AgreeablenessDetails />
        </TabsContent>

        {/* Counscientiousness */}
        <TabsContent className="mb-14" value="conscientiousness">
          <ConscientiousnessDetails />
        </TabsContent>

        <TabsList className="-mt-8 mb-5 grid w-full grid-cols-5">
          <TabsTrigger
            value="neuroticism"
            className="flex items-center space-x-2"
          >
            <span>Neuroticism</span>
          </TabsTrigger>
          <TabsTrigger
            value="extraversion"
            className="flex items-center space-x-2"
          >
            <span>Extraversion</span>
          </TabsTrigger>
          <TabsTrigger
            value="opennesstoexperience"
            className="flex items-center space-x-2"
          >
            <span>Openness To Experience</span>
          </TabsTrigger>
          <TabsTrigger
            value="agreeableness"
            className="flex items-center space-x-2"
          >
            <span>Agreeableness</span>
          </TabsTrigger>
          <TabsTrigger
            value="conscientiousness"
            className="flex items-center space-x-2"
          >
            <span>Conscientiousness</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};
