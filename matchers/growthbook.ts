import { FeatureResult } from 'growthbook';

/**
 * @titleBy start
 */
export interface Props {
  feature: FeatureResult;
}

/**
 * @title Growthbook Feature Matcher
 */
const MatchGrowthbook = ({ feature }: Props) => {
  return feature.on;
};

export default MatchGrowthbook;