Grid here:

```jsx
const gaps = {
  _: 4,
  sm: 8,
  md: 16,
  lg: 32,
}
;<div style={{ backgroundColor: 'green' }}>
  <Grid as="ul" gaps={{ _: 8, sm: 16 }}>
    <li>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
  </Grid>
</div>
```
