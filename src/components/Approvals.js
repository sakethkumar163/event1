import React from 'react'

const Events = () => {
  return (
 <div className='mt-2'>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="past-tab" data-bs-toggle="tab" data-bs-target="#past-tab-pane" type="button" role="tab" aria-controls="past-tab-pane" aria-selected="true">pending Events</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="ongoing-tab" data-bs-toggle="tab" data-bs-target="#ongoing-tab-pane" type="button" role="tab" aria-controls="ongoing-tab-pane" aria-selected="false">Approved Events</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#upcoming-tab-pane" type="button" role="tab" aria-controls="upcoming-tab-pane" aria-selected="false">Declined Events</button>
      </li>

    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="past-tab-pane" role="tabpanel" aria-labelledby="past-tab" tabindex="0">
          <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Event 1
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita..
                  
                  </div>
                  <div className="accordion-body">
                   <button type="button" className="btn btn-primary ms-4">Accept</button>
                  <button type="button" className="btn btn-primary ms-4 ">Decline</button>
                   </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Event 2
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.
                   </div>
                   <div className="accordion-body">
                   <button type="button" className="btn btn-primary ms-4">Accept</button>
                  <button type="button" className="btn btn-primary ms-4 ">Decline</button>
                   </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Event 3
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.
                 </div>
                  <div className="accordion-body">
                   <button type="button" className="btn btn-primary ms-4">Accept</button>
                  <button type="button" className="btn btn-primary ms-4 ">Decline</button>
                   </div>
                </div>
              </div>
            </div>
      </div>
      <div className="tab-pane fade" id="ongoing-tab-pane" role="tabpanel" aria-labelledby="ongoing-tab" tabindex="0"><div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsOne" aria-expanded="false" aria-controls="flush-collapsOne">
                Event 4
              </button>
            </h2>
            <div id="flush-collapsOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsTwo" aria-expanded="false" aria-controls="flush-collapsTwo">
                Event 5
              </button>
            </h2>
            <div id="flush-collapsTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsThree" aria-expanded="false" aria-controls="flush-collapsThree">
                Event 6
              </button>
            </h2>
            <div id="flush-collapsThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
        </div></div>
      <div className="tab-pane fade" id="upcoming-tab-pane" role="tabpanel" aria-labelledby="upcoming-tab" tabindex="0"><div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapeOne" aria-expanded="false" aria-controls="flush-collapeOne">
                Event 5
              </button>
            </h2>
            <div id="flush-collapeOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapeTwo" aria-expanded="false" aria-controls="flush-collapeTwo">
                Event 6 
              </button>
            </h2>
            <div id="flush-collapeTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapeThree" aria-expanded="false" aria-controls="flush-collapeThree">
                Event 7
              </button>
            </h2>
            <div id="flush-collapeThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
        </div></div>
    </div>
    </div>
  )
}

export default Events
