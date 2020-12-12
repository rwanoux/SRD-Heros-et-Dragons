 export default async function getClassFeaturesHD({
     className = "",
     subclassName = "",
          priorLevel = 0
 } = {}) {


     console.log('---------classUP---------');
     console.log(arguments)

     className = className.toLowerCase();
     subclassName = subclassName.slugify();

     // Get the configuration of features which may be added
     const clsConfig = CONFIG.DND5E.classFeatures[className];
     if (!clsConfig) return [];

     // Acquire class features
     let ids = [];
     for (let [l, f] of Object.entries(clsConfig.features || {})) {
         l = parseInt(l);
         if ((l <= level) && (l > priorLevel)) ids = ids.concat(f);
     }

     // Acquire subclass features
     const subConfig = clsConfig.subclasses[subclassName] || {};
     for (let [l, f] of Object.entries(subConfig.features || {})) {
         l = parseInt(l);
         if ((l <= level) && (l > priorLevel)) ids = ids.concat(f);
     }

     // Load item data for all identified features
     const features = await Promise.all(ids.map(id => fromUuid(id)));

     // Class spells should always be prepared
     for (const feature of features) {
         if (feature!=null && feature.type === "spell") {
             const preparation = feature.data.data.preparation;
             preparation.mode = "always";
             preparation.prepared = true;
         }
     }
     console.log({features})
     return features;

 }