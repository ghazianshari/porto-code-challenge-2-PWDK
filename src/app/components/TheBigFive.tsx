export function BigFiveResults() {
  const results = [
    {
      trait: "Neuroticism",
      score: 48,
      color: "rgb(147, 83, 211)",
      description: "Tendency to experience negative feelings",
    },
    {
      trait: "Extraversion",
      score: 91,
      color: "rgb(0, 111, 238)",
      description:
        "Tendency to seek stimulation and enjoy interactions with others",
    },
    {
      trait: "Openness To Experience",
      score: 83,
      color: "rgb(243, 18, 96)",
      description:
        "Appreciation for art, emotion, adventure, and unusual ideas",
    },
    {
      trait: "Agreeableness",
      score: 74,
      color: "rgb(245, 165, 36)",
      description: "Tendency to be compassionate and cooperative",
    },
    {
      trait: "Conscientiousness",
      score: 74,
      color: "rgb(23, 201, 100)",
      description: "Tendency to show self-discipline and aim for achievement",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-8 text-3xl font-bold">
        My Big Five Personality Results
      </h1>

      <div className="space-y-8">
        {results.map((result) => (
          <div key={result.trait} className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{result.trait}</h2>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
              <span className="font-bold">{result.score}%</span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${result.score}%`,
                  backgroundColor: result.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* BIG FIVE CHARTS AND DESCRIPTION */}

      <div className="mt-12 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold">About The Big Five</h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          The Big Five personality traits, also known as the five-factor model
          (FFM), is a widely recognized taxonomy for personality traits. These
          traits are used to describe human personality and represent the basic
          dimensions of personality found across cultures.
        </p>
      </div>
    </div>
  );
}
