import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import FilterItems from "./FilterItems";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [appData, setAppData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const jsonData = await response.json();
      setAppData(jsonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    return (
      <section className="section loading">
        <Loading />
      </section>
    );
  }

  const { company, dates, duties, title } = appData[value];

  const valueChangeHandler = (index) => {
    setValue(index);
  };

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline" />
        </div>
        <div className="jobs-center">
          {/* btn container*/}
          <div className="btn-container">
            <FilterItems
              onAppData={appData}
              onValueChange={valueChangeHandler}
              onValue={value}
            />
          </div>

          {/* job info */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty) => {
              return (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button type="button" className="btn">
          More Info
        </button>
      </section>
    </main>
  );
}

export default App;
