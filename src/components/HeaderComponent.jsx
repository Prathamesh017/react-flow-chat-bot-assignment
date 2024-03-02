import PropTypes from 'prop-types'
function HeaderComponent({ onSaveChange }) {
  HeaderComponent.propTypes = {
    onSaveChange: PropTypes.func,
  }
  return (
    <div
      style={{ height: '10vh' }}
      className="w-full bg-slate-200 flex justify-end p-2"
    >
      <button
        onClick={onSaveChange}
        className="my-1 self-center p-2 rounded bg-slate-500 cursor-pointer hover:bg-slate-600 text-white"
      >
        Save Changes
      </button>
    </div>
  )
}

export default HeaderComponent
