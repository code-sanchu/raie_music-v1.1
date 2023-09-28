import { writable } from 'svelte/store';

type LinksPanelState = {
	visibility: 'closed' | 'opening' | 'open' | 'closing';
};

export const linksPanelInitData: LinksPanelState = {
	visibility: 'closed'
};

const linksPanelStore = writable(linksPanelInitData);

function updateLinksPanelStore<TField extends keyof LinksPanelState>(
	field: TField,
	value: LinksPanelState[TField]
) {
	linksPanelStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

const updateLinksPanel = {
	open: () => {
		updateLinksPanelStore('visibility', 'opening');

		setTimeout(() => {
			updateLinksPanelStore('visibility', 'open');
		}, 300);
	},
	close: () => {
		updateLinksPanelStore('visibility', 'closing');

		setTimeout(() => {
			updateLinksPanelStore('visibility', 'closed');
		}, 300);
	}
};

export { type LinksPanelState as LinksPanel, linksPanelStore, updateLinksPanel };
