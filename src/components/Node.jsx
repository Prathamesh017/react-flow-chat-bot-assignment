import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'
import { useMemo } from 'react';
import PropTypes from 'prop-types'
import textMessageNode from  "./customMessageNode";
export default function Node({nodes,edges,onEdgesChange,onConnect,onNodesChange}) {
  Node.propTypes={
    nodes: PropTypes.array,
    edges: PropTypes.array,
    onEdgesChange:PropTypes.func,
    onConnect:PropTypes.func,
    onNodesChange:PropTypes.func
  }
  // can add new types in future
  const nodeTypes = useMemo(() => ({ "textMessageType": textMessageNode }), []);
  return (   
      <ReactFlow nodes={nodes}edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect} 
      nodeTypes={nodeTypes}

      />
  
  )
}
