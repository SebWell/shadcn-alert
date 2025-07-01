export default {
    editor: {
        label: 'Shadcn Alert',
        icon: 'exclamation-triangle',
    },
    properties: {
        title: {
            label: 'Alert title',
            type: 'Text',
            section: 'settings',
            defaultValue: 'Alert',
            bindable: true,
        },
        description: {
            label: 'Description',
            type: 'Text',
            section: 'settings',
            defaultValue: 'Alert description',
            bindable: true,
        },
        variant: {
            label: 'Variant',
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: 'default', label: 'Default' },
                    { value: 'destructive', label: 'Destructive' }
                ]
            },
            defaultValue: 'default'
        }
    }
};
