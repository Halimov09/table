const Main = () => {
  return (
    <div className="main">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Energency
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label className="form-check-label" for="firstCheckbox">
                    active energy received
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                  <label className="form-check-label" for="secondCheckbox">
                    Second checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" for="thirdCheckbox">
                    Third checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" for="thirdCheckbox">
                    Third checkbox
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Energency loss
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label className="form-check-label" for="firstCheckbox">
                    First checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                  <label className="form-check-label" for="secondCheckbox">
                    Second checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" for="thirdCheckbox">
                    Third checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" for="thirdCheckbox">
                    Third checkbox
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Energency of 1 st harmonic
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label className="form-check-label" for="firstCheckbox">
                    First checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="secondCheckbox"
                  />
                  <label className="form-check-label" for="secondCheckbox">
                    Second checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" for="thirdCheckbox">
                    Third checkbox
                  </label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="thirdCheckbox"
                  />
                  <label className="form-check-label" for="thirdCheckbox">
                    Third checkbox
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{width: "50%"}}>
          <label class="visually-hidden" for="specificSizeSelect">
            Preference
          </label>
          <select class="form-select" id="specificSizeSelect">
            <option selected>Day</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div style={{display: "flex", gap: "15px", marginTop: "20px"}}>
          <div>
            <label class="visually-hidden" for="specificSizeSelect">
              Preference
            </label>
            <select class="form-select" id="specificSizeSelect">
              <option selected>May</option>
              <option value="1">Iyun</option>
              <option value="2">Iyul</option>
              <option value="3">Avgust</option>
              <option value="4">Sentyabr</option>
              <option value="5">Oktyabr</option>
            </select>
          </div>
          <div>
            <label class="visually-hidden" for="specificSizeSelect">
              Preference
            </label>
            <select class="form-select" id="specificSizeSelect">
              <option selected>years</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary right" style={{marginTop: "20px"}}>Report generating</button>
    </div>
  );
};

export default Main;
