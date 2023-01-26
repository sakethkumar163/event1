import React from 'react'

const Events = () => {
  return (
 <div className='mt-2'>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="past-tab" data-bs-toggle="tab" data-bs-target="#past-tab-pane" type="button" role="tab" aria-controls="past-tab-pane" aria-selected="true">Past Events</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="ongoing-tab" data-bs-toggle="tab" data-bs-target="#ongoing-tab-pane" type="button" role="tab" aria-controls="ongoing-tab-pane" aria-selected="false">Ongoing Events</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#upcoming-tab-pane" type="button" role="tab" aria-controls="upcoming-tab-pane" aria-selected="false">Upcoming Events</button>
      </li>

    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="past-tab-pane" role="tabpanel" aria-labelledby="past-tab" tabindex="0">
          <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-1" aria-expanded="false" aria-controls="my-1">
                    Event 1
                  </button>
                </h2>
                <div id="my-1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita..</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-2" aria-expanded="false" aria-controls="my-2">
                    Event 2
                  </button>
                </h2>
                <div id="my-2" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-3" aria-expanded="false" aria-controls="my-3">
                    Event 3
                  </button>
                </h2>
                <div id="my-3" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
                </div>
              </div>
            </div>
      </div>
      <div className="tab-pane fade" id="ongoing-tab-pane" role="tabpanel" aria-labelledby="ongoing-tab" tabindex="0"><div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-4" aria-expanded="false" aria-controls="my-4">
                Event 4
              </button>
            </h2>
            <div id="my-4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-6" aria-expanded="false" aria-controls="my-6">
                Event 5
              </button>
            </h2>
            <div id="my-6" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-10" aria-expanded="false" aria-controls="my-10">
                Event 6
              </button>
            </h2>
            <div id="my-10" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
        </div></div>
      <div className="tab-pane fade" id="upcoming-tab-pane" role="tabpanel" aria-labelledby="upcoming-tab" tabindex="0"><div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-5" aria-expanded="false" aria-controls="my-5">
                Event 7
              </button>
            </h2>
            <div id="my-5" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-7" aria-expanded="false" aria-controls="my-7">
                Event 8
              </button>
            </h2>
            <div id="my-7" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#my-9" aria-expanded="false" aria-controls="my-9">
                Event 9
              </button>
            </h2>
            <div id="my-9" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis accusamus vero, id, beatae excepturi architecto debitis eos alias magni, ipsa eveniet et ex itaque! Cum officia dolore nulla culpa alias assumenda molestias ratione vero quos, atque cumque error numquam! Officia ratione quis quae consequuntur inventore. Soluta tempore modi expedita.</div>
            </div>
          </div>
        </div></div>
    </div>
    </div>
  )
}

export default Events
