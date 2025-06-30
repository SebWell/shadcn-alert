export default {
  editor: {
    label: {
      en: "shadcn Alert",
      fr: "Alerte shadcn"
    },
    icon: 'fas fa-exclamation-triangle',
    bubble: {
      icon: 'fas fa-exclamation-triangle'
    },
    deprecated: false
  },
  properties: {
    variant: {
      label: {
        en: "Variant",
        fr: "Variante"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "destructive", label: { en: "Destructive", fr: "Destructeur" } },
          { value: "success", label: { en: "Success", fr: "Succès" } },
          { value: "warning", label: { en: "Warning", fr: "Avertissement" } },
          { value: "info", label: { en: "Info", fr: "Information" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    title: {
      label: {
        en: "Title",
        fr: "Titre"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    description: {
      label: {
        en: "Description",
        fr: "Description"
      },
      type: "LongText",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    htmlContent: {
      label: {
        en: "HTML Content",
        fr: "Contenu HTML"
      },
      type: "LongText",
      defaultValue: "",
      bindable: true,
      section: "content"
    },
    icon: {
      label: {
        en: "Icon",
        fr: "Icône"
      },
      type: "Icon",
      bindable: true,
      section: "appearance"
    },
    dismissible: {
      label: {
        en: "Dismissible",
        fr: "Peut être fermé"
      },
      type: "OnOff",
      defaultValue: false,
      section: "behavior"
    },
    dismissWorkflowId: {
      label: {
        en: "Dismiss workflow",
        fr: "Workflow de fermeture"
      },
      type: "WorkflowId",
      bindable: true,
      hidden: content => !content.dismissible,
      section: "behavior"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  events: {
    dismiss: {
      label: {
        en: "On dismiss",
        fr: "Lors de la fermeture"
      },
      default: null
    }
  },
  sections: {
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: true
    },
    behavior: {
      label: { en: "Behavior", fr: "Comportement" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 