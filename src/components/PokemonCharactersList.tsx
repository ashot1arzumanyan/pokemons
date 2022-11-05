import { PokemonCharacters } from "../typings/pokemon";

import PokemonCharacter from "./PokemonCharacter";

interface ComponentProps {
  label: string;
  characters: PokemonCharacters;
}

const PokemonCharactersList = ({ label, characters }: ComponentProps) => (
  <div>
    <p>{label}</p>
    <ul>
      {Object.keys(characters).map((key) => (
        <li key={key}>
          <PokemonCharacter
            name={key}
            value={characters[key]}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default PokemonCharactersList;
