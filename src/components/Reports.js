import React from 'react'

const Reports = () => {
    const filter = () => {
        let fil = document.getElementById("filter");
        if (fil.style.display == "none") {
            fil.style.display = "block";
        }
        else {
            fil.style.display = "none";
        }
    }
  return (
    <div className="container mt-2">
    <button className="btn my-3 btn-primary ms-4" onClick={filter}><i className="bi bi-filter-right"></i>Filter</button>
    <div id="filter" className="ms-2" style={{display: "none"}}>
        <div className="row input-group mb-3">
                 <div className="mt-3">
                    <label for="appt">To Date:</label>
                    <input type="date" id="appt" name="appt"/>
                </div>
                 <div className="mt-4">
                    <label for="appt">From Date:</label>
                    <input type="date" id="appt" name="appt"/>
                </div>
        </div>
        <div className="row input-group my-4">
        <div className='mt-1'>
            <label>Event Type:</label>
            <select className="form-select col-lg-5 me-sm-2" id="inputGroupSelect01" name="type">
                <option selected>Offline</option>
                <option value="1">Online</option>
            </select>
            </div>
            <div className='mt-4'>
            <label>Venue:</label>
            <select className="form-select col-lg-5" id="inputGroupSelect01" name="venue">
                <option selected>Auditorium</option>
                <option value="1">Mini Auditorium</option>
            </select>
            </div>
        </div>
    </div>
    <h2>Results</h2>
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Event Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Reports
