
import Node from './Node.jsx'
import PropTypes from 'prop-types'
function NodeComponent({ nodes,edges,onEdgesChange,onConnect,onNodesChange,}) {
  NodeComponent.propTypes={
    nodes: PropTypes.array,
    edges: PropTypes.array,
    onEdgesChange:PropTypes.func,
    onConnect:PropTypes.func,
    onNodesChange:PropTypes.func
  }
  return (
    <>
      <h1 className="text-center">Flow Area</h1>
      <div style={{ width: '80vw', height: '85vh' }} className="bg-slate-400 overflow-auto">
        <Node nodes={nodes} edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}></Node>
      </div>
    </>
  )
}

export default NodeComponent
