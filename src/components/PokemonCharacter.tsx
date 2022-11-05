interface ComponentProps {
  name: string;
  value: string | number;
}

const PokemonCharacter = ({ name, value }: ComponentProps) => (
  <p>
    {name}
    {': '}
    {value}
  </p>
);

export default PokemonCharacter;
