export default {
  editor: {
    label: {
      en: 'Color Picker',
    },
  },
  properties: {
    textColor: {
      label: {
        en: 'Text color',
      },
      type: 'Color',
      defaultValue: '#F23636',
    },
    labelComponent: {
      hidden: true,
      defaultValue: { isWwObject: true, type: 'ww-text' },
    },
  },
};
