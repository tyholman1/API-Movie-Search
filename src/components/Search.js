import { useState } from "react";

function Search(props) {
  const [data, setData] = useState({
    searchTerm: ""
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setData({ ...data, [event.target.name]: event.target.value });
  };
  // explaination of line 11 ( [event.target.name] )
  // const foo = 'bar';

  // const obj = {
  //   [foo]: 'blahblah',
  // };

  // console.log(obj); prints obj below
  /*
    {
      bar: "blahblah"
    }
  */

  const handleSubmit = (evt) => {
    //prevent page from refreshing on form submission
    evt.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.movieSearch(data.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={data.searchTerm}
          name="searchTerm"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;
