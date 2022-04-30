import { defineConfig } from'vite';
import { resolve } from 'path';

const root = resolve(__dirname, '.')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/firenze22/',
  build: {
	outDir,
	emptyOutDir: true,
	rollupOptions: {
      input: {
	    main: resolve(root, 'index.html'),
		unGiornoFuori: resolve(root, 'unGiornoFuori.html'),
		ciboVino: resolve(root, 'ciboVino.html')
	  }
	}
  }
});
