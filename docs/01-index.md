---
title: Welcome to the Fractal Starter Kit
---

Put some really nice things here about your pattern library!

## Component statuses

Every component have a status that signals whether it’s ready for use in production or not. Currently, the default status is set to `PROTOTYPE` if nothing else is configured. This is set in the config file for each component using the `status:` property.

| Status label | Description |
| ----- | ----------- |
{{#each _config.components.statuses}}
  | {{> renderStatusTag this }} | {{description}} |
{{/each}}
