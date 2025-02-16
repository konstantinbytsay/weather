import { faker } from "@faker-js/faker";

export const generateFakeCities = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.location.city(),
    country: faker.location.country(),
    population: faker.number.int({ min: 100000, max: 10000000 }),
  }));
};
