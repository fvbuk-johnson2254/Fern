import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//@ts-ignore
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()]
});
