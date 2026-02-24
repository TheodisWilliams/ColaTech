# How to Add Portfolio Projects

Your portfolio page now displays your websites: Cola Farms and Texas Latest.

## Adding Screenshots (Optional but Recommended)

1. **Take screenshots of your websites:**
   - Visit each site and take a full-page or hero screenshot
   - Recommended size: 1200x800px or similar aspect ratio
   - Save as JPG or PNG

2. **Add images to your project:**
   ```
   public/
   └── images/
       └── work/
           ├── colafarms.jpg    ← Add screenshot here
           └── texaslatest.jpg  ← Add screenshot here
   ```

3. The portfolio page will automatically display them!

## Adding More Projects

Edit `src/app/work/page.tsx` and add new projects to the `projects` array:

```typescript
const projects = [
  {
    id: 1,
    name: 'Cola Farms',
    // ... existing project
  },
  {
    id: 2,
    name: 'Texas Latest',
    // ... existing project
  },
  // ADD NEW PROJECTS HERE:
  {
    id: 3,
    name: 'Your New Project Name',
    category: 'Website Development', // or 'Network Infrastructure', 'Security Systems', etc.
    description: 'Brief description of the project and what you built.',
    image: '/images/work/newproject.jpg',
    liveUrl: 'https://yournewproject.com', // or null if no live URL
    results: [
      'Key achievement 1',
      'Key achievement 2',
      'Key achievement 3',
    ],
    tags: ['Technology', 'Feature', 'Framework'],
  },
]
```

## Project Categories

Available categories (you can add more):
- `Website Development`
- `Network Infrastructure`
- `Security Systems`
- `Managed IT`

## Tips

- **No screenshots?** The page works fine without them—it shows a placeholder
- **No live URL?** Set `liveUrl: null` for infrastructure/network projects
- **Want more detail?** Add more items to the `results` array
- **Custom tags?** Use any technology or feature names in the `tags` array

Your portfolio page is live at: `/work`
