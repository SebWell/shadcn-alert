export default {
    editor: {
        label: 'Shadcn Alert',
        icon: 'exclamation-triangle',
    },
    triggerEvents: [
        { name: 'click', label: 'On Click', event: { value: '' }, default: true },
    ],
    properties: {
        content: {
            label: 'Alert Settings',
            type: 'Object',
            section: 'settings',
            bindable: true,
            defaultValue: {
                title: '',
                description: 'Alert description',
                variant: 'default',
                icon: null,
                customClasses: ''
            },
            options: {
                item: {
                    title: {
                        label: 'Title',
                        type: 'Text',
                        section: 'settings',
                        bindable: true,
                        defaultValue: ''
                    },
                    description: {
                        label: 'Description',
                        type: 'LongText',
                        section: 'settings',
                        bindable: true,
                        defaultValue: 'Alert description'
                    },
                    variant: {
                        label: 'Variant',
                        type: 'TextSelect',
                        section: 'settings',
                        options: {
                            choices: [
                                { value: 'default', label: 'Default' },
                                { value: 'destructive', label: 'Destructive' },
                                { value: 'warning', label: 'Warning' }
                            ]
                        },
                        defaultValue: 'default'
                    },
                    customClasses: {
                        label: 'Custom Classes',
                        type: 'Text',
                        section: 'style',
                        bindable: true,
                        defaultValue: ''
                    }
                }
            }
        }
    }
};
