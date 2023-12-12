import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hotels/countByCity?cities=Gurugram,Delhi,Noida");
  

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://c0.wallpaperflare.com/preview/955/90/428/india-gurugram-office-building.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Gurugram</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1595928607828-6fdaee9c0942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsaGl8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://thumbs.dreamstime.com/b/cityscape-skyscrapers-smaller-apartment-water-tower-temple-other-items-typical-indian-city-like-noida-gurgaon-delhi-114973441.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Noida</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;