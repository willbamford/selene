Grid here:

```jsx
<div style={{ backgroundColor: 'green' }}>
  <Grid as="ul" gaps={{ def: 0, sm: 2, md: 3, lg: 4 }}>
    <li>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
  </Grid>
</div>
```

```jsx
<div style={{ backgroundColor: 'green' }}>
  <Grid as="ul" gaps={5}>
    <li>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
  </Grid>
</div>
```

```jsx
<div style={{ backgroundColor: 'green' }}>
  <Grid as="ul" rowGaps={3}>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
  </Grid>
</div>
```

```jsx
<div style={{ backgroundColor: 'green' }}>
  <Grid as="ul" colGaps={6}>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
    </li>
    <li style={{ width: '50%' }}>
      <div style={{ backgroundColor: 'yellow' }}>Cell</div>
    </li>
  </Grid>
</div>
```
