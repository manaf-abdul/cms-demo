import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Controls, updateEdge, addEdge } from 'reactflow';

import 'reactflow/dist/style.css';
import { initialNodes } from './nodes';
import { initialEdges } from './edges';
import CustomEdge from './edges/customEdge';
import { getUserForms } from '../../services/userService';
import { enqueueSnackbar } from 'notistack';
import { editTarget } from '../../services/adminService';

const UpdatableEdge = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>(initialEdges);
  const [order, setOrder] = useEdgesState<any>(initialEdges);
  // gets called after end of edge gets dragged to another source or target
  const edgeTypes = {
    'custom-edge': CustomEdge,
  };

  // console.log("111",edges)
  const onEdgeUpdate = useCallback(
    async (oldEdge: any, newConnection: any) => {
      console.log({ oldEdge, newConnection })

      // console.log({ oldEdge, newConnection })
      const payload = {
        _id: newConnection.source,
        target: newConnection.target,
        source: newConnection.source
      }
      const data = await editTarget(payload)
      const newEdges = edges.filter(x => x.target !== newConnection.target)
      setEdges((els) => updateEdge(oldEdge, newConnection, newEdges))
    },
    [setEdges, edges]
  );

  const fetchData = async () => {
    try {
      const data = await getUserForms()
      const newdata = data.map((formElm: any) => {
        return {
          ...formElm,
          data: { label: formElm.formName },
          id: formElm._id
        };
      });
      // console.log({newdata})
      setNodes(newdata)
      setEdges(newdata)
    } catch (error: any) {
      enqueueSnackbar(error.message ?? "Error Occured! Please refresh or try again later", { variant: "error" });
    } finally {
      // setLoading(false)
    }
  }

  // console.log({nodes,edges})

  useEffect(() => {
    // Check if access token exists
    //Get user Forms
    fetchData()
  }, []);

  const onConnect = useCallback(
    async (connection: any) => {
      console.log({ connection })
      const newEdges = edges.filter(x => x.target !== connection.target)
      const edge = { ...connection, type: 'custom-edge' };
      // const newdata = nodes.filter((formElm: any) => {
      //   if (formElm.id == connection.source) {
      //     return {
      //       ...formElm,
      //       data: { label: formElm.formName },
      //       id: formElm._id,
      //       target: connection.target
      //     };
      //   }
      // });
      // console.log(newdata)
      // const data=await 
      // setNodes(newdata)
      const payload = {
        _id: connection.source,
        target: connection.target,
        source: connection.source
      }
      const data = await editTarget(payload)
      console.log(data, "555")
      setEdges((eds) => addEdge(edge, newEdges));
    },
    [setEdges, edges],
  );

  return (
    <>
      <div style={{ height: "100vh", width: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          snapToGrid
          onEdgeUpdate={onEdgeUpdate}
          onConnect={onConnect}
          fitView
          edgeTypes={edgeTypes}
          attributionPosition="top-right"
        >
          <Controls />
        </ReactFlow>
      </div>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" type='text' inputMode={value.length > 5 ? 'numeric' : "text"} inputProps={
        { inputMode: value.length > 4 && value.length < 9 ? "numeric" : "text" }
      } value={value} onChange={(e) => setValue(e.target.value.toUpperCase())} sx={{ marginTop: 10, width: "90%" }} />
      <h4 className='uppercase'>
        {value}
      </h4> */}
      {/* <MuiOtpInput value={otp} onChange={handleChange} length={10}
        TextFieldsProps={(index) => ({
          placeholder: String(index), inputProps: {
            inputMode: otp.length > 4 && otp.length < 9 ? "numeric" : "text"
          }
        })}
      />
      <h4 className='uppercase'>
        {otp}
      </h4> */}
    </>
  );
};

export default UpdatableEdge;
