import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';

const HeroList = ({ publisher }) => {
  const heros = getHeroByPublisher(publisher);
  return (
    <>
      <ul>
        {heros.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  );
};

export default HeroList;
