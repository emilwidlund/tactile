import*as a from"react";function d(i,e){const{asChild:r,children:c}=i;if(!r)return typeof e=="function"?e(c):e;const t=a.Children.only(c);return a.cloneElement(t,{children:typeof e=="function"?e(t.props.children):e})}export{d as getSubtree};
//# sourceMappingURL=get-subtree.js.map
