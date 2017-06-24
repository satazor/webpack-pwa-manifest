import PresetError from './errors/PresetError'

const Presets = {
  dir: ['ltr', 'rtl', 'auto'],
  orientation: [
    'any', 'natural', 'landscape', 'landscape-primary',
    'landscape-secondary', 'portrait', 'portrait-primary',
    'portrait-secondary'
  ],
  display: [
    'fullscreen', 'standalone', 'minimal-ui', 'browser'
  ]
}

function hasPreset (key, value) {
  return Presets[key].indexOf(value) >= 0
}

export default function (config, ...properties) {
  if (!config) return
  for (let property of properties) {
    let value = config[property]
    if (value && !hasPreset(property, value)) throw new PresetError(property, value)
  }
}