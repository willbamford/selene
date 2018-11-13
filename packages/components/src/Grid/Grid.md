Grid here:

```jsx
<div style={{ backgroundColor: 'green' }}>
  <Grid as="ul" gap={{ def: 0, sm: 2, md: 3, lg: 4 }}>
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
  <Grid as="ul" gap={5}>
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
  <Grid as="ul" rowGap={3}>
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
  <Grid as="ul" colGap={6}>
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
