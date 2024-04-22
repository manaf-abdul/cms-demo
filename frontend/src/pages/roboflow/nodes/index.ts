import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { id: "a",  position: { x: 0, y: 0 }, data: { label: "COMPONENT A" } },
  {
    id: "b",
    position: { x: -50, y: 150 },
    data: { label: "COMPONENT B" },
  },
  { id: "c", position: { x: +50, y: 300 }, data: { label: "COMPONENT C" } },
  {
    id: "d",
    position: { x: 0, y: 450 },
    data: { label: "COMPONENT D" },
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
