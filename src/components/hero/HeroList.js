import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
  const heros = getHeroByPublisher(publisher);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heros.map((hero) => (
        <HeroCard {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
