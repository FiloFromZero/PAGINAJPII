export { renderers } from '../renderers.mjs';

const page = () => import('./pages/startup_uC_gW638.mjs').then(n => n.s);

export { page };
