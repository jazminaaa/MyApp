import { PokemonTyeColorPipe } from './pokemon/pokemon-tye-color.pipe';

describe('PokemonTyeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTyeColorPipe();
    expect(pipe).toBeTruthy();
  });
});
