import React from 'react'

function CreateRideForm( { onClose} ) {
    const handleAddEmployee = (event) => {
        event.preventDefault();
      }
  return (
    <div>
       <div className="popover">
            <div class="modal-header m-1 ">
              <h5 class="modal-title fs-5">CREATE NEW RIDE</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <form>
              <label className="form-label">Author Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                // value={newEmployee.name}
                // onChange={handleInputChange}
              />
              <label className="form-label">Start</label>
              <input
                className="form-control"
                type="text"
                name="start"
                // value={newEmployee.start}
                // onChange={handleInputChange}
              />
              <label className="form-label">destination</label>
              <input
                className="form-control"
                type="text"
                name="destination"
                // value={newEmployee.destination}
                // onChange={handleInputChange}
              />
              <label className="form-label">route</label>
              <input
                className="form-control"
                type="text"
                name="route"
                // value={newEmployee.route}
                // onChange={handleInputChange}
              />
              <label className="form-label">startTime</label>
              <input
                className="form-control"
                type="text"
                name="startTime"
                // value={newEmployee.startTime}
                // onChange={handleInputChange}
              />
              <button
                // onClick={handleAddEmployee}
                type="submit"
                className=" btn btn-success form-button"
              >
                Add Ride
              </button>
              <button
                onClick={onClose}
                className="btn btn-secondary form-button"
              >
                Close
              </button>
            </form>
          </div>
    </div>
  )
}

export default CreateRideForm
