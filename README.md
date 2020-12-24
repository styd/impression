![build-test](https://github.com/styd/impression/workflows/build-test/badge.svg)

> Impression is a gallery of easy to use scripts to have HTML DOM element 'impression' event on
> your web pages.

# Usage

Pick one that you need, add CSS class 'impression' (overridable default) to elements you want to
track, and then add listeners for the event just as you use `click` event or any other events.

## One Time Impression
### (92+/impression.min.js -> 0.5KB)

To fire `impression` event one time when an element becomes visible, use one of the following CDNs.

## One Time Impression + Off
### (92+/impression+off.min.js -> 0.8KB)

To fire `impression` event one time when an element becomes visible and `impressioff` event one time
when an element is no longer visible, use one of the following CDNs.

## CDNs

<details>
  <summary><strong>jsDelivr</strong></summary>

```html
<script src='https://cdn.jsdelivr.net/npm/@setyadi/impression/dist/92+/impression.min.js'></script>
```

```html
<script src='https://cdn.jsdelivr.net/npm/@setyadi/impression/dist/92+/impression+off.min.js'></script>
```

</details>

<details>
  <summary><strong>unpkg</strong></summary>


```html
<script src='https://unpkg.com/@setyadi/impression/dist/92+/impression.min.js'></script>
```

```html
<script src='https://unpkg.com/@setyadi/impression/dist/92+/impression+off.min.js'></script>
```

</details>


## Configuration

By default, the script would just work provided that you agree with the default values. But if you
want to use something different, you can override the defaults by adding the following attributes on
the script tag.

| Attributes         | Description                                                                                            | Default Value |
|--------------------|--------------------------------------------------------------------------------------------------------|---------------|
|`elements-selector` | CSS selector that would match the elements.                                                            | '.impression' |
|`visible-fraction`  | Visible fraction of elements that would trigger impression event.                                      | 0.5           |
|`visible-fractioff` | Visible fraction of elements that would trigger impressioff event after impression event is triggered. | 0.0           |

## Example of Overriding Defaults

```html
<script
  src='https://cdn.jsdelivr.net/npm/@setyadi/impression/dist/92+/impression+off.min.js'
  elements-selector='[data-track="MyImpression"]'
  visible-fraction=0.8
  visible-fractioff=0.1>
</script>
```


# Demo

To run the demo, clone this repo, `cd` to it, `yarn install` and then pick the demo page you want to
see.

### Vanilla JS

```
yarn demo
```

### Svelte

```
yarn demo:svelte
```

They basically demo the same thing, but you can look at the source code to see how they use
`impression`.


# Disclaimer

Based on [CanIUse](https://www.caniuse.com), the above scripts should work for 92.x% or more of users
worldwide. For the other times when it's not working, it doesn't break the page.


# Roadmap

- Reocurring impressions (just like one time impression but every time).
- Impression events for elements created dynamically.
- Support old browsers.


# [License](LICENSE)
