import { writable } from 'svelte/store';

type LayoutState = {
	headerHeight: number | null;
	scrollTopPrevious: number | null;
	scrollTopCurrent: number;
};

const initData: LayoutState = {
	headerHeight: null,
	scrollTopPrevious: null,
	scrollTopCurrent: 0
};

const layoutStore = writable(initData);

function updateGlobalFlagsStore<TField extends keyof LayoutState>(
	field: TField,
	value: LayoutState[TField]
) {
	layoutStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

const updateLayoutStore = {
	headerHeight: (value: number) => updateGlobalFlagsStore('headerHeight', value),

	scrollTopPrevious: (value: number) => updateGlobalFlagsStore('scrollTopPrevious', value),

	scrollTopCurrent: (value: number) => updateGlobalFlagsStore('scrollTopCurrent', value)
};

export { type LayoutState, layoutStore, updateLayoutStore };
