export type Single = string;

export type Pair = [string, string];

export const STATES_CAPITALS: Pair[] = [
  ["Alabama", "Montgomery"],
  ["Alaska", "Juneau"],
  ["Arizona", "Phoenix"],
  ["Arkansas", "Little Rock"],
  ["California", "Sacramento"],
  ["Colorado", "Denver"],
  ["Connecticut", "Hartford"],
  ["Delaware", "Dover"],
  ["Florida", "Tallahassee"],
  ["Georgia", "Atlanta"],
  ["Hawaii", "Honolulu"],
  ["Idaho", "Boise"],
  ["Illinois", "Springfield"],
  ["Indiana", "Indianapolis"],
  ["Iowa", "Des Moines"],
  ["Kansas", "Topeka"],
  ["Kentucky", "Fankfort"],
  ["Louisiana", "Baton Rouge"],
  ["Maine", "Augusta"],
  ["Maryland", "Annapolis"],
  ["Massachusetts", "Boston"],
  ["Michigan", "Lansing"],
  ["Minnesota", "Saint Paul"],
  ["Mississippi", "Jackson"],
  ["Missouri", "Jefferson City"],
  ["Montana", "Helena"],
  ["Nebraska", "Lincoln"],
  ["Nevada", "Carson City"],
  ["New Hampshire", "Concord"],
  ["New Jersey", "Trenton"],
  ["New Mexico", "Santa Fe"],
  ["New York", "Albany"],
  ["North Carolina", "Raleigh"],
  ["North Dakota", "Bismark"],
  ["Ohio", "Columbus"],
  ["Oklahoma", "Oklahoma City"],
  ["Oregon", "Salem"],
  ["Pennsylvania", "Harrisburg"],
  ["Rhode Island", "Providence"],
  ["South Carolina", "Columbia"],
  ["South Dakota", "Pierre"],
  ["Tennessee", "Nashville"],
  ["Texas", "Austin"],
  ["Utah", "Salt Lake City"],
  ["Vermont", "Montpelier"],
  ["Virginia", "Richmond"],
  ["Washington", "Olympia"],
  ["West Virginia", "Chaleston"],
  ["Wisconsin", "Madison"],
  ["Wyoming", "Cheyenne"],
];
export const STATES: Single[] = STATES_CAPITALS.map(
  ([state, _capital]) => state
);
export const CAPITALS: Single[] = STATES_CAPITALS.map(
  ([_state, capital]) => capital
);

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class PairUtil {
  public static reversed([a, b]: Pair): Pair {
    return [b, a];
  }

  constructor() {}
}

export class CollectionUtil {
  public static randomized<T>(collection: T[]): T[] {
    const result: T[] = [];
    const pool = collection.slice();
    while (pool.length > 0) {
      const index = getRandomInt(0, pool.length - 1);
      result.push(pool[index]);
      pool.splice(index, 1);
    }
    return result;
  }

  public static chunk<T>(collection: T[], chunkSize: number): T[][] {
    if (chunkSize < 1) {
      return [];
    }
    chunkSize = Math.floor(chunkSize);
    return collection.reduce((accum, item, index) => {
      const chunk = index % chunkSize === 0 ? [] : accum[accum.length];
      chunk.push(item);
      return accum;
    }, []);
  }

  private constructor() {}
}
