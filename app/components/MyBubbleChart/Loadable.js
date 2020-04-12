/**
 *
 * Asynchronously loads the component for MyBubbleChart
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
