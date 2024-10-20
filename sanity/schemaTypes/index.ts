import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { pageType } from './pageTypes'
import { heroType } from './heroTypes'
import { featureType } from './featureTypes'
import { integrationType } from './integrationType'
import { demoType } from './demoType'
import { complianceType } from './complianceType'
import { ctaType } from './ctaType'
import { privacyPolicyType } from './privacyPolicyTypes'
import { termsOfUseType } from './termsOfUseType'
import { infiniteTextType } from './infiniteText'
import { usecaseType } from './usecaseTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType,pageType,heroType,featureType,integrationType,demoType,complianceType,ctaType,privacyPolicyType,termsOfUseType,infiniteTextType,usecaseType],
}
