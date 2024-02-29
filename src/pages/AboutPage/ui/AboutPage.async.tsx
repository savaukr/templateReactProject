import {lazy} from 'react';

export const AboutPageAsync = lazy(
	async () =>
		new Promise(resolve => {
			setTimeout(() => {
				// @ts-expect-error	// dit know how type this
				resolve(import('./AboutPage'));
			}, 1500);
		}),
);
