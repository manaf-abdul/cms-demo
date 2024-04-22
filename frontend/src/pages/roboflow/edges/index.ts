import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
  {
    id: "a->c", source: "a", target: "b",type: 'custom-edge'
    // updatable: 'source',
  },
  {
    id: "b->d", source: "b", target: "c",type: 'custom-edge'
    // updatable: 'source',
  },
  {
    id: "c->d", source: "c", target: "d",type: 'custom-edge'
    // updatable: 'source',
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
