import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import MarketLearn from './components/MarketLearn';
import FeaturedInstructors from './components/FeaturedInstructors';
import ReadyToStartLearning from './components/ReadyToStartLearning';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <MarketLearn />
      <FeaturedInstructors />
      <ReadyToStartLearning />
    </>
  );
}

export default Home;
