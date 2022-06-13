import html2canvas from "html2canvas";

function App() {
   const capture = () => {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
         document.body.appendChild(canvas);
      });
   };

   return (
      <div>
         <div id="capture" style={{ padding: 10, backgroundColor: "#f5da55" }}>
            <h4 style={{ color: "#000" }}>Hello world!</h4>
         </div>

         <button onClick={capture}>Capture</button>
      </div>
   );
}

export default App;
