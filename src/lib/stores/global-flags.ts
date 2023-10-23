import { writable } from 'svelte/store';

type GlobalFlagsState = {
	linksPanelVisibility: 'closed' | 'opening' | 'open' | 'closing';
	firstPageIsReady: boolean;
};

export const linksPanelInitData: GlobalFlagsState = {
	linksPanelVisibility: 'closed',
	firstPageIsReady: false
};

const globalFlagsStore = writable(linksPanelInitData);

function updateGlobalFlagsStore<TField extends keyof GlobalFlagsState>(
	field: TField,
	value: GlobalFlagsState[TField]
) {
	globalFlagsStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

const updateGlobalFlags = {
	openLinksPanel: () => {
		updateGlobalFlagsStore('linksPanelVisibility', 'opening');

		setTimeout(() => {
			updateGlobalFlagsStore('linksPanelVisibility', 'open');
		}, 300);
	},
	closeLinksPanel: () => {
		updateGlobalFlagsStore('linksPanelVisibility', 'closing');

		setTimeout(() => {
			updateGlobalFlagsStore('linksPanelVisibility', 'closed');
		}, 300);
	},

	firstPageIsReady: () => updateGlobalFlagsStore('firstPageIsReady', true)
};

export { type GlobalFlagsState, globalFlagsStore, updateGlobalFlags };
