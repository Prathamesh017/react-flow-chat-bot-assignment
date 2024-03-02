import { Handle, Position } from 'reactflow'

function textMessageNode(props) {
  let handleStyle={ width: '10px', height: '10px' }
  return (
    <div onClick={()=>{
      props.data.handleClick.handleNodeClick(props.id,props.data.label)}}>
      <Handle style={handleStyle} type="source" position={Position.Left} id="a" />
      <div
        style={{ width: '120px', height: '50px' }}
        className="bg-slate-100 overflow-x-auto text-center text-xl"
      >
        <p>{props.data.label}</p>
      </div>

      <Handle
        style={handleStyle}
        type="target"
        position={Position.Right}
        id="b"
      />
    </div>
  )
}

export default textMessageNode
