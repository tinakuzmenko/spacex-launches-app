export const calculateRocketEnergyConsumption = (
  rocketMassKg: number,
): number => {
  const fuelConversionFactor = 1.35 * Math.pow(10, 7);
  const fuelToMassRatio = 15;

  if (rocketMassKg <= 0) {
    return 0;
  }

  const fuelMassKg = rocketMassKg * fuelToMassRatio;
  const totalMassKg = rocketMassKg + fuelMassKg;

  return totalMassKg * fuelConversionFactor;
};
