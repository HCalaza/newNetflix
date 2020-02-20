import React, { Component } from "react";
import "./WrapperList.css";
import Card from "./Card/Card.js";
import { ThemeContext } from "../themeContext.js";
import SearchField from "./SearchField/SearchField.js";

class WrapperList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  updateValue(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    return (
      <div className="wrapperList">
        <SearchField updateFilm={this.updateValue.bind(this)} />
        <ThemeContext.Consumer>
          {MoviesDataBase => {
            return (
              <div>
                <div className="wrapperRow">
                  {MoviesDataBase.movies
                    .filter(film => {
                      console.log(film);
                      if (
                        film.Title
                          .toLowerCase()
                          .match(this.state.value.toLowerCase()) != null
                      ) {
                        return film;
                      }
                    })
                    .map(movie => (
                      <Card
                        Title={movie.Title}
                        Type={movie.Type}
                        Director={movie.Director}
                        Description={movie.Description}
                      />
                    ))}
                </div>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
export default WrapperList;
//   constructor(props){
//     super (props);
//     this.state = {
//       value: ""
//     }
//   }
//
//   updateValue(newValue){
//     this.setState({
//       value: newValue
//     })
//     // console.log(this.state.value)
//   }
//
//   render() {
//     // const cardObject = new MoviesDB ()
//     // const entryData = cardObject.getData()
//     // const exitData = entryData.map ((i) => <Card title= {i.title} type={i.type} director={i.director} description={i.description} />)
//     //
//
//     //  = movies.filter((film) => {
//     //   if(film.title.toLowerCase().match(this.state.value.toLowerCase()) != null)
//     //   {
//     //     return (film);
//     //   }
//     // });
//     //
//     // const exitData = filteredSearch.map ((i) => <Card title= {i.title} type={i.type} director={i.director} />)
//
//     return (
//       <div className="wrapperList">
//         <SearchField updateFilm={this.updateValue.bind(this)} />
//         <div className="wrapperRow">
//

//          </div>
//       </div>
//
//           <ThemeContext.Consumer>
//             {value =>
//               {
//               console.log(value);
//                 let filteredSearch;
//                 this.filteredSearch = value.movies.filter((film) => {
//                   if(film.title.toLowerCase().match(this.state.value.toLowerCase()) != null)
//                   {
//                     return (film);
//
//                   }
//                 });
//             }
//           }
//              // })
//               // this.filteredSearch.map(movie => (
//               //   <Card
//               //     title={value.movie.title}
//               //     type={value.movie.type}
//               //     director={value.movie.director}
//               //     description={value.movie.description}
//               //   />
//               // ))
//             // }
//           </ThemeContext.Consumer>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default WrapperList;
