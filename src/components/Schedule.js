import React from 'react'

const shedule = () => {
  return (
    <div>
    <div className='mt-2'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="OnGoing-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Step-1</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="UpComing-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Step-2</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Past-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Step-3</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Past-tab" data-bs-toggle="tab" data-bs-target="#ex4" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Step-4</button>
    </li>
  </ul>
    </div>
    <div className="collapse show container" id="ex1">
      <div className='mt-4'>
    <h3>EVENT DETAILS</h3>
    <label for="name" className="form-label">Event name</label>
    <input type="text" id="name" className="form-control"/>
    <label for="EventType" className="form-label">Event Type</label>
    <select id="EventType" className="form-select">
        <option selected>Offline</option>
        <option value="1">Online</option>
    </select>
    <label for="name" className="form-label">Event description</label>
      <textarea className="form-control" placeholder="" id="floatingTextarea"></textarea>
    <button type="button" className="btn btn-primary mt-3">next</button>
    </div>
  </div>
  <div className="collapse container" id="ex2">
  <div className='mt-4'>
    <h3>SLOT DETAILS</h3>
    <label for="birthday">Date:</label>
<input type="date" id="birthday" name="birthday"/><br/>
<div className="mt-3">
    <label for="appt">time:</label>
<input type="time" id="appt" name="appt"/>
</div>
<label for="EventType" className="form-label mt-3">Venue</label>
<select id="EventType" className="form-select">
  <option selected>...</option>
  <option>Auditorium</option>
  <option>ground</option>
  <option>mini-auditorium</option>
  <option>canteen</option>
</select>
<div className="mt-3">
<label for="name" className="form-label">Estimated Attendes</label>
<input type="number" id="name" value="0" /><br/>
</div>
<button type="button" className="btn btn-primary mt-3">Previous</button>
<button type="button" className="btn btn-primary mt-3 ms-5">Next</button>
</div>
  </div>
  <div className="collapse container" id="ex3">
  <div className='mt-4'>
    <h3>REFRESHMENT'S</h3>
    <label for="name" className="form-label">item-1</label>
<input type="number" id="name" value="0"/><br/>
<label for="name" className="form-label">item-2</label>
<input type="number" id="name" value="0"/><br/>
<label for="name" className="form-label">item-3</label>
<input type="number" id="name" value="0" /><br/>


    <button type="button" className="btn btn-primary mt-3">Previous</button>
    <button type="button" className="btn btn-primary mt-3 ms-5">Next</button>
  </div>
  </div>
  <div className="collapse container" id="ex4">
  <div className='mt-4'>
    <h3>PREVIEW</h3>
<div className="d-flex justify-content-between">
</div>
<div id="request" className="step overflow-auto">
  <div className="container my-5 mx-auto w-100">
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Label</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Event Name</td>
          <td>Event</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Event Description</td>
          <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, nisi fuga repellat iure tenetur modi
            natus eum! Nobis magni esse in veniam laudantium aperiam libero.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Event Type</td>
          <td>Offline</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Date&Time</td>
          <td>30-1-2023, 3:00PM</td>
        </tr>

      </tbody>
    </table>
  </div>
    </div>
    <button type="button" className="btn btn-primary mt-3">Previous</button>
    <button type="button" className="btn btn-primary mt-3 ms-5">Request</button> 
  </div>
  </div>
    </div>
  )
}

export default shedule
