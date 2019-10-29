const navigationItems = {
    trigger: {
        title: 'Trigger',
        value: 'trigger',
        visible: false
    },
	hello: {
        title: 'Hello',
        value: 'hello',
        visible: false
    },
    composition: {
        title: 'Composition',
        value: 'composition',
        visible: false
    },
    child: {
        title: 'Child-to-Parent',
        value: 'child',
        visible: false
    },
    parent: {
        title: 'Parent-to-Child',
        value: 'parent',
        visible: false
    },
    // wire: {
    //     title: 'Wire',
    //     value: 'wire',
    //     visible: false
    // },
    misc: {
        title: 'Misc',
        value: 'misc',
        visible: false
    },
    party: {
        title: '3rd Party Libs',
        value: 'party',
        visible: false
    }
};

const navigationElements = [
	'trigger',
    'hello',
    'composition',
    'child',
    'parent',
    'misc',
    'party'
];

export { navigationItems, navigationElements };
