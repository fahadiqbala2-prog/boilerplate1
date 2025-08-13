<<<<<<< HEAD
import { initializers } from '@dropins/tools/initializer.js';
import { initialize } from '@dropins/storefront-personalization/api.js';
import { initializeDropin } from './index.js';

await initializeDropin(async () => initializers.mountImmediately(initialize, {}))();
=======
import { getHeaders } from '@dropins/tools/lib/aem/configs.js';
import { initializers } from '@dropins/tools/initializer.js';
import { initialize, setFetchGraphQlHeaders } from '@dropins/storefront-personalization/api.js';
import { initializeDropin } from './index.js';

await initializeDropin(async () => {
  setFetchGraphQlHeaders((prev) => ({ ...prev, ...getHeaders('cart') }));
  return initializers.mountImmediately(initialize, {});
})();
>>>>>>> 060f85c2316df68cdc0a93a366e794fd21eaaf9f
