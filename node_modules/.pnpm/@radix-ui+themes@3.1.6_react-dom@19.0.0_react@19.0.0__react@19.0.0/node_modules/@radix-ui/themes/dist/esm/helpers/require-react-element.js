import*as o from"react";const a=t=>{if(!o.isValidElement(t))throw Error(`Expected a single React Element child, but got: ${o.Children.toArray(t).map(e=>typeof e=="object"&&"type"in e&&typeof e.type=="string"?e.type:typeof e).join(", ")}`);return t};export{a as requireReactElement};
//# sourceMappingURL=require-react-element.js.map
