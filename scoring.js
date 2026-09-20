function cdnaZeroScores(keys){ return keys.reduce((o,k)=>(o[k]=0,o),{}); }
function cdnaAccumulateProfile(answers, questions){
  const traits=cdnaZeroScores(CDNA_TRAITS), interests={}, workStyles={}, environments={}, motivations={};
  const add=(obj,vals)=>Object.entries(vals||{}).forEach(([k,v])=>obj[k]=(obj[k]||0)+v);
  answers.forEach(a=>{const q=questions.find(x=>x.id===a.questionId); if(!q)return; const x=q.answers.find(y=>y.id===a.answerId); if(!x)return; add(traits,x.traits);add(interests,x.interests);add(workStyles,x.workStyles);add(environments,x.environments);add(motivations,x.motivations);});
  return {traits,interests,workStyles,environments,motivations};
}
function cdnaInferTags(traits){
  const out={interests:{},workStyles:{},environments:{},motivations:{}};
  const rules=[['technicalInterest','technology','focused'],['creativity','design','creative'],['scientificThinking','science','research'],['businessOrientation','business','client-facing'],['helpingOrientation','people','service'],['artisticExpression','art','creative'],['practicalAbility','making','hands-on'],['communication','communication','collaborative'],['independence','ownership','independent'],['curiosity','discovery','research'],['riskTolerance','entrepreneurship','fast-paced'],['spatialReasoning','space','field'],['socialInteraction','people','client-facing']];
  rules.forEach(([trait,interest,style])=>{if((traits[trait]||0)>=55){out.interests[interest]=(traits[trait]||0)/100;out.workStyles[style]=(traits[trait]||0)/100;}});
  Object.entries(traits).forEach(([k,v])=>{if(v>=60){if(['practicalAbility','spatialReasoning','adaptability'].includes(k))out.environments.field=(out.environments.field||0)+v/100;if(['socialInteraction','communication','empathy'].includes(k))out.environments.community=(out.environments.community||0)+v/100;if(['technicalInterest','analysis','researchOrientation'].includes(k))out.environments.lab=(out.environments.lab||0)+v/100;if(['creativity','artisticExpression','visualThinking'].includes(k))out.environments.studio=(out.environments.studio||0)+v/100;}});
  if(traits.helpingOrientation>=55)out.motivations.helping=traits.helpingOrientation/100;if(traits.businessOrientation>=55)out.motivations.results=traits.businessOrientation/100;if(traits.curiosity>=55)out.motivations.discovery=traits.curiosity/100;if(traits.creativity>=55)out.motivations.creation=traits.creativity/100;if(traits.practicalAbility>=55)out.motivations.building=traits.practicalAbility/100;if(traits.leadership>=55)out.motivations.leadership=traits.leadership/100;
  return out;
}
function cdnaNormalizeProfile(raw){
  const max={}; Object.keys(raw.traits).forEach(k=>max[k]=0);
  for(const q of CDNA_QUESTIONS){ for(const k of Object.keys(max)){let best=0; for(const a of q.answers) best=Math.max(best,(a.traits||{})[k]||0); max[k]+=best;}}
  const traits={}; Object.keys(raw.traits).forEach(k=>traits[k]=Math.round(Math.min(100,(raw.traits[k]/(max[k]||1))*100)));
  const inferred=cdnaInferTags(traits);
  return {traits,interests:{...inferred.interests,...raw.interests},workStyles:{...inferred.workStyles,...raw.workStyles},environments:{...inferred.environments,...raw.environments},motivations:{...inferred.motivations,...raw.motivations}};
}
function cdnaTagSimilarity(userTags, careerTags){
  const keys=Object.keys(userTags); if(!keys.length)return 0;
  let total=0,max=0; for(const k of keys){const w=userTags[k];max+=w; if(careerTags.includes(k))total+=w;} return max?total/max:0;
}
function cdnaTraitSimilarity(userTraits, careerTraits){
  let sum=0,weight=0; for(const [k,v] of Object.entries(userTraits)){const target=(careerTraits[k]??.35)*100; const w=1; sum+=(100-Math.abs(v-target))*w;weight+=w;} return weight?sum/weight:0;
}
function cdnaMatchCareers(profile,n=10){
  const ranked=CDNA_CAREER_CATALOG.map(c=>{
    const trait=cdnaTraitSimilarity(profile.traits,c.traits);
    const interest=cdnaTagSimilarity(profile.interests,c.interests)*100;
    const style=cdnaTagSimilarity(profile.workStyles,c.workStyles)*100;
    const env=cdnaTagSimilarity(profile.environments,c.environments)*100;
    const motivation=cdnaTagSimilarity(profile.motivations,c.motivations)*100;
    const compatibility=Math.round(trait*.55+interest*.15+style*.10+env*.08+motivation*.12);
    const strongest=Object.entries(profile.traits).sort((a,b)=>b[1]-a[1]).filter(([k])=>c.traits[k]!==undefined).slice(0,3).map(([k])=>k);
    const development=Object.entries(c.traits).sort((a,b)=>(a[1]||0)-(b[1]||0)).find(([k])=>(profile.traits[k]||0)<55)?.[0]||'domain experience';
    return {...c,compatibility,strongest,development};
  });
  return ranked.sort((a,b)=>b.compatibility-a.compatibility||a.name.localeCompare(b.name)).slice(0,n);
}
function cdnaDomainDistribution(profile){
  const values={};
  for(const d of CDNA_DOMAIN_NAMES){const careers=CDNA_CAREER_CATALOG.filter(c=>c.domain===d); values[d]=Math.round(cdnaTraitSimilarity(profile.traits,careers[0].traits));}
  return Object.entries(values).sort((a,b)=>b[1]-a[1]);
}
function cdnaTopTraitNames(profile,n=6){return Object.entries(profile.traits).sort((a,b)=>b[1]-a[1]).slice(0,n).map(([k,v])=>({key:k,value:v,name:k.replace(/[A-Z]/g,m=>' '+m).replace(/^./,m=>m.toUpperCase())}));}
