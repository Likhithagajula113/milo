import { Catalog, CATALOG_AEM_FRAGMENT_MAPPING } from './catalog.js';
import { Image } from './image.js';
import { InlineHeading } from './inline-heading.js';
import { MiniCompareChart } from './mini-compare-chart.js';
import { Plans, PLANS_AEM_FRAGMENT_MAPPING } from './plans.js';
import { Product } from './product.js';
import { Segment } from './segment.js';
import {
    SPECIAL_OFFERS_AEM_FRAGMENT_MAPPING,
    SpecialOffer,
} from './special-offer.js';
import { TWP } from './twp.js';
import {
    CCD_SUGGESTED_AEM_FRAGMENT_MAPPING,
    CCDSuggested,
} from './ccd-suggested.js';
import { CCD_SLICE_AEM_FRAGMENT_MAPPING, CCDSlice } from './ccd-slice.js';
import { AH_TRY_BUY_WIDGET_AEM_FRAGMENT_MAPPING, AHTryBuyWidget } from './ah-try-buy-widget.js';

const getVariantLayout = (card, mustMatch = false) => {
    switch (card.variant) {
        case 'catalog':
            return new Catalog(card);
        case 'image':
            return new Image(card);
        case 'inline-heading':
            return new InlineHeading(card);
        case 'mini-compare-chart':
            return new MiniCompareChart(card);
        case 'plans':
            return new Plans(card);
        case 'product':
            return new Product(card);
        case 'segment':
            return new Segment(card);
        case 'special-offers':
            return new SpecialOffer(card);
        case 'twp':
            return new TWP(card);
        case 'ccd-suggested':
            return new CCDSuggested(card);
        case 'ccd-slice':
            return new CCDSlice(card);
          case 'ah-try-buy-widget':
            return new AHTryBuyWidget(card);
        default:
            return mustMatch ? undefined : new Product(card);
    }
};

export const variantFragmentMappings = {
    catalog: CATALOG_AEM_FRAGMENT_MAPPING,
    image: null,
    'inline-heading': null,
    'mini-compare-chart': null,
    plans: PLANS_AEM_FRAGMENT_MAPPING,
    product: null,
    segment: null,
    'special-offers': SPECIAL_OFFERS_AEM_FRAGMENT_MAPPING,
    twp: null,
    'ccd-suggested': CCD_SUGGESTED_AEM_FRAGMENT_MAPPING,
    'ccd-slice': CCD_SLICE_AEM_FRAGMENT_MAPPING,
    'ah-try-buy-widget': AH_TRY_BUY_WIDGET_AEM_FRAGMENT_MAPPING,
};

const getVariantStyles = () => {
    const styles = [];
    styles.push(Catalog.variantStyle);
    styles.push(MiniCompareChart.variantStyle);
    styles.push(Product.variantStyle);
    styles.push(Plans.variantStyle);
    styles.push(Segment.variantStyle);
    styles.push(SpecialOffer.variantStyle);
    styles.push(TWP.variantStyle);
    styles.push(CCDSuggested.variantStyle);
    styles.push(CCDSlice.variantStyle);
    styles.push(AHTryBuyWidget.variantStyle);
    return styles;
};

export { getVariantLayout, getVariantStyles };
