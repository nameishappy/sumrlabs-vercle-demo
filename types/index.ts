export interface FeatureProps{
   _type:string
   features:Feature[]
}

export interface Feature{
   heading:string
   imageUrl:string
    altText:string
      description:string
      bullets:string[]
      link:string
      color:string
      bulletBgcolor: string;
}

export interface IntegrationProps{
   _type:string
   heading:string
   subheading:string
   integrationImages:{
      imageUrl:string
      altText:string
   }[]
}

export interface DemoProps{
   _type:string
   bulletPoints:string[]
   integrationImages:{
      imageUrl:string
      altText:string
   }[]
}
export interface ComplianceProps{
   _type:string
   heading:string
   integrationImages:{
      imageUrl:string
      altText:string
   }[]
}

export interface CtaProps{
   _type:string
   heading:string
   buttonText:string
}