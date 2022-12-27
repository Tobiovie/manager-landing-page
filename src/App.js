import Grid from "./Grid";
import Nav from "./Nav";


function App() {
//   const observer=new ResizeObserver((entr)=>{
//     entr.map((r)=>{
//         if(r.contentRect.width==700){
//             r.target.classList.add('red')
//         }else{
//           r.target.classList.remove('red')
//         }
//         console.log(r.contentRect.width)
        
//     })
// })
// const div=document.querySelector('body')
// observer.observe(div)
  return (
    <div className="App">
      <Nav/>
      <Grid/>
    </div>
  );
}

export default App;
