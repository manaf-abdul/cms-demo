import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
} from 'reactflow';
import { deleteEdge } from '../../../services/adminService';

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }: any) {
  const { setEdges, } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <button
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
          onClick={async () => {
            const { data } = await deleteEdge({_id:id})
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
        >
          delete
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
