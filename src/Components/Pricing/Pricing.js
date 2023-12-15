import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.element';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>What we do</PricingHeading>
          <PricingContainer>
            <PricingCard to='/contact'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
               {/*<PricingCardPlan>Starter Pack</PricingCardPlan>*/} 
               <PricingCardPlan>Direct sales</PricingCardPlan>
               <PricingCardCost>$(Customize)</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>ROI is certain</PricingCardFeature>
                 
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contact'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Brand Awareness</PricingCardPlan>
                <PricingCardCost>$(Customize)</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>ROI is certain</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contact'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Brand Jingle </PricingCardPlan>
                <PricingCardCost>$(Customize)</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature>ROI is certain</PricingCardFeature> 
                  <PricingCardFeature></PricingCardFeature>
                  
                  {/*<PricingCardFeature>24/7 Support</PricingCardFeature>*/}
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;