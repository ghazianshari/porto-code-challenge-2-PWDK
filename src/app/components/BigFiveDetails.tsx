import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NeuroticismDetails } from "./NeuroticismDetails";

export const BigFiveDetails = () => {
  return (
    <>
      <Tabs defaultValue="neuroticism" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="neuroticism"
            className="flex items-center space-x-2"
          >
            <span>Neuroticism</span>
          </TabsTrigger>
          <TabsTrigger value="dummy" className="flex items-center space-x-2">
            <span>Neuroticism</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent className="mb-14" value="neuroticism">
          <NeuroticismDetails />
        </TabsContent>
      </Tabs>
    </>
  );
};
