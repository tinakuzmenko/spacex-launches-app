import { calculateRocketEnergyConsumption } from './helpers';

describe('calculateRocketEnergyConsumption', () => {
  it('should calculate energy consumption for a rocket launch with valid input', () => {
    expect(calculateRocketEnergyConsumption(1000)).toBe(216e9);
  });

  it('should handle zero rocket mass correctly', () => {
    expect(calculateRocketEnergyConsumption(0)).toBe(0);
  });

  it('should return 0 for negative rocket mass', () => {
    expect(calculateRocketEnergyConsumption(-100)).toBe(0);
  });
});
