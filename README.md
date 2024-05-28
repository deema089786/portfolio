Start libs/design-system storybook
npx nx run presento-web-design-system:storybook

Generate React Component from the .glb file:
npx gltfjsx scenes/scene-v1.glb --types --shadows --keepnames --root

1. update paths
2. update lights intensity


Required Light Props
```typescript
  castShadow
        shadow-mapSize-width={2048} // Increased shadow map resolution
        shadow-mapSize-height={2048} // Increased shadow map resolution
        shadow-bias={-0.0001} // Bias to reduce shadow acne
        // shadow-camera-near={1}
        // shadow-camera-far={500}
        // shadow-camera-left={-50}
        // shadow-camera-right={50}
        // shadow-camera-top={50}
        // shadow-camera-bottom={-50}
        // shadow-normalBias={0.05} // Normal bias to reduce artifacts on sloped surfaces
  
``
