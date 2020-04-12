/**
 *
 * Asynchronously loads the component for MyPieChart
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
