export { renderers } from '../renderers.mjs';

const page = () => import('./pages/saas_CsndS4ng.mjs').then(n => n.s);

export { page };
