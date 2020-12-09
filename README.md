> Impression is a gallery of easy to use scripts to have HTML element 'impression' event on your
> web pages.

# Usage

Pick one that you need, add CSS class 'impression' (overridable default) to elements you want to
track, and then add listeners for the event just as you use `click` event or any other events.

## One Time Impression (0.4KB)

To fire `impression` event one time when an element becomes visible, use one of the following CDNs.

### jsDelivr

```html
<script defer src='https://cdn.jsdelivr.net/npm/@setyadi/impression@0.1.0/dist/92+/impression.min.js'></script>
```

### unpkg

```html
<script defer src='https://unpkg.com/@setyadi/impression@0.1.0/dist/92+/impression.min.js'></script>
```

## One Time Impression + Off (0.7KB)

To fire `impression` event one time when an element becomes visible and `impressioff` event one time
when an element is no longer visible, use one of the following CDNs.

### jsDelivr

```html
<script defer src='https://cdn.jsdelivr.net/npm/@setyadi/impression@0.1.0/dist/92+/impression+off.min.js'></script>
```

### unpkg

```html
<script defer src='https://unpkg.com/@setyadi/impression@0.1.0/dist/92+/impression+off.min.js'></script>
```


# Disclaimer

Based on caniuse.com, the above scripts should work for 92.x% of users worldwide or more. But when
it's not working it doesn't break the page.


# Roadmap

- Reocurring impressions (just like one time impression but every time).
- Impression events for elements created dynamically.
- Support old browsers.


# Configuration

By default, the script would just work provided that you agree with the default values. But if you
want to use something different, you can override the values by adding the following attributes on
the script tag.

| Attributes         | Description                                                                                            | Default Value |
|--------------------|--------------------------------------------------------------------------------------------------------|---------------|
|`elements-selector` | CSS selector that would match the elements.                                                            | '.impression' |
|`visible-fraction`  | Visible fraction of elements that would trigger impression event.                                      | 0.5           |
|`visible-fractioff` | Visible fraction of elements that would trigger impressioff event after impression event is triggered. | 0.0           |

## Example of Overriding Defaults

```html
<script defer
  src='https://cdn.jsdelivr.net/npm/@setyadi/impression@0.1.0/dist/92+/impression+off.min.js'
  elements-selector='[name="track-impression"]'
  visible-fraction=0.8
  visible-fractioff=0.1>
</script>
```


# [License](LICENSE)

