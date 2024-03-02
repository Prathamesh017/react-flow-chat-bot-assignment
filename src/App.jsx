import 'reactflow/dist/style.css'
import './App.css'
import NodeComponent from './components/NodeComponent'
import SettingComponent from './components/SettingComponent'
import HeaderComponent from './components/HeaderComponent'
import { useCallback, useState } from 'react'
import { useNodesState, useEdgesState, addEdge } from 'reactflow'
import './index.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App() {
  const [currentId, setCurrentId] = useState(1) //to create and  update  every node id
  const [nodeToBeUpdatedData, setnodeToBeUpdatedData] = useState({
    id: '',
    text: '',
  })
  const [showInput, setShowInput] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  function onSaveChange() {
    const isEveryNodeSelected =edges.length>0? nodes.every((node) => {
      return edges.some((edge) => {
        if (edge.source === node.id || edge.target === node.id) {
          return true
        }
      })
    }):false;
    if(isEveryNodeSelected||nodes.length===1){
      toast("Node Saved Successfull",{type:"success"})
    }
    else{
      toast("Failed To Save",{type:"error"})
    }
  
  }
  function onAddNode() {
    const newNode = {
      id: currentId.toString(),
      type: 'textMessageType',
      position: { x: 20, y: currentId * 100 },
      data: {
        label: `new node ${currentId}`,
        handleClick: { handleNodeClick },
      },
    }

    setNodes((nds) => nds.concat(newNode))
    setCurrentId((prevId) => {
      return prevId + 1
    })
  }

  function handleNodeClick(id, text) {
    setnodeToBeUpdatedData({ id, text })
    setShowInput(true)
  }


  function updateNode(newText) {
    if (nodeToBeUpdatedData.id && nodeToBeUpdatedData.text && newText) {
      setNodes((nodes) => {
        return nodes.map((node) => {
          if (node.id === nodeToBeUpdatedData.id) {
            return {
              ...node,
              data: {
                ...node.data,
                label: newText,
              },
            }
          }
          return node
        })
      })
      
      setShowInput(false);
      toast("Node Updated Successfull",{type:"success"})
    }
  }
  return (
    <div className="w-screen h-screen">
      <div>
        <HeaderComponent onSaveChange={onSaveChange}></HeaderComponent>
        <ToastContainer position="top-center" theme="colored" t />
      </div>
      <div className="body grid grid-cols-5">
        <div className="col-span-4">
          <NodeComponent
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          >
            1
          </NodeComponent>
        </div>
        <div className="col-span-1">
          <SettingComponent
            onAddNode={onAddNode}
            updateNode={updateNode}
            showInput={showInput}
            text={nodeToBeUpdatedData.text}
          ></SettingComponent>
        </div>
      </div>
    </div>
  )
}
